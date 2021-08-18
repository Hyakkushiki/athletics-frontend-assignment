<template>
  <div class="wrapping">
    <div class="month">
      <div class="date">{{ month }}</div>
      <div class="total">105860</div>
    </div>

    <CategoryList
      v-for="(item, index) in items"
      :key="index"
      :expense="item.message"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, WritableComputedRef } from "vue";
import { StateObject } from "../interfaces";
import CategoryList from "../components/CategoryList.vue";

export default defineComponent({
  props: {
    month: String,
  },
  setup() {
    const store: any = inject('store')
    const state: StateObject = store.state

    const currentDate:WritableComputedRef<Date> = computed({
        get() { return store.methods.getCurrentDate() },
        set(val) { store.methods.setCurrentDate(val) }
    })
    
    return {
      currentDate,
      CategoryList,
    }
  }
})
</script>

<style scoped>
.wrapping {
  padding-top: 25px;
}
.month {
  display: inline-block;
  color: #4b97f2;
  top: 50px;
  padding: 15px 0px;
  width: 85%;
  font-size: 16px;
  border-bottom: 3.5px solid;
}
.date {
  display: inline-block;
  width: 50%;
  text-align: left;
}
.total {
  display: inline-block;
  width: 50%;
  text-align: right;
  font-size: 1.5em;
}
</style>
