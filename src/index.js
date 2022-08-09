import kidJoke from "./kidJoke"
import "./styles/main.scss"
import $ from "jquery"

import panda from './assets/panda.jpg'
document.getElementById('img').src = panda
const scoreEl = document.getElementById('score')
const ansInput = document.getElementById('input')
const questionEl = document.getElementById('question')
const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const currectAnswer = num1 * num2
questionEl.innerText = `តើ ${num1} គុណ ${num2} ស្មើប៉ុន្មាន?`

let scores = JSON.parse(localStorage.getItem("scores"))
if(!scores){
    scores = 0
}
scoreEl.innerText = `ពិន្ទុ: ${scores}`

const btn = document.getElementById('form')
btn.addEventListener('submit', ()=>{
    const userAnswer = +ansInput.value // (+) for change type to number
    if(userAnswer === currectAnswer) {
        localStorage.setItem("scores", scores+1)
    }else{
        localStorage.setItem("scores", scores-1)
    }
})
if(scores<=0){
    $('#score').addClass('text-red-500')
}else{
    $('#score').addClass('text-green-500')
}
