const quizData= [
	{
		question: 'Год создания JavaScript',
		a:'1993',
		b:'2003',
		c:'1989',
		d:'1995',
		correct:'d'
	},{
		question:'Самый используемый язык программирования в 2021',
		a:'C/C++',
		b:'Python',
		c:'JavaScript',
		d:'Java',
		correct:'c'
	},{
		question:'У кого в среднем самый большой заработок в IT',
		a:'Специалист frontend',
		b:'Специалист Data Science/Machine Learning',
		c:'Разработчик desktop/enterprise приложений',
		d:'Специалист DevOps',
		correct:'d'
	},{
		question:'Самый любимые разработчиками язык',
		a:'C#',
		b:'Rust',
		c:'Java',
		d:'PHP',
		correct:'b'
	},{
		question:'Лучший язык для Web-Разработки',
		a:'PHP',
		b:'Ruby',
		c:'JavaScript',
		d:'Python',
		correct:'c'
	}
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0 

loadQuiz()

function loadQuiz() {
	deselectAnswers()
	const currentQuizData = quizData[currentQuiz]
	questionEl.innerText = currentQuizData.question
	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}

function getSelected() {
	let answer = undefined 

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id
		}
	})

	return answer
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
	
	const answer = getSelected()
	console.log(answer)
	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++
		}

			currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz()
		} else{
			quiz.innerHTML = `
                <h2>Ты ответил верно на ${score}/${quizData.length} вопросов</h2>
                
                <button onclick="location.reload()">Начать заново</button>
            `;
		}
	}
	
})