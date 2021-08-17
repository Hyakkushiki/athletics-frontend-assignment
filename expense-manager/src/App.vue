<template>
  <div>
    <AddExpense />
    <!-- <MyHeader /> -->
    <!-- <MyFooter /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import BaseHome from "./views/BaseHome.vue";
import AddExpense from "./views/AddExpense.vue";
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    BaseHome,
    AddExpense,
    MyHeader,
    MyFooter,
  },
  setup(){

  }
})
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
