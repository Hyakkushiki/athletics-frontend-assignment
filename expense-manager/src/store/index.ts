import { Categories, Category, Expense, ExpenseTypeEnum, MonthDisp, StateObject } from "@/interfaces";
import { reactive } from "vue";
import { nanoid } from "nanoid";
import _ from "lodash"
import { MonthDClass } from "@/classes";

const defaultExpense = {
    id: nanoid(),
    type: ExpenseTypeEnum.CashOut,
    category: { isMain: true, order: 1, name: "Food" },
    date: new Date(), // 'December 17, 1995 03:24:00'
    amount: NaN,
    description: '',
} as Expense

const state = reactive({
    currentExpense: {} as Expense,
    expensesArray: [defaultExpense] as Expense[],
    isSet: [ false, false ],
    categories: Categories,
    monthDisplay: [ new MonthDClass().monthD ],
}) as StateObject

const methods = {
    createNewExpense(){
        state.currentExpense = _.cloneDeep(defaultExpense)
        state.currentExpense.id = nanoid();
        state.isSet.map(el => {
            el = false
        })
    },
    pushCurrrentExpense(){
        state.expensesArray.push(state.currentExpense)
        // state.expensesArray = _.orderBy(state.expensesArray, ['date'],['asc'])
    },

    setCurrentAmount(val: number){
        state.currentExpense.amount = val;
        state.isSet[1] = val.toString() !== '' ? true : false
    },

    getCurrentCategory(){
        return state.currentExpense.category;
    },
    setCurrentCategory(val: Category){
        state.currentExpense.category = val;
    },

    getCurrentDate(){
        return state.currentExpense.date;
    },
    setCurrentDate(val: Date){
        state.currentExpense.date = new Date(val);
        state.isSet[0] = true
    },

    getCurrentDescription(){
        return state.currentExpense.description;
    },
    setCurrentDescription(val: string){
        state.currentExpense.description = val;
    },

    setCurrentType(val: ExpenseTypeEnum){
        state.currentExpense.type = val;
    },

    getisSetValue(){
        return state.isSet.every(Boolean)
    },

    pushNewMonthDisplay(val: MonthDisp){
        state.monthDisplay.push(val);
    }
}

export default {
    state,
    methods,
}