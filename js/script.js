'use strict';

let  mainGame = document.querySelector('.game-block'),
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
let fixed1= new Audio('./music/8,000-question.mp3')
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

   if(userWin)
    userWin.remove()


})
generalMusic.pause()
fixed1.pause()

let activeWin = document.querySelector('.win-active') || document.querySelector('.win-guaranted')
if(activeWin){
    let spans = activeWin.querySelector('span')
    spans.forEach(spans)

    let visibleAmout = active.innerText.trim()
    let existingWin = document.querySelector('.user-win')
    if(existingWin){
        existingWin.remove()
    }
    
}

let winDiv = document.createElement('div')
winDiv.className = 'user-win animate_animated animate_fadIn'
winDiv.style.cssText = 'text-align: center; font-size: 24px; color: white; margin=top: 300px;'
startBtn.insertAdjacentElement('afterend',winDiv)


setTimeout(()=>{
    winDiv.classList.replace('animate_fedeIn','animate_fadeOut')
    setTimeout(()=>winDiv.remove())
},0)


startBtn.addEventListener('click', ()=>{
    
    generalMusic.pause()
    generalMusic.currentTime = 0
    game.style.backgroundImage = "url('./image/galaxy.jpg')"
    game.style.backgroundImage = "100%"

    startBtn.classList.add('animate__animated','animate__backOutUp')
    startBtn.classList.remove('animate__backOutDown')
    showBtn.remove()




   getStartGame()

   

});


// Խաղի սկիզբը
startBtn.addEventListener('click', () => {//Խաղի սկիզբը կոճակի վրա սեղմելիս , պետք է կատարվեն այս ֆունկցիայում ներառված գործողությւոնները
    generalMusic.pause();
    generalMusic.currentTime = 0;
    game.style.backgroundImage = "url('./img/galaxy.jpg')";
    game.style.backgroundSize="100%"
  
    startBtn.classList.add('animate__animated', 'animate__backOutUp');//նախապես ունեցած կոճակի վրա ավելացնում ենք այս երկու անիմացիաները
    mainGame.classList.remove('animate__backOutDown');//mainGame-ից հեռացնում ենք այս կլաս անուն ունեցող անիմացիան
    showBtn.remove()
    setTimeout(() => {//Ցույց է տալիս թե ինչքան ժամանակ հետո պետք է կատարվի տվյալ գործողությունը
      mainGame.style.display = 'block';
      mainGame.classList.add('animate__animated', 'animate__backInUp');//mainGame-ին ավելացնումէ է նախապես ստեղծված  կլաս անվանում
      startBtn.style.display = 'none';
      setTimeout(() => {
        gameWrapper.classList.add('animate__animated', 'animate__flipInX');//gameWrapper-ին ավելացնումէ է նախապես ստեղծված  կլաս անվանում
      }, 1000);
    }, 500);
    setTimeout(() => {
      endBtn.style.opacity = '1';// տրված է առավելագույն թափանցելիություն
    }, 1000);
    //
    setTimeout(() => {
      questionSong.loop = true
      questionSong.play()
      for (let i = 0; i < btnAnswers.length; i++) {
        btnAnswers[i].addEventListener('click', () => {
          questionSong.pause()
          setTimeout(() => {
            if (count != 5 && count != 10 && count != 15) {
              if (incorrectSoundFlag == false && count < 5) {
                questionSong.play()
              }
              if (count == 15) {
                fixed1.pause()
              }
              questionSong.currentTime = 0
            } else if (count >= 5) {
              fixed1.loop = true
              fixed1.play()
              questionSong.pause()
            }
          }, 3000);
  
        })
      }
    }, 2000);
  });

  btnAnswers.forEach((btnAnswers)=>{
    btnAnswers.addEventListener('click', (e)=>{
        let numberQuestion = btnAnswers.parentElement.parentElement.classList[1]

        let userAnswer = e.target.innerText
        let blockAnswer = e.target
        let blockQuestionParentElement = blockAnswer.parentElement

        blockQuestionParentElement.class.add('block-event')
        correctnessAnswer(numberQuestion,userAnswer,blockAnswer,blockQuestionParentElement)
       
    })

  })

  btnAnswers.forEach(()=>{
    item.addEventListener('mouseover', ()=>{
        if(item.children[0]){
            item.children(0).style.display = "none"
            item.classList.remove('color-active')

        }
    });
  });

  let helpSound = new Audio('./music/50-50 .mp3')
