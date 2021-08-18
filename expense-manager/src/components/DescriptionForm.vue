<template>
  <div class="wrapping">
    <div class="title">Description</div>
    <textarea class="input" v-model="currentDescription" placeholder="please describe the expense . ."></textarea>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, WritableComputedRef } from "vue";
import { StateObject } from "../interfaces";

export default defineComponent({
  setup() {
    const store: any = inject('store')
    const state: StateObject = store.state

    const currentDescription:WritableComputedRef<string> = computed({
        get() { return store.methods.getCurrentDescription() },
        set(val) { store.methods.setCurrentDescription(val) }
    })
    
    return {
      currentDescription,
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
.input {
  width: 85%;
  height: 50px;
}
</style>
