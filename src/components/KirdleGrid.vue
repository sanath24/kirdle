<script lang="ts">
import { defineComponent } from "vue";
import Tile from "./Tile.vue";
import { store } from "@/store";

export default defineComponent({
  name: "KirdleGrid",
  components: {Tile},
  data () {
      return {store}
  }
})

</script>

<template>
    <div class="grid grid-cols-5 gap-1" id="grid">
        <Tile v-for="tile in store.tileArray" :class="[tile.color]">{{tile.ch}}</Tile>
    </div>
</template>
