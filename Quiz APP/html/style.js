const questions = [
	{
	  question: 'What is the capital of France?',
	  answers: ['Paris', 'London', 'Rome', 'Madrid'],
	  correctAnswer: 0
	},
	{
	  question: 'What is the largest planet in our solar system?',
	  answers: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
	  correctAnswer: 0
	},
	{
	  question: 'What is the smallest country in the world?',
	  answers: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'],
	  correctAnswer: 0
	}
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
	const questionEl = document.getElementById('question');
	questionEl.textContent = questions[currentQuestion].question;
  
	for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
	  const answerEl = document.getElementById(`answer-${i}`);
	  answerEl.textContent = questions[currentQuestion].answers[i];
	  answerEl.onclick = () => checkAnswer(i);
	}
  }
  
  function checkAnswer(answer) {
	if (answer === questions[currentQuestion].correctAnswer) {
	  score++;
	}
  
	currentQuestion++;
  
	if (currentQuestion < questions.length) {
	  showQuestion();
	} else {
	  const scoreEl = document.getElementById('score');
	  scoreEl.textContent = `Your score is ${score}/${questions.length}`;
	}
  }
  
  showQuestion();