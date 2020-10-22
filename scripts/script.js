//import * as jQuery from "jquery";
//import handlebars from "handlebars";


const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const body = document.getElementById('bodyElement')
const score = document.getElementById('score')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerBtnsElement = document.getElementById('answer-buttons')
const mySound = document.getElementById("myAudio")

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    clearStatusClass(body)
    setNextQuestion()
})

async function  getData() {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple'
    const request = await (await fetch(url)).json()
   return request
}

async function startGame() {
    console.log('Started');
    startBtn.classList.add('hide')
    const actualQuestions = (await getData()).results
    shuffledQuestions = actualQuestions.sort(() => Math.random() - .5)
    console.log(shuffledQuestions)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    clearStatusClass(body)
    setNextQuestion()
}



async function setNextQuestion() {
    const data =await getData()
    console.log("GOTTEN DATA", data)
    resetState()
    //showQuestion(shuffledQuestions[currentQuestionIndex])
    showQuestion(data.results[1])

}

function showQuestion(question) {
    console.log('SHOWING QUESTION', question)
    questionElement.innerText = question.question
    
    let score = 0;
    const audio = document.getElementById("myAudio");

    let allAnswers = [question.correct_answer, ...question.incorrect_answers]
    allAnswers.sort(() => Math.random() - .5)
    allAnswers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer
        button.classList.add('btn')
        if(answer === question.correct_answer ) {
            console.log('WOW YOU KNEW SOMETHING')
            button.dataset.correct = answer.correct;
            score++;
            playAudio()
        }else {
            console.log("NOOB")
        }
        button.addEventListener('click',selectAnswer)
        answerBtnsElement.appendChild(button)
    })
}
function playAudio() { 
    mySound.play(); 
  } 
function resetState() {
    nextBtn.classList.add('hide')
    while (answerBtnsElement.firstChild) {
        answerBtnsElement.removeChild(answerBtnsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(body, correct)
    Array.from(answerBtnsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    console.log("shuffledQuestions",shuffledQuestions)
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}