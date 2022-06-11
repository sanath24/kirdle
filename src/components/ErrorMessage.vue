<script lang="ts">
import { store } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "KeyboardButton",
  props: {
      text: {
          required: true,
          type: String
      },
      show: {
          required: true,
          type: Boolean
      }
  },
  data () {
      return { store }
  }
  
})
</script>

<template>
<div class="box-border bg-black p-5 text-white flex justify-center items-center w-36 h-16 text-center rounded-xl" :class="[show ? 'opacity-1' : 'opacity-0 transition transition-opacity duration-500']">
    {{text}}
</div>
</template>