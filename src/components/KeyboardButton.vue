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
      scaleW: {
          type: Number,
          default: 1
      }
  },
  created() {
  },
  data () {
      return {}
  },
  methods: {
      typeLetter (char: string) {
        
        if (store.curTile >= store.tileArray.length - 1) {
            return
        }

        if (store.curTile % 5 == 4) {
            if (store.tileArray[store.curTile].ch == " ") {
                store.tileArray[store.curTile].ch = char
            }
            return
        }

        store.tileArray[store.curTile].ch = char
        store.curTile++
      },
      guess () {
          if (store.curTile % 5 != 4) {
              // TODO: Throw error message
              return
          }

          let curRow = Math.floor(store.curTile / 5)

          for (let i = curRow * 5; i < curRow * 5 + 5; i++) {
              if (store.solution.includes(store.tileArray[i].ch)) {
                  if (store.solution[i - curRow * 5] == store.tileArray[i].ch) {
                      store.tileArray[i].color = "bg-green-300"
                      store.guessStatus[store.tileArray[i].ch.charCodeAt(0) - 41] = 2
                      continue
                  }

                  store.tileArray[i].color = "bg-yellow-300"
                  store.guessStatus[store.tileArray[i].ch.charCodeAt(0) - 41] = 1
                  continue
              }
              store.tileArray[i].color = "bg-gray-300"
              store.guessStatus[store.tileArray[i].ch.charCodeAt(0) - 41] = 0
          }
          
          store.curTile++
      },
      deleteLetter () {
          if (store.curTile % 5 == 0) {
              return
          }
          
          if (store.curTile % 5 == 4) {
            if (store.tileArray[store.curTile].ch == " ") {
                store.curTile--
            }
            store.tileArray[store.curTile].ch = " "
            return
        }
        store.curTile--
        store.tileArray[store.curTile].ch = " "
      }
  }
})
</script>

<template>
    <button @click="text == 'Enter' ? guess() : (text == 'Back' ? deleteLetter() : typeLetter(text))" class="flex justify-center items-center font-bold mr-1 rounded-md bg-gray-200 h-8" :style='{width: 28 * scaleW + "px"}'>{{ text }}</button>
</template>