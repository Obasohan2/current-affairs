const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "What is 176 - 18 ?",
        answers: [
            { text: "158", correct: true },
            { text: "138", correct: false },
            { text: "140", correct: false },
            { text: "161", correct: false },
        ]
    },

    {
        question: "What is the capital of Spain?",
        answers: [
            { text: "Barcelona", correct: false },
            { text: "Madrid", correct: true },
            { text: "Alicante", correct: false },
            { text: "Bilbao", correct: false },
        ]
    },
    {
        question: "Who is a football player ?",
        answers: [
            { text: "Cristiano Ronaldo", correct: true },
            { text: "Michael Jackson", correct: false },
            { text: "Hussain Bolt", correct: false },
            { text: "Joe Biden", correct: false },
        ]
    },
    {
        question: "Who is president-elect of USA in the Year 2024 ?",
        answers: [
            { text: "Donald Trump", correct: true },
            { text: "Morgan Freeman", correct: false },
            { text: "Elon Musk", correct: false },
            { text: "Mohammed Abdul", correct: false },
        ]
    },
    {
        question: "Who is a known singer ?",
        answers: [
            { text: "Bayonce", correct: true },
            { text: "Mohammed Salah", correct: false },
            { text: "Alex Ferguson", correct: false },
            { text: "Alan Shearer", correct: false },
        ]
    },
    {
        question: "What is the name of UK currency ?",
        answers: [
            { text: "Pounds Sterling", correct: true },
            { text: "Dollar", correct: false },
            { text: "Naira", correct: false },
            { text: "Euro", correct: false },
        ]
    },
    {
        question: "Where is Spain located ?",
        answers: [
            { text: "Europe", correct: true },
            { text: "Africa", correct: false },
            { text: "Australia", correct: false },
            { text: "Asia", correct: false },
        ]
    },
    {
        question: "Who is a boxer ?",
        answers: [
            { text: "Anthony Joshua", correct: true },
            { text: "Harry Kane", correct: false },
            { text: "Justin Bieber", correct: false },
            { text: "Rishi Sunak", correct: false },
        ]
    },
    {
        question: "Where can i find ?",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false },
            { text: "Segovia", correct: false },
            { text: "Segovia", correct: false },
        ]
    },
    {
        question: "What is 2 + 2 ?",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false },
            { text: "Segovia", correct: false },
            { text: "Segovia", correct: false },
        ]
    },
    {
        question: "What is 2 + 2 ?",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false },
            { text: "Segovia", correct: false },
            { text: "Segovia", correct: false },
        ]
    },
]