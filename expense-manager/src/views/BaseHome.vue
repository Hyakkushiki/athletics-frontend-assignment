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
import { NameLabel, StateObject } from '../interfaces'

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

    const months:WritableComputedRef<Date> = computed({
        get() { return store.methods.getCurrentDate() },
        set(val) { store.methods.setCurrentDate(val) }
    })
    console.log(months)
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
