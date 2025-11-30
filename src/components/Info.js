import React from "react"
import useMorsePlayer from "../hooks/useMorsePlayer"
import straight_key from "../media/images/straight_key.jpg"
import electronic_key from "../media/images/electronic_key.jpg"

export default React.memo(function Info() {

    const {playMorseWord} = useMorsePlayer()

    return (
        <div id="info">
            <h1>摩尔斯电码</h1>
            <p>摩尔斯电码是一种通信方法，使用不同序列的短音（点）和长音（划）来表示字母、数字和特殊字符。这个工具将帮助初学者学习摩尔斯电码。</p>

            <h2>点和划</h2>
            <p>
                <span className="bold">点</span> <i className="ri-volume-up-fill" onClick={() => playMorseWord('.')}></i> (<span className="ditdah">.</span>) 短音，是摩尔斯电码通信的基本单位长度。<br />
                <span className="bold">划</span> <i className="ri-volume-up-fill" onClick={() => playMorseWord('-')}></i> (<span className="ditdah">-</span>) 长音，每个划的长度等于三个点。
            </p>

            <h2>间距</h2 >
            <p>在摩尔斯电码中，点和划之间的间距很重要。不同长度的间距表示不同的含义。<br/>

                <span className="bold">字符内间距</span> 摩尔斯电码中的一个字母可以由多个点和划组成。构成单个字母的点和划之间的间距各为一个点的长度。例如，三个点，每个点之间由一个点长度的间距分隔，就是字母"S"。(<span className="ditdah">...</span>) <i className="ri-volume-up-fill" onClick={() => playMorseWord('...')}></i><br />

                <span className="bold">字符间间距</span> 连续字母之间的间距为三个点的长度。例如，三个点，每个点之间由三个点长度的间距分隔，就是"EEE"。(<span className="ditdah">. . .</span>) <i className="ri-volume-up-fill" onClick={() => playMorseWord('. . .')}></i><br />
                
                <span className="bold">单词间间距</span> 单词之间的间距为七个点的长度。例如，三个点，每个点之间由七个点长度的间距分隔（在此示例中用正斜杠表示：<span className="ditdah">././.</span>），就是"E E E"。 <i className="ri-volume-up-fill" onClick={() => playMorseWord('././.')}></i>
            </p>

            <h2>速度</h2>
            <p>
                通过调整点的长度来增加或减少通信速率，这反过来会调整划和间距的长度。在选项部分调整 <b>WPM</b>（每分钟单词数）来调整速度。
            </p>

            <h2>电报键类型</h2 >
            <p>用于发送摩尔斯电码的仪器称为电键。</p>
            
            <center><img src={straight_key} alt="直键" /></center>
            <p><b>直键</b> 使用单个按钮，按下时产生音调。直键需要更高的准确性，因为点、划和间距的长度完全由手动控制。</p>
            <center><img src={electronic_key} alt="电子键"></img></center>
            <p><b>电子键</b> 使用自动生成点和划的按键。这里使用的电子键是一种双桨键，左桨用于点，右桨用于划。同时按下两个桨会自动在点和划之间交替。模式 B 会自动添加一个额外的交替点或划。在适当的时候在两个桨之间切换，以构建摩尔斯电码字母。</p>

            <p>查看 <a href='https://www.youtube.com/watch?v=uEy4Wvy6uUg' target='_blank' rel="noopener noreferrer">这个视频</a> 了解直键和电子键之间的区别。</p>
        </div>
    )
})