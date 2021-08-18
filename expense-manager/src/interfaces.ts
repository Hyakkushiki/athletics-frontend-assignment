export enum ExpenseTypeEnum {
    CashIn = "Cash In",
    CashOut = "Cash Out",
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
    type: ExpenseTypeEnum
    category: Category
    date: Date
    amount: number
    description: string
}

export const Categories: Category[] = [
    { isMain: true, order: 1, name: "Food" },
    { isMain: true, order: 2, name: "Transportation" },
    { isMain: true, order: 3, name: "Work" },
    { isMain: false, order: 4, name: "Traveling" },
]
