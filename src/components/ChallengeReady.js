import React, { useContext } from "react"
import { ChallengeContext } from "../contexts/challengeContext"
import WordListPicker from "./WordListPicker"

export default (function ChallengeReady() {

    const {startChallenge} = useContext(ChallengeContext)

    return (
        <div id="challengeReady" className="notify">
            <span id="notify-title">挑战选项</span>
            <WordListPicker />
            <button id="startChallenge" onClick={startChallenge}>开始挑战</button>
        </div>
    )
})

