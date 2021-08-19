import { Category, Expense, ExpenseTypeEnum, StateObject } from "@/interfaces";
import { reactive } from "vue";
import { nanoid } from "nanoid";
import _ from "lodash"

const defaultExpense = {
    id: nanoid(),
    type: ExpenseTypeEnum.CashOut,
    category: { isMain: true, order: 1, name: "Food" },
    date: new Date(),
    amount: NaN,
    description: '',
} as Expense

const state = reactive({
    currentExpense: {} as Expense,
    expensesArray: [] as Expense[],
    filled: [ false, false, false, false ],
    categories: [
        { isMain: true, order: 1, name: "Food" },
        { isMain: true, order: 2, name: "Transportation" },
        { isMain: true, order: 3, name: "Work" },
        { isMain: true, order: 4, name: "Entertainment" },
    ] as Category[]
}) as StateObject

const methods = {
    createNewExpense(){
        state.currentExpense = _.cloneDeep(defaultExpense)
        state.currentExpense.id = nanoid();
    },
    pushCurrrentExpense(){
        state.expensesArray.push(state.currentExpense)
        state.categories = _.orderBy(state.categories, ['date'],['asc'])
    },

    setCurrentAmount(val: number){
        console.log('changing at setCurrentAmount()')
        state.currentExpense.amount = val;        
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

        state.currentExpense.date = val;        
    },

    getCurrentDescription(){
        return state.currentExpense.description;        
    },
    setCurrentDescription(val: string){
        state.currentExpense.description = val;        
    },

    setCurrentType(val: ExpenseTypeEnum){
        state.filled[0] = true;
        state.currentExpense.type = val;        
    },
}

export default {
    state,
    methods,
}