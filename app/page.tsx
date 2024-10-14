"use client";

import { useEffect, useState } from "react";
import { TriviaQuestionModel } from "./types/models";
import { getTriviaQuestions } from "./data/api";
import { ERROR_MESSAGES, ResponseCode } from "./constants/response";
import { transformTriviaQuestionDto } from "./data/transformers";
import { TriviaQuestion } from "./components";

export default function Home() {
  const [triviaQuestions, setTriviaQuestions] = useState<
    Array<TriviaQuestionModel>
  >([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchTriviaQuestions = async () => {
      const response = await getTriviaQuestions();

      if (response.response_code !== ResponseCode.Success) {
        setErrorMessage(ERROR_MESSAGES[response.response_code]);

        return;
      }

      setTriviaQuestions(response.results.map(transformTriviaQuestionDto));
    };

    fetchTriviaQuestions();
  }, []);

  const renderTriviaQuestions = () => {
    if (!triviaQuestions.length) return null;

    return triviaQuestions.map((question, index) => (
      <TriviaQuestion key={index} question={question} />
    ));
  };

  return (
    <main className="p-8">
      <h1 className="text-lg font-bold">Trivia Quiz</h1>
      <p className="text-slate-300">Welcome to the Trivia Quiz!</p>
      <hr className="my-2 h-0.5 border-t-0 bg-white/10" />
      <section className="grid grid-cols-4 gap-4">
        {renderTriviaQuestions()}
      </section>
      {errorMessage ? (
        <p className="text-red-500 py-2">Error: {errorMessage}</p>
      ) : null}
      <p className="text-slate-300 mt-4 text-center">
        Refresh to get new questions!
      </p>
    </main>
  );
}
