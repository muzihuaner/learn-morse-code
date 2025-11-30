import React from "react"
import { contactLinks } from "../data/social"

export default (function Footer() {

    function handleClick(event) {
        window.open(contactLinks[event.target.id]['link'])
    }
    
    return (
        <div id="footer">
            @genemecija 开发&nbsp;<span id="contact-icons"><i id="github" onClick={handleClick} className={contactLinks['github']['icon']}></i></span>
        </div>
    )
})