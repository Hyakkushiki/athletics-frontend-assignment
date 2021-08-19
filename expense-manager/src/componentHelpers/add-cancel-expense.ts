import { StateObject } from "@/interfaces";
import _ from "lodash";
import { computed, inject, WritableComputedRef } from "vue";

const store: any = inject('store')
const state: StateObject = store.state
const expensesArray = _.cloneDeep(state.expensesArray)

// let grouped_data = _.groupBy(users, Math.floor )

// const sortedMonths = _.grexpensesArray
const categories = _.orderBy(state.categories, ['order'],['asc'])

const months:WritableComputedRef<Date> = computed({
    get() { return store.methods.getCurrentDate() },
    set(val) { store.methods.setCurrentDate(val) }
})