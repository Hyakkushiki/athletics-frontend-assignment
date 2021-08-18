<template>
  <div>
    <div v-if="labels.title1 === 'Expense'">
      <button class="button expense" v-bind:class="{selB: selectedButton }" v-on:click="selectedButton=true">{{labels.title1}}</button>
      <button class="button category" v-bind:class="{selB: !selectedButton }" v-on:click="selectedButton=false">{{labels.title2}}</button>
    </div>
    <div v-else-if="labels.title1 === 'Cash in'">
      <div class="button-wrap">
        <div class="title">Type</div>
        <button class="button cashin" v-bind:class="{selB: selectedButton }" v-on:click="selectedButton=true">{{labels.title1}}</button>
        <button class="button cashout" v-bind:class="{selB: !selectedButton }" v-on:click="selectedButton=false">{{labels.title2}}</button>
      </div>
    </div>
    <div v-else>
      <button class="button cancel" >{{labels.title1}}</button>
      <button class="button add" @click="pushCurrentExpense">{{labels.title2}}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { NameLabel } from "../interfaces";

export default defineComponent({
  name: "MyFooter",
  props: {
       labels: {
         required: true,
         type: Object as PropType<NameLabel>
       }
   },
   setup() {
    let selectedButton = ref(true)
    const pushCurrentExpense = function(){
      console.log('pushed out');
      
    }

    return {
        selectedButton,
        pushCurrentExpense,
    }
  },
});
</script>

<style scoped>
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
  background-color: #c4d7ee;
}
.category {
  width: 50%;
  background-color: #c4d7ee;
}

.cancel {
  width: 45%;
  border: 2px solid #4b97f2;
  color: #4b97f2;
  background-color: white;
  margin-right: 5px;
  margin-bottom: 10px;
  padding: 5px;
}
.add {
  width: 45%;
  color: white;
  background-color: #4b97f2;
  margin-left: 5px;
  margin-bottom: 10px;
  padding: 5px;
}

.button-wrap {
  padding: 0px;
  margin: 0px;
}
.cashin {
  width: 42.5%;
  padding: 10px;
  border: 0px;
  border-radius: 5px 0px 0px 5px;
  background-color: #c4d7ee;
}
.cashout {
  width: 42.5%;
  padding: 10px;
  border: 0px;
  border-radius: 0px 5px 5px 0px;
  background-color: #c4d7ee;
}

.title {
  text-align: left;
  margin-left: 7.5%;
}
.selB {
  background-color: #4b97f2;
}
</style>
