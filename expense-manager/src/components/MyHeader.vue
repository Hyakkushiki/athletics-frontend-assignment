<template>
  <div class="title">
      <span>Expense Tracking</span>
      <button class="add">Add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MyHeader',
    props: {

    },
    setup() {
        
    },
})
</script>

<style scoped>
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
</style>