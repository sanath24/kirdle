<script lang="ts">
import { defineComponent } from "vue";
import Tile from "./Tile.vue";

export default defineComponent({
  name: "KirdleGrid",
  components: {Tile}
})

</script>

<template>
    <div class="grid grid-cols-5 gap-1" id="grid">
        <Tile v-for="n in 30"></Tile>
    </div>
</template>
