<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import KirdleGrid from "./components/KirdleGrid.vue";
import KirdleKeyboard from "./components/KirdleKeyboard.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
import { store } from "./store";

export default defineComponent({
  name: "App",
  components: { KirdleGrid, KirdleKeyboard, ErrorMessage },
  data () {
    return {store}
  }
})
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <nav class="flex justify-center bg-blue-300 w-full p-5 border-blue-400 border-b-2">
      <h1 class="text-4xl font-bold tracking-widest">KIRDLE</h1>
    </nav>
    <KirdleGrid class="my-5"></KirdleGrid>
    <KirdleKeyboard/>

  </div>
  <div class="absolute top-0 left-0 w-screen flex justify-center mt-28 z-10">
    <div>
      <ErrorMessage :show="store.alerts.errors.notEnoughLetters" text="Not enough letters"/>
      <ErrorMessage :show="store.alerts.success" text="Success!"/>
      <ErrorMessage :show="store.alerts.failure" text="Try again next time!"/>
    </div>
  </div>
 
</template>

