import React, { useState } from 'react';
import "./Quiz.css"
import { Link } from 'react-router-dom';
const Quiz = () => {

	const questions = [
		{
			questionText: 'Do you enjoy dance?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: false },
				{ answerText: 'a little', isCorrect: false },
				{ answerText: 'I dont mind it', isCorrect: true },
				{ answerText: 'A lot', isCorrect: false },
			],
		},
		{
			questionText: 'Do you enjoy Social Sciences, such as psychology?',
			answerOptions: [
				{ answerText: 'not at all', isCorrect: false },
				{ answerText: 'a little', isCorrect: false },
				{ answerText: 'i enjoy it', isCorrect: true },
				{ answerText: 'i dont care for it', isCorrect: false },
			],
		},
		{
			questionText: 'Do you enjoy Creative Industry subjects such as digital arts?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: false },
				{ answerText: 'a little', isCorrect: false },
				{ answerText: 'I enjoy it', isCorrect: true },
				{ answerText: 'Dont care for it', isCorrect: false },
			],
		},
		{
			questionText: 'Do you enjoy Business subjects such as business and accounting finance?',
			answerOptions: [
				{ answerText: 'Not at all', isCorrect: false },
				{ answerText: 'Yes i do', isCorrect: true },
				{ answerText: 'dont care for them', isCorrect: false },
				{ answerText: 'dont mind them', isCorrect: false },
			],
		},
		{
			questionText: 'Do you enjoying teaching?',
			answerOptions: [
				{ answerText: 'yes i do', isCorrect: true },
				{ answerText: 'a little', isCorrect: false },
				{ answerText: 'dont care for it ', isCorrect: false },
				{ answerText: 'dont mind it', isCorrect: false },
			],
		},
		{
			questionText: 'Do you enjoy technology and science based subjects such as computing and biology?',
			answerOptions: [
				{ answerText: 'no i do not', isCorrect: false },
				{ answerText: 'i dont mind them', isCorrect: false },
				{ answerText: 'i dont care', isCorrect: false },
				{ answerText: 'yes i do', isCorrect: true },
			],
		},
	]



	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	
	};

	return (

		<div className='quiz-container'>
			<div className="quiz">
				{showScore ? (
					<div className='score-section'>
					
					{
						score === 1 ? `you have scored ${score} of ${questions.length} so you should study a Partner course such as Dance.` : score ===  2 ? `you have scored ${score} of ${questions.length} so you should study an Social science Degree.`: score === 3 ? `you have scored ${score} of ${questions.length} so you should study an Creative Industry Degree` : score === 4 ? `you have scored ${score} of ${questions.length} so you should study an Business Degree.`: score === 5 ? `you have scored ${score} of ${questions.length} so you should study an Education Degree`: score === 6 ? `you have scored ${score} of ${questions.length} so you should study an Technology  Degree`: score === 0 ? "please do the quiz so you can get a result because you haven't scored a mark":""
					}
					<br />
						{}

						<Link className="" to="/">
							<button className="butn">
								Home&nbsp;
              <i className="fas fa-home" />
							</button>


						</Link>
						<br />


						<button className="butn" onClick={() => window.location.reload()}>Restart Quiz</button>
					</div>
				) : (
						<>
							<div className="main">
								<div className='question-section'>
									<div className='question-count'>
										<span>Question {currentQuestion + 1}</span> / {questions.length}
									</div>
									<div className='question-text'>{questions[currentQuestion].questionText}</div>
								</div>
								<div className='answer-section'>
									{questions[currentQuestion].answerOptions.map((answerOption) => (
										<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
									))}
								</div>
							</div>
						</>
					)}
			</div>

		</div>

	);
}



export default Quiz;
