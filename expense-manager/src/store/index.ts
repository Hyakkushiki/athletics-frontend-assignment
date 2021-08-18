import { Category, Expense, ExpenseTypeEnum } from "@/interfaces";
import { reactive } from "vue";
import { nanoid } from "nanoid";

const defaultExpense = {
    id: nanoid(),
    type: ExpenseTypeEnum.CashOut,
    category: { isMain: true, order: 1, name: "Food" },
    date: new Date(),
    amount: 1500,
    description: 'hamburgers, waffles',
} as Expense

const state = reactive({
    currentExpense: defaultExpense,
    expensesArray: [defaultExpense] as Expense[],
    categories: [
        { isMain: true, order: 1, name: "Food" },
        { isMain: true, order: 2, name: "Transportation" },
        { isMain: true, order: 3, name: "Work" },
        { isMain: true, order: 4, name: "Entertainment" },
    ] as Category[]
})

const methods = {
    setInputValues(val: string){
        // state.input100 = val;        
    }
}

export default {
    state,
    methods,
}