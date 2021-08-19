export enum ExpenseTypeEnum {
    CashIn = "Cash In",
    CashOut = "Cash Out",
}

export interface StateObject {
    currentExpense: Expense,
    expensesArray: Expense[],
    categories: Category[],
    filled: boolean[]
}
export interface NameLabel {
    title1: String;
    title2?: String;
}

export interface Category {
    name: string
    isMain: boolean
    order: number
}

export interface Expense {
    id: string
    type: {type: ExpenseTypeEnum, isSet: boolean}
    category: {category: Category, isSet: boolean}
    date: {date: Date, isSet: boolean}
    amount: {amount: number, isSet: boolean}
    description: string
}

export const Categories: Category[] = [
    { isMain: true, order: 1, name: "Food" },
    { isMain: true, order: 2, name: "Transportation" },
    { isMain: true, order: 3, name: "Work" },
    { isMain: false, order: 4, name: "Traveling" },
]
