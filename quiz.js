const startBtn = document.getElementById('start-btn')
const choicesUl = document.getElementById('choices-list')
const questionContainer = document.getElementById('question-container')
const nextBtn = document.getElementById('next-btn')
const heading1 = document.querySelector('h2')
const resultcontainer = document.getElementById('result-container')
const restartbtn = document.getElementById('restart-btn')
const score = document.getElementById('score');

let arrayNum = 0;
let sum = 0;

let quizItems = [{
    question: "What is the output of `typeof null` in JavaScript?",
    options: {
      A: "null",
      B: "object",
      C: "undefined",
      D: "boolean"
    },
    answer: "B"
  },
  {
    question: "Which of the following is a correct way to declare a JavaScript variable?",
    options: {
      A: "var myVariable;",
      B: "let myVariable;",
      C: "const myVariable;",
      D: "All of the above"
    },
    answer: "D"
  },
  {
    question: "What will `2 + '2'` return in JavaScript?",
    options: {
      A: "4",
      B: "'22'",
      C: "22",
      D: "Error"
    },
    answer: "B"
  },
  {
    question: "Which method is used to remove the last element from an array in JavaScript?",
    options: {
      A: "shift()",
      B: "pop()",
      C: "remove()",
      D: "slice()"
    },
    answer: "B"
  },
  {
    question: "What is the purpose of the `isNaN()` function in JavaScript?",
    options: {
      A: "To check if a value is null",
      B: "To check if a value is not a number",
      C: "To check if a value is a string",
      D: "To check if a value is an integer"
    },
    answer: "B"
  },
  {
    question: "Which of the following is used to find an element by its ID in the DOM?",
    options: {
      A: "document.getElementByClassName()",
      B: "document.querySelector()",
      C: "document.getElementById()",
      D: "document.querySelectorAll()"
    },
    answer: "C"
  },
  {
    question: "What is the correct syntax to write a comment in JavaScript?",
    options: {
      A: "// This is a comment",
      B: "<!-- This is a comment -->",
      C: "/* This is a comment */",
      D: "Both A and C"
    },
    answer: "D"
  },
  {
    question: "What does the `===` operator do in JavaScript?",
    options: {
      A: "Checks if values are equal, allowing type coercion",
      B: "Checks if values and types are both strictly equal",
      C: "Compares two objects",
      D: "Assigns a value to a variable"
    },
    answer: "B"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: {
      A: "React",
      B: "Django",
      C: "Ruby on Rails",
      D: "Laravel"
    },
    answer: "A"
  },
  {
    question: "What is the output of the following code? `console.log(typeof []);`",
    options: {
      A: "'array'",
      B: "'object'",
      C: "'undefined'",
      D: "'null'"
    },
    answer: "B"
  }]

  startBtn.addEventListener('click',quizProcess)
  
  function quizProcess(){
    choicesUl.textContent = ``
    
    questionContainer.classList.remove('hidden')
    heading1.textContent = quizItems[arrayNum].question
    answered = false;
    Object.entries(quizItems[arrayNum].options).forEach(([key,value]) => {
      
      let quizeList = document.createElement('li')
      quizeList.innerHTML = `<div data-id=${key}>${key}:${value}<div/>`
      choicesUl.appendChild(quizeList)
      startBtn.classList.add('hidden')
      nextBtn.classList.remove('hidden')
    });
  }
  choicesUl.addEventListener("click",(e)=>{
      
    if(e.target.tagName == "DIV" && answered !== true){
      const divButton = e.target.getAttribute('data-id');
      console.log(`id${divButton}`)
      console.log(`click kelyavar value ${arrayNum}`)
      const Ans = quizItems[arrayNum].answer;
      console.log(`ans${Ans}`);
      
      if(divButton == Ans){
        sum = sum + 1;
    }
    answered= true;
  }
  })

  nextBtn.addEventListener('click',()=>{
    if(arrayNum<quizItems.length-1){
      arrayNum = arrayNum +1;
      quizProcess();
    }
    else{
      questionContainer.classList.add('hidden')
      resultcontainer.classList.remove('hidden')
      score.textContent = `the sum is ${sum}`;
    }
  })

  restartbtn.addEventListener('click',()=>{
    arrayNum = 0
    resultcontainer.classList.add('hidden');
    quizProcess()
  })



  