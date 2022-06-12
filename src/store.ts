import { reactive } from "vue";
import type { Tile } from "./types";



export const store = reactive({
    tileArray: Array(30).fill(0).map((i) => ({ch: " ", color: "bg-white"} as Tile)) as Tile[],
    curTile: 0,
    solution: ["S", "W", "E", "E", "T"],
    guessStatus: Array(26).fill(-1),
    isDone: false,
    alerts: {
        success: false,
        failure: false,
        errors: {
            notEnoughLetters: false
        }
    }
})