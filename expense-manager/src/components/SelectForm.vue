<template>
  <div class="wrapping">
    <div class="title">Category</div>
      <select v-model="selected" class="select">
        <option v-for="option in options" :value="option.name" :key="option.order">
          {{ option.name }}
        </option>
      </select>
      {{ selected }}
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";

export default defineComponent({
  setup() {
    const store: any = inject('store')
    const selected = ref(store.state.categories[0].name)
    const options = store.state.categories
    
    return {
      selected,
      options,
      store
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
.select {
  color: black;
  background-color: rgba(255, 255, 255, 0.89);
  top: 50px;
  padding: 5px 0px;
  width: 85%;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 2px;
  height: 35px;
}
</style>
