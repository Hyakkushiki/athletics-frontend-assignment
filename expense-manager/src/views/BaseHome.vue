<template>
  <div class="wrap">
    <MyHeader />
    <div class="content">
    </div>
    <MyFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyHeader from '../components/MyHeader.vue'
import MyFooter from '../components/MyFooter.vue'

export default defineComponent({
  name: 'BaseHome',
  components: {
    MyHeader,
    MyFooter,
  },
  props: {
    labels: {
      required: true,
      type: Object
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
}
.content {
  flex: 1;
  overflow: auto;
}
</style>
