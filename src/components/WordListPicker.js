import React, {useContext} from "react"
import { WordListPickerContext } from "../contexts/wordListPickerContext";
import { WordFeederContext } from "../contexts/wordFeederContext";
import WordCountPicker from "./WordCountPicker";

export default React.memo(function WordListPicker() {

    const {wordListCategory, setWordListCategory, metadata} = useContext(WordListPickerContext)
    const {resetFeeder, setOrder} = useContext(WordFeederContext)

    const orderOpts = ['sequential', 'random']

    function handleClick(e) {
        resetFeeder()

        // Handle Word List Order selection
        if (orderOpts.includes(e.target.id)) {
            let buttons = document.querySelector(".mode-picker#wordOrderPicker #buttons").childNodes
            buttons.forEach(button => {
                if (button.id === e.target.id) {
                    button.classList.add('selected')
                } else { button.classList.remove('selected')}
            })
            setOrder(e.target.id)
        }
        // Handle Word List Category selection
        else {
            setWordListCategory(e.target.value)
        }
    }

    let wordLists = Object.keys(metadata)
    // Create Option elements for Select element
    let options = wordLists.map((wl, index) => (<option value={wl} key={index}>{metadata[wl]['name']}</option>))

    return (
        <div id="challengeOptions">
            <div id="wordListPicker" className="mode-picker">
                <div id="title">
                    单词列表:
                </div>
                <div id="input">
                    <select id="wordlist-picker" defaultValue={wordListCategory} onChange={handleClick}>
                        {options}
                    </select>
                </div>
            </div>

            <div id="wordOrderPicker" className="mode-picker">
                <div id="title">
                    单词顺序:
                </div>
                <div id="buttons">
                    <button id="sequential" className="selected" onClick={handleClick}>
                        顺序
                    </button>
                    <button id="random" onClick={handleClick}>
                        随机
                    </button>
                </div>
            </div>

            <WordCountPicker />

            <div id="wordlist-description" className="mode-picker">
                <div id="title">
                    描述:
                </div>
                <div id="info">
                    {metadata[wordListCategory]['description']}
                </div>
            </div>
        </div>
    )
})