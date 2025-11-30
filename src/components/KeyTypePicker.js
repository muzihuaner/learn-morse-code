import React, {useContext, useEffect} from "react"
import {KeyTypeContext} from "../contexts/keyTypeContext"


export default React.memo(function KeyTypePicker() {

    const {setKeyType, keyType} = useContext(KeyTypeContext)

    function handleClick(e) {
        setKeyType(e.target.id)
        switch (e.target.id)
        {
            case 'straight':
                e.target.classList.add('selected');
                document.getElementById('electronic').classList.remove('selected')
                document.querySelector('#morseButton').classList.remove('showPaddles')
                document.querySelector('.paddle').classList.remove('showPaddles')
                document.querySelector('.paddle#left').classList.remove('showPaddles')
                document.querySelector('.paddle#right').classList.remove('showPaddles')
                document.getElementById('paddle-mode-buttons').style.visibility = 'hidden'
                document.getElementById('morseButtonText').innerHTML = '点击按钮或按空格键'
                break;
            case 'electronic':
                e.target.classList.add('selected');
                document.getElementById('straight').classList.remove('selected')
                document.querySelector('#morseButton').classList.add('showPaddles')
                document.querySelector('.paddle').classList.add('showPaddles')
                document.querySelector('.paddle#left').classList.add('showPaddles')
                document.querySelector('.paddle#right').classList.add('showPaddles')
                document.getElementById('paddle-mode-buttons').style.visibility = 'visible'
                document.getElementById('morseButtonText').innerHTML = '点击/按住按钮或按逗号/句号'
                break
            case 'modeA':
                e.target.classList.add('selected')
                document.getElementById('modeB').classList.remove('selected')
                break;
            case 'modeB':
                e.target.classList.add('selected')
                document.getElementById('modeA').classList.remove('selected')
                break;
        }
    }

    useEffect(() => {
        document.querySelector(`button#${keyType}`).classList.add('selected')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div id="keyType" className="mode-picker">
            <div id="title">
                电键类型
            </div>
            <div id="key-type-buttons">
                <button id="straight" onClick={handleClick}>
                    直键
                </button>
                <button id="electronic" onClick={handleClick}>
                    电子键
                </button>
            </div>
            <div id="paddle-mode-buttons">
                <fieldset id="paddle-mode">
                    <legend>按键模式</legend>
                    <button id="modeA" class="selected" onClick={handleClick}>
                        A
                    </button>
                    <button id="modeB" onClick={handleClick}>
                        B
                    </button>
                    <br />
                </fieldset>
            </div>
        </div>
    )
})