<template>
    <div class="flexContainer">
        <MyHeader />

        <div class="content">
            <my-footer />
            <SelectForm />
            <BaseForms inputType='Amount'/>
            <BaseForms inputType="Date"/>
            <BaseForms inputType="Description"/>
        </div>
        
        <my-footer />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyHeader from "../components/MyHeader.vue"
import MyFooter from "../components/MyFooter.vue"
import BaseForms from "../components/BaseForms.vue"
import SelectForm from "../components/SelectForm.vue"

export default defineComponent({
    name: 'AddExpense',
    components: {
        MyHeader,
        MyFooter,
        BaseForms,
        SelectForm,
    },
    setup() {
        
    },
})
</script>

<style scoped>
.flexContainer {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  flex: 1;
  overflow: auto;
}
</style>