import React, { useContext } from "react"
import { GameClockContext } from "../contexts/gameClockContext"
import { ChallengeContext } from "../contexts/challengeContext"
import { WordListPickerContext } from "../contexts/wordListPickerContext"

export default (function ChallengeComplete() {

    const {gameClockTime} = useContext(GameClockContext)
    const {setChallengeState} = useContext(ChallengeContext)
    const {wordListCount, wordListCategory, metadata} = useContext(WordListPickerContext)

    function _continue() {
        setChallengeState('ready')
    }

    const minutes = Math.floor(gameClockTime / 60)
    const seconds = gameClockTime % 60

    let time = (minutes === 0) ? `${seconds} 秒` : `${minutes} 分 ${seconds} 秒`

    return (
        <div id="challengeComplete" className="notify">
            <span id="notify-title">挑战结束</span>
            <span id="message">在<b>{time}</b>，你完成了 <b>{wordListCount}</b> 个词<br />
            从 <b>{metadata[wordListCategory]['name']}</b> 列表<br />
            !</span>
            <button id="continue" onClick={_continue}>继续</button>

        </div>
    )
})

