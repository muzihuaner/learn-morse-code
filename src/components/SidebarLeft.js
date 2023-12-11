import React, { useState } from "react"
import Info from "./Info"
import Legend from "./Legend"
import PlayMorseInput from "./PlayMorseInput"

export default (function SidebarLeft() {

    const [sidebarContent, setSidebarContent] = useState('nav-learn')

    // Hide/show sidebar
    function toggleLeft() {
        document.querySelector('.sidebar#left').classList.toggle('hide')
        document.querySelector('#main-interface').classList.toggle('expandLeft')
    }

    // Handle sidebar navigation selection
    function navClicked(e) {
        if (e.target.id === 'nav-learn') {
            setSidebarContent('nav-learn')
        } else if (e.target.id === 'nav-legend') {
            setSidebarContent('nav-legend')
        } else {
            setSidebarContent('nav-play')
        }
        
        let navItems = document.querySelector(".navbar").childNodes
        navItems.forEach(item => {
            if (item.id === e.target.id) {
                item.classList.add('selected')
            } else {
                item.classList.remove('selected')
            }
        })
    }

    return (
        <div className="sidebar" id="left">
            <div id="sidebar-container">
                <div className="navbar">
                    <div id="nav-play" className="nav-item" onClick={navClicked}>
                        练习
                    </div>
                    <div id="nav-learn" className="nav-item selected" onClick={navClicked}>
                        学习
                    </div>
                    <div id="nav-legend" className="nav-item" onClick={navClicked}>
                        字典
                    </div>
                </div>

                <div id="info-icon" onClick={toggleLeft}><i className="ri-arrow-left-circle-line"></i></div>
                
                <div id='sidebar-content'>
                    {sidebarContent === 'nav-learn' && <Info />}
                    {sidebarContent === 'nav-legend' && 
                        <div id="playerAndLegend">
                            <Legend />
                            <span id="note">通过更改“选项”菜单中的 WPM 来调整摩尔斯电码速度。</span>
                            <PlayMorseInput />
                        </div>
                    }
                </div>
            </div>
        </div>
    )

})
