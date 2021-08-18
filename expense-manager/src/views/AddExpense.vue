<template>
  <div class="flexContainer">
    <MyHeader :labels="{title1: 'Add Expense'}" />

    <div class="content">
      <my-footer :labels="{title1: 'Cash in', title2: 'Cash out'}" />
      <SelectForm />
      <CurrencyForm />
      <TextForm inputType='Amount'/>
      <TextForm inputType="Date"/>
      <TextForm inputType="Description"/>
    </div>
    
    <my-footer :labels="{title1: 'Cancel', title2: 'Add'}" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyHeader from "../components/MyHeader.vue";
import MyFooter from "../components/MyFooter.vue";
import BaseForms from "../components/BaseForms.vue";
import SelectForm from "../components/SelectForm.vue";
import CurrencyForm from "../components/CurrencyForm.vue";

export default defineComponent({
  name: "AddExpense",
  components: {
    MyHeader,
    MyFooter,
    BaseForms,
    SelectForm,
    CurrencyForm,
  },
  // setup() {},
});
</script>

<style scoped>
.flexContainer {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  flex: 1;
  overflow: auto;
}
.title {
  display: inline-block;
  color: #194277;
  padding: 15px 0px;
  width: 100%;
  background-color: #c4d7ee;
  font-size: 16px;
}
.add {
  font-size: 14px;
  color: white;
  width: 60px;
  background-color: #4b97f2;
  position: absolute;
  right: 0px;
  margin: -5px 5px;
  padding: 5px;
  border: none;
}
.button {
  color: white;
  border: 1px solid white;
  padding: 15px 0px;
  text-align: center;
  font-size: 16px;
  z-index: 100;
}
.expense {
  width: 50%;
  background-color: #4b97f2;
  left: 0;
}
.category {
  width: 50%;
  background-color: #c4d7ee;
  right: 0;
}
</style>
