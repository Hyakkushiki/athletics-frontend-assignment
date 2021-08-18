<template>
  <div class="wrapping">
    <div class="title">Title</div>
    <div v-if="inputType === 'Amount'">
      <input class="input" type="number" placeholder="1500" required />
    </div>

    <div v-else-if="inputType === 'Date'">
      <input class="input" type="date" placeholder="05/06/2021" required />
    </div>

    <div v-else>
      <textarea class="input" placeholder="describe the expense"></textarea>
    </div>

    <br />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseForms",
  props: {
    inputType: {
      required: true,
      type: String,
    },
  },
  setup() {},
});
</script>

<style scoped>
.wrapping {
  padding-top: 10px;
}
.input {
  width: 85%;
}
.title {
  text-align: left;
  margin-left: 7.5%;
}
textarea {
  resize: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
