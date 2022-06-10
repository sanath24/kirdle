<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "KeyboardButton",
  props: {
      text: {
          required: true,
          type: String
      },
      scaleW: {
          type: Number,
          default: 1
      }
  },
  created() {
  },
  data () {
      return {}
  }
})
</script>

<template>
    <button class="flex justify-center items-center font-bold mr-1 rounded-md bg-gray-200 h-8" :style='{width: 28 * scaleW + "px"}'>{{ text }}</button>
</template>