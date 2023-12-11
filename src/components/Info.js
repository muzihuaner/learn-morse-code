import React from "react"
import useMorsePlayer from "../hooks/useMorsePlayer"


export default React.memo(function Info() {

    const {playMorseWord} = useMorsePlayer()

    return (
        <div id="info">
            <h1>摩尔斯电码</h1>
            <p>摩尔斯电码是一种通信方法，它使用各种序列的短音 滴(dits) 和长音 哒(dahs) 来组成字母、数字和特殊字符。 本工具将帮助初学者学习摩尔斯电码。</p>

            <h2>短音 滴 和长音 哒</h2>
            <p>
                <span className="bold">滴</span> <i className="ri-volume-up-fill" onClick={() => playMorseWord('.')}></i> (<span className="ditdah">.</span>) 短音是摩尔斯电码通信的基本长度单位。<br />
                <span className="bold">哒</span> <i className="ri-volume-up-fill" onClick={() => playMorseWord('-')}></i> (<span className="ditdah">-</span>) 长音一般是三个点的长度。
            </p>

            <h2>间隔</h2 >
            <p>在摩尔斯电码中，“滴”和“哒”的间隔很重要。 不同长度的间隔表示不同的含义。<br/>

                <span className="bold">字符内间隔</span> 摩尔斯电码中的一个字母可以由多个“嘀”和“哒”组成。 组成单个字母的“滴”和“哒”之间的空格各为一个“滴”的长度。 例如，三个点，每个点由一个点长的空格分隔，“S”。 (<span className="ditdah">...</span>) <i className="ri-volume-up-fill" onClick={() => playMorseWord('...')}></i><br />

                <span className="bold">字符间隔</span> 连续字母之间的间距为三个点长。例如，三个点，每个点由三点长的空格分隔，“EEE”。 (<span className="ditdah">. . .</span>) <i className="ri-volume-up-fill" onClick={() => playMorseWord('. . .')}></i><br />
                
                <span className="bold">单词间隔</span> 单词之间的空格有七个点长。 例如，三个点，每个点由七个点长的空格分隔（在本例中用正斜杠表示： <span className="ditdah">././.</span>), "E E E". <i className="ri-volume-up-fill" onClick={() => playMorseWord('././.')}></i>
            </p>

            <h2>速度</h2>
            <p>
            通过调整“滴”的长度来增加或减少通信速率，进而调整“滴”和“哒”的长度。调整“选项”中的<b>WPM</b> （每分钟字数）调整速度。
            </p>

            <h2>电报键类型</h2 >
            <p>用于发送莫尔斯电码的工具称为键。</p>
            
            <center><img src='https://jsd.onmicrosoft.cn/gh/muzihuaner/learn-morse-code@master/src/media/images/straight_key.jpg' alt="Straight Key" /></center>
            <p><b>直键</b> 使用单个按钮在按下时发出声音。 需要更高的操作精度，因为“滴”、“哒”和间隔完全由手动控制。</p>
            <center><img src='https://jsd.onmicrosoft.cn/gh/muzihuaner/learn-morse-code@master/src/media/images/electronic_key.jpg' alt="Electronic Key"></img></center>
            <p><b>电键</b> 使用会自动生成“嘀”和“哒”的拨片。 这里的电键是 双桨 键控器，它使用两个拨片 ，<b>模式A</b>  左拨片用于“嘀”，右拨片用于“哒”。 同时按下两个拨片会自动在“嘀”和“哒”之间交替。 <b>模式B</b> 按下左右键会交替发送“嘀，嗒”，放开的时候会比停下时多发一个，也就是放开时正在发“滴”则会多发一个“哒”，而放开时正在发“哒”则会多发一个“滴”。</p>

            <p>观看 <a href='https://www.youtube.com/watch?v=uEy4Wvy6uUg' target='_blank' rel="noopener noreferrer">视频</a> 了解直键和双桨键的区别。</p>
        </div>
    )
})