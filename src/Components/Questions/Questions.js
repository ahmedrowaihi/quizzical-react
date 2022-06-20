import "./Questions.css";

const Questions = ({ questions, answersBtnHandler, questionsElementsRef }) => {
  questionsElementsRef.current = [];

  const pushToQuestionsRef = (el) => {
    if (el && !questionsElementsRef.current.includes(el)) {
      questionsElementsRef.current.push(el);
    }
  };

  return questions.map((data, index) => {
    const questionData = data[`questionNumber-${index + 1}`];
    console.log(questionsElementsRef);
    return (
      <div
        data-question-number={index + 1}
        ref={pushToQuestionsRef}
        key={questionData.questionText}
        className="quiz-container"
      >
        <h1 className="quiz-question">{questionData.questionText}</h1>
        <ul className="quiz-answers">
          {questionData.answers.map((answer) => (
            <li className="quiz-answer" key={answer}>
              <button
                onClick={answersBtnHandler}
                data-answer-content={answer}
                className={`quiz-answer-btn btn-hv btn-outline`}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  });
};

export default Questions;
