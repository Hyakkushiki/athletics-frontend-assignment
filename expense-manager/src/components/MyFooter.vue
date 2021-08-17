<template>
    <div>
        <button class="button expense">Expense</button>
        <button class="button category">Category</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MyFooter',

})
</script>

<style scoped>
.button {
  color: white;
  border: 1px solid white;
  padding: 15px 0px;
  text-align: center;
  /* display: inline-block; */
  font-size: 16px;
  /* float: left; */
  /* position: absolute;
  bottom: 0; */
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
</style>