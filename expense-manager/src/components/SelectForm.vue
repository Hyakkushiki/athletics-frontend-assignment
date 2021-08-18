<template>
  <div class="wrapping">
    <div class="title">Category</div>
      <select v-model="currentCategory" class="select">
        <option v-for="category in categories" :value="category" :key="category.order">
          {{ category.name }}
        </option>
      </select>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import { computed, defineComponent, inject, ref, WritableComputedRef } from "vue";
import { Category, StateObject } from "../interfaces";

export default defineComponent({
  setup() {
    const store: any = inject('store')
    const state: StateObject = store.state
    const categories = _.orderBy(state.categories, ['order'],['asc'])

    const currentCategory: WritableComputedRef<Category> = computed({
        get() { return store.methods.getCurrentCategory()},
        set(val) {store.methods.setCurrentCategory(val)}
    })
    
    return {
      categories,
      currentCategory
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
