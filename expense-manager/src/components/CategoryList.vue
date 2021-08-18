<template>
  <div class="month">
    <div class="expense">{{expense}}</div>
    <div class="total">-3024</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, WritableComputedRef } from "vue";
import { StateObject } from "../interfaces";

export default defineComponent({
  props: {
    expense: String,
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
    }
  }
})
</script>

<style scoped>
.month {
  display: inline-block;
  color: #4b97f2;
  padding: 15px 0px;
  width: 85%;
  font-size: 16px;
  border-bottom: 2px solid;
}
.expense {
  display: inline-block;
  width: 50%;
  text-align: left;
}
.total {
  display: inline-block;
  width: 50%;
  text-align: right;
}
</style>
