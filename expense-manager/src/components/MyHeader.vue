<template>
  <div class="title">
      <span>{{ labels.title1 }}</span>
      <button v-if="!!labels.title2" class="add" @click="$router.push('AddExpense')">{{ labels.title2 }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NameLabel } from "../interfaces";

export default defineComponent({
  name: "MyHeader",
  props: {
     labels: {
      required: true,
      type: Object as PropType<NameLabel>,
     },
   },
  setup() {},
});
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
