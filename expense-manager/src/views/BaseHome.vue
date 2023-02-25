<template>
  <div class="wrap">
    <MyHeader :labels="headerLabel"/>
    <div class="content">
      <Months
            v-for="(month, index) in months"
            :key="index"
            :month="month.date"
          />
    </div>
    <MyFooter :labels="footerLabel" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, WritableComputedRef } from "vue";
import MyHeader from "../components/MyHeader.vue";
import MyFooter from "../components/MyFooter.vue";
import Months from "../components/Months.vue";
import { CategoryList, Expense, NameLabel, StateObject } from '../interfaces'
import { MonthDClass } from '../classes'
import _ from "lodash";

export default defineComponent({
  name: "BaseHome",
  components: {
    MyHeader,
    MyFooter,
    Months,
  },
  setup() {
    const store: any = inject('store')
    const state: StateObject = store.state

    const expensesArray = _.cloneDeep(state.expensesArray)
    console.log('month tests')
    console.log(expensesArray[0]['date'].getMonth())
    console.log(expensesArray[0])

    const grouped_months = _.groupBy(expensesArray, (expense:Expense)=> {
      return expense.date.getMonth()
    })

    // pushNewMonthDisplay(val: MonthD){
    //     state.monthDisplay.push(val);
    // }
    let md = new MonthDClass().monthD;

    console.log(grouped_months)
    console.log(_.map(grouped_months, function(monthGroup:Expense[]) {
      monthGroup.forEach(expObj=>{
        const currCatName = expObj.category.name;
        const currCatSum = expObj.amount;
        const currMonthFormatted = (expObj.date.getMonth().valueOf()+1) + '/' + expObj.date.getFullYear();
        
        if (md.month != currMonthFormatted) {
          md = new MonthDClass().monthD;
          md.month = currMonthFormatted;
          console.log('new month: ' + md.month);
        }

        const currCList = md.categoryList.find(cList => {
          cList.categoryName === currCatName;
        });
        console.log('curr category: ' + currCatName);
        if (currCList == undefined) {
          md.categoryList.push({categoryName: currCatName, categorySum: 0})
          console.log('currCList: ' + currCList)
        }

        md.categoryList.forEach(cList => {
          if (cList.categoryName === currCatName) {
            cList.categorySum =+ currCatSum;
          }
        })
        console.log(md)
        // monthD.monthSums =+ expObj.amount;
        
        // md.categoryList.categorySum = md.categoryList.categorySum + expObj.amount;
      })
      store.methods.pushNewMonthDisplay(md);
      return monthGroup
    }))
    console.log(_.map(_.map(_.map(grouped_months))))

  // console.log(_.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  //    console.log('result: ' + result)
  //   console.log('value: ' + value)
  //   console.log('key: ' + key)
  //   return result;
  // }, {}))

    const months:WritableComputedRef<Date> = computed({
        get() { return store.methods.getCurrentDate() },
        set(val) { store.methods.setCurrentDate(val) }
    })
    // console.log(months)
    const headerLabel = {
        title1: "Expense Tracking",
        title2: "Add",
      } as NameLabel

    const footerLabel = {
        title1: "Expense",
        title2: "Category"
      } as NameLabel

    return {
      headerLabel,
      footerLabel,
      months: [
        { date: "5/2021" },
        { date: "6/2021" },
        // { date: "7/2021" },
        // { date: "8/2021" },
      ],
      }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
}
.content {
  flex: 1;
  overflow: auto;
}
</style>
