"use client";

import { useEffect, useState } from "react";
import { TriviaQuestionModel } from "./types/models";
import { getTriviaQuestions } from "./data/api";
import { ERROR_MESSAGES, ResponseCode } from "./constants/response";
import { transformTriviaQuestionDto } from "./data/transformers";

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

  return (
    <main className="p-8">
      <h1 className="text-lg font-bold">Trivia Quiz</h1>
      <p className="text-slate-300">Welcome to the Trivia Quiz!</p>
      <hr className="my-2 h-0.5 border-t-0 bg-white/10" />
      <p>Final task: </p>
      <code className="text-yellow-300">app/utils/array.ts</code>
      <p>Use generics to make shuffle work with any array type.</p>
      <p>Afterwards, checkout to final:</p>
      <code className="text-cyan-300">git checkout final</code>
      {errorMessage ? (
        <p className="text-red-500 py-2">Error: {errorMessage}</p>
      ) : null}
    </main>
  );
}
