"use client";

import { useEffect, useState } from "react";
import { TriviaQuestionModel } from "./types/models";
import { getTriviaQuestions } from "./data/api";
import { ResponseCode } from "./constants/response";
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
        // Task 3: Handle the error response
        // Tip: Use Record type to map response codes to messages
        // you can store it in app/constants/response.ts

        console.log(response);
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
      <p>Task 3 time: </p>
      <code className="text-yellow-300">app/page.tsx</code>
      <p>
        Handle the error response.
        <br />
        Tip: Use <b>Record</b> type to map response codes to messages. <br />
        You can store it in &nbsp;
        <code className="text-yellow-300">app/constants/response.ts</code>
      </p>
      {errorMessage ? (
        <p className="text-red-500 py-2">{errorMessage}</p>
      ) : null}
    </main>
  );
}
