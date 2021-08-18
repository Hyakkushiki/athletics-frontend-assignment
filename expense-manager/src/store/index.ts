import { Category, Expense, ExpenseTypeEnum } from "@/interfaces";
import { reactive } from "vue";

const testExpense = {
    type: ExpenseTypeEnum.CashIn,
    category: { isMain: true, order: 1, name: "Food" },
    date: new Date(),
    amount: 4500,
    description: 'This is a Test!',
} as Expense

const state = reactive({
    currentExpense: {} as Expense,
    expensesArray: [testExpense] as Expense[],
    categories: [
        { isMain: true, order: 1, name: "Food" },
        { isMain: true, order: 2, name: "Transportation" },
        { isMain: true, order: 3, name: "Work" },
        { isMain: false, order: 4, name: "Entertainment" },
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