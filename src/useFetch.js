import { useEffect, useState } from "react";

const dataFetch = async function (url) {
  const data = await fetch(url + "asdsd");

  const dataFetchResults = await response.json();

  if (!response.ok ?? !dataFetchResults.results) {
    throw new Error("Can't fetch resources.");
  }

  return dataFetchResults;
};

const useFetch = (difficultyLevel, categoryNumber) => {
  const url = `https://opentdb.com/api.php?amount=5&category=${categoryNumber}&type=multiple&difficulty=${difficultyLevel}`;

  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    dataFetch(url)
      .then((data) => {
        const newQuestionsObj = createNewQuestionObj(data.results);

        setQuestions(newQuestionsObj);

        setIsPending(false);
      })
      .catch((error) => {
        console.log(error);
        setIsPending(false);
        setErrorMsg(error.message);
      });
  }, [categoryNumber, difficultyLevel]);

  return { isPending, errorMsg, questions };
};

const createNewQuestionObj = function (questionObj) {
  const newQuestionObj = questionObj.map((questionData, i) => {
    const answersArr = questionData.incorrect_answers.concat(
      questionData.correct_answer
    );
    return {
      [`questionNumber-${i + 1}`]: {
        questionText: questionData.question,
        correctAnswer: questionData.correct_answer,
        answers: answersArr,
      },
    };
  });

  return newQuestionObj;
};

export default useFetch;
