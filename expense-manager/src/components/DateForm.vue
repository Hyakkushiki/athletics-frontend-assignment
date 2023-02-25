<template>
  <div class="wrapping">
    <div class="title">Date</div>
    <input class="input" type="date" v-model="currentDate" placeholder="05/06/2021" required/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, WritableComputedRef } from "vue";
import { StateObject } from "../interfaces";

export default defineComponent({
  setup() {
    const store: any = inject('store')
    const state: StateObject = store.state

    const currentDate = computed({
        get() {
          const dateObj: Date = store.methods.getCurrentDate()
          const dateString: string = dateObj.getFullYear() + '-0' + (dateObj.getMonth().valueOf()+1) + '-' + dateObj.getDate()
          return dateString
          },
        set(val) { store.methods.setCurrentDate(val) }
    })
    
    return {
      currentDate,
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
  height: 30px;
}
</style>
