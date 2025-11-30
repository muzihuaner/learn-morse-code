import React, {useContext} from "react"
import { ChallengeContext } from "../contexts/challengeContext"
import { GameClockContext } from "../contexts/gameClockContext"
import { GameModeContext } from "../contexts/gameModeContext"
import { MorseBufferContext } from "../contexts/morseBufferContext"
import { WordFeederContext } from "../contexts/wordFeederContext"

export default React.memo(function ModePicker() {

    const {setGameMode} = useContext(GameModeContext)
    const {setMorseCharBuffer} = useContext(MorseBufferContext)
    const {resetFeeder} = useContext(WordFeederContext)
    const {stopGameClock, setGameClockTime, clockIsRunning} = useContext(GameClockContext)
    const {setChallengeState} = useContext(ChallengeContext)

    function handleClick(e) {
        setMorseCharBuffer('')
        resetFeeder()
        setChallengeState('ready')

        setGameMode(e.target.id)

        if (clockIsRunning) { 
            stopGameClock()
            setGameClockTime(0)
        }

        let buttons = document.querySelector(".mode-picker#gameMode #buttons").childNodes
        buttons.forEach(button => {
            if (button.id === e.target.id) {
                button.classList.add('selected')
            } else { button.classList.remove('selected')}
        })
    }

    return (
        <div id="gameMode" className="mode-picker">
            <div id="title">
                模式
            </div>
            <div id='buttons'>
                <button id="practice" className="selected" onClick={handleClick}>
                    练习模式
                </button>
                <button id="challenge" onClick={handleClick}>
                    挑战模式
                </button>
            </div>
        </div>
    )
})