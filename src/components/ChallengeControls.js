import React from "react"

export default (function ChallengeControls(props) {

    return (
        <div id="challengeControls">
            <button onClick={props.cancelChallenge}>退出挑战</button>
        </div>
    )
})