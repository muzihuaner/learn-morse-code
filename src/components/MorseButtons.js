import React from "react"

export default React.memo(function MorseButtons() {

    return (
        <>
            <div id="morseButton">
                <button className="paddle" id="left"></button>
                <button className="paddle" id="right"></button>
            </div>
            <div id="morseButtonText">
                轻触按钮或按下空格键
            </div>
        </>
    )
})