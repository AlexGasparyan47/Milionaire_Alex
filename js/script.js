'use strict';

let  minGame = document.querySelector('.game-block'),
gameWrapper = document.querySelector('.game-wrap'),
startBtn = document.querySelector('.start-btn'),
endbtn = document.querySelector('.end-btn'),
btnAnswers = document.querySelectorAll('.answer'),
blockQuestion = document.querySelectorAll('.question'),
helpBtns = document.querySelectorAll('.hints-help'),
winBlock = document.querySelectorAll('.wins-block'),
helpfifty = document.querySelector('.fifty-fifty'),
helpall = document.querySelector('.hall-help'),
helpFriend = document.querySelector('.call-friend'),
helpAi = document.querySelector('.ai-help'),
game = document.querySelector('.game')
////////////===========>

let changedQuestion = document.getElementById('hintBox')
let extraQuestion = document.getElementById('extra')
let flagExtra = true


let endB = document.getElementById('end')

const popup = document.getElementById('rulesPopup')
const showBtn = document.getElementById('showRules')

let aiExplainBlock = document.getElementById('aiExplainBlock')
let aiExplainText = document.getElementById('aiExplainText')
let aiExplainClose = document.getElementById('aiExplainClose')

const OPEN_AI_KEY = ''
const OPENAI_MODEL = ''



showBtn.addEventListener('click', () => {
    popup.classList.add("show")

})

popup.addEventListener("click", () => {
    popup.classList.remove('show')
})

const generalMusic = new Audio('./music/end-sound.mp3')
const questionSong = new Audio('./music/questions-sound.mp3')
let cont = 0
let fixed = new Audio('./music/8,000-question.mp3')
let incorrectSoundFlag = false 


generalMusic.loop = true
window.addEventListener('click', () => {
    generalMusic.play();
}, {once : true})


endbtn.addEventListener('click', () => {
    setTimeout(()=>{
        game.computedStyleMap.backgroundImage = ""
    },2000)
    questionSong.pause()
    minGame.classList.remove('animate__backInUP')
    minGame.classList.remove('animate__flipIbX')
    minGame.classList.add('animate__animeted','anime__backOutDown')

    setTimeout(()=>{
        minGame.style.display = 'none'
        startBtn.style.display = 'block'
        startBtn.classList.remove('animate__backOutUP')
        startBtn.classList.add('animate__backInDown')

    },1000)

    setTimeout(() => {
        startBtn.classList.remove('animate__backInDow')
    },2000)

    let userWin = document.querySelector('.user-win')

    ///////

})


startBtn.addEventListener('click', ()=>{
    generalMusic.pause()
    generalMusic.currentTime = 0
    game.style.backgroundImage = "url('./image/galaxy.jpg')"
    game.style.backgroundImage = "100%"

    startBtn.classList.add('animate__animated','animate__backOutUp')
    startBtn.classList.remove('animate__backOutDown')
    showBtn.remove()



})


