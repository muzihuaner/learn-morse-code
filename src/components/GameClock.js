import React, {useContext} from "react"
import { GameClockContext } from "../contexts/gameClockContext";

export default (function GameClock(props) {
    
    const {gameClockTime} = useContext(GameClockContext)

    const minutes = Math.floor(gameClockTime / 60)
    const seconds = gameClockTime % 60

    return (
        <div id="gameClock">计时⌛️: <span id="clockTime">{minutes} 分 {seconds} 秒</span></div>
    )
})