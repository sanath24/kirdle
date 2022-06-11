<script lang="ts">
import { defineComponent } from "vue";
import KeyboardButton from "./KeyboardButton.vue";

export default defineComponent({
  name: "KirdleKeyboard",
  components: {KeyboardButton},
})

</script>

<template>
<div class="w-full">
    <div class="keyboard-row">
        <KeyboardButton v-for='ch in "QWERTYUIOP"' :text="ch" :id='"button-" + ch'/>
    </div>
    <div class="keyboard-row">
        <KeyboardButton v-for='ch in "ASDFGHJKL"' :text="ch" :id='"button-" + ch'/>
    </div>
    <div class="keyboard-row">
        <KeyboardButton text="Enter" :id='"button-enter"' :scale-w="2"/>
        <KeyboardButton v-for='ch in "ZXCVBNM"' :text="ch" :id='"button-" + ch'/>
        <KeyboardButton text="Back" :id='"button-back"' :scale-w="2"/>
    </div>
</div>

</template>