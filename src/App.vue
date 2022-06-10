<script lang="ts">
import { defineComponent } from "vue";
import KirdleGrid from "./components/KirdleGrid.vue";

export default defineComponent({
  name: "App",
  components: {KirdleGrid}
})
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <nav class="flex justify-center bg-blue-300 w-full p-5 border-blue-400 border-b-2">
      <h1 class="text-4xl font-bold tracking-widest">KIRDLE</h1>
    </nav>
    <KirdleGrid class="my-5"></KirdleGrid>

  </div>
 
</template>

