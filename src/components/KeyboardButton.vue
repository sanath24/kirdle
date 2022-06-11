<script lang="ts">
import { store } from "@/store";
import { defineComponent, type App } from "vue";


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
        if (store.isDone) return

        if (store.curTile >= store.tileArray.length) {
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
          if (store.isDone) return

          if (store.curTile % 5 != 4 || store.tileArray[store.curTile].ch == " ") {
              store.alerts.errors.notEnoughLetters = true
              setTimeout(() => {
                 store.alerts.errors.notEnoughLetters = false 
              }, 500)
              return
          }

          let curRow = Math.floor(store.curTile / 5)

          let solutionFound = true


          for (let i = curRow * 5; i < curRow * 5 + 5; i++) {
              if (store.solution.includes(store.tileArray[i].ch)) {
                  if (store.tileArray[i].ch == " ") {
                      store.alerts.errors.notEnoughLetters = true
                      return 
                  }

                  if (store.solution[i - curRow * 5] == store.tileArray[i].ch) {
                      store.tileArray[i].color = "bg-green-300"
                      store.guessStatus[store.tileArray[i].ch.charCodeAt(0) - 41] = 2
                      continue
                  }

                  store.tileArray[i].color = "bg-yellow-300"
                  store.guessStatus[store.tileArray[i].ch.charCodeAt(0) - 41] = 1
                  solutionFound = false
                  continue
              }
              store.tileArray[i].color = "bg-gray-300"
              store.guessStatus[store.tileArray[i].ch.charCodeAt(0) - 41] = 0

              solutionFound = false
          }

          if (solutionFound) {
              store.alerts.success = true
              setTimeout(() => {
                 store.alerts.success = false 
              }, 500)
              store.isDone = true
              return
          } 

          if (curRow == 5) {
              store.alerts.failure = true
              setTimeout(() => {
                 store.alerts.failure = false 
              }, 500)
              store.isDone = true
              return
          }
          
          store.curTile++
      },
      deleteLetter () {
          if (store.isDone) return

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
      },
      getColor () {
          if (this.text == "Enter" || this.text == "Back") return "bg-gray-200"

          switch (store.guessStatus[this.text.charCodeAt(0) - 41]) {
              case 0: return "bg-gray-300"
              case 1: return "bg-yellow-300"
              case 2: return "bg-green-300"
              default: return "bg-gray-200"
          }
      }
  }
})
</script>

<template>
    <button @click="text == 'Enter' ? guess() : (text == 'Back' ? deleteLetter() : typeLetter(text))" class="flex justify-center items-center font-bold mr-1 rounded-md h-8" :class="[getColor()]" :style='{width: 28 * scaleW + "px"}'>{{ text }}</button>
</template>