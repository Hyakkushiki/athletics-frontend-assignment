<template>
  <div class="wrapping">
    <div class="title">Amount</div>
    <input class="input" type="number" placeholder="1500" v-model="currentAmount" required />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, WritableComputedRef } from "vue";
import { StateObject } from "../interfaces";

export default defineComponent({
  setup() {
    const store: any = inject('store')
    const state: StateObject = store.state

    const currentAmount:WritableComputedRef<number | undefined> = computed({
        get() { return !!state.expensesArray[0] ? state.expensesArray[0].amount : undefined},
        set(val) {store.methods.setCurrentAmount(val)}
    })
    
    return {
      currentAmount,
    }
  }
})
</script>

<style scoped>
.wrapping {
  padding-top: 20px;
}
.title {
  text-align: left;
  margin-left: 7.5%;
  padding-bottom: 5px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.input {
  width: 85%;
  height: 30px;
}
</style>
