import React, {useState} from "react"
import alphabet from '../data/alphabet.json'
import numbers from '../data/numbers.json'
import common100 from '../data/common100.json'
import boys from '../data/names_boys.json'
import girls from '../data/names_girls.json'
import trek from '../data/startrek.json'


const WordListPickerContext = React.createContext()

function WordListPickerContextProvider(props) {

    const [wordListCategory, setWordListCategory] = useState('alphabet')
    
    const [wordListCount, setWordListCount] = useState(26)

    let wordList = []

    switch (wordListCategory) {
        case "alphabet":
            wordList = alphabet.words
            break
        case "numbers":
            wordList = numbers.words
            break
        case "boys":
            wordList = boys.words
            break
        case "girls":
            wordList = girls.words
            break
        case "startrek":
            wordList = trek.words
            break
        case "common100":
            wordList = common100.words
            break
        default:
            wordList = alphabet.words
    }

    const wordListCountMax = wordList.length

    const metadata = {
        'alphabet': {name: '字母', description: '字母表中的所有字母'},
        'numbers': {name: '数字', description: '0-9'},
        'boys': {name: '男孩名字', description: '流行的男孩名字'},
        'girls': {name: '女孩名字', description: '流行的女孩名字'},
        'startrek': {name: '星际 迷航', description: '星际 迷航 宇宙'},
        'common100': {name: '常用词', description: '100个常用词'}
    }

    // Shuffle input array and return
    function randomize(arr) {
        let array = [...arr]
        let currentIndex = array.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    return (
        <WordListPickerContext.Provider value={{
            wordList: wordList.slice(0,wordListCount), 
            wordListShuffled: randomize(wordList).slice(0,wordListCount), 
            wordListCategory: wordListCategory, 
            setWordListCategory: setWordListCategory, 
            metadata: metadata, 
            wordListCount: wordListCount, 
            setWordListCount: setWordListCount,
            wordListCountMax: wordListCountMax
        }}>
            {props.children}
        </WordListPickerContext.Provider>
    )
}

export {WordListPickerContextProvider, WordListPickerContext}
