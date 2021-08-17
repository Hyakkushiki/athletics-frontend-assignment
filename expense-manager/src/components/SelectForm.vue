<template>
    <div class="wrapping">
        <div class="title">Category</div>
        <div id="id">
            <select v-model="data" class="select">
                <option>
                </option>
            </select>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>
.wrapping {
  padding-top: 20px;
  /* border: dashed 5px rgb(171, 0, 250); */
  /* height: 10px; */
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
}
</style>