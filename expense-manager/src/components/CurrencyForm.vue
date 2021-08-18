<template>
  <div class="wrapping">
    <div class="title">Amount</div>
    <input class="input" type="number" placeholder="1500" v-model="amount" required />
    {{ amount }}
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";

export default defineComponent({
  setup() {
    const store: any = inject('store')
    const selected = store.state.categories[0].name
    const options = store.state.categories
    let amount = ref(store.state.expensesArray[0].amount)
    
    return {
      selected,
      options,
      store,
      amount,
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
