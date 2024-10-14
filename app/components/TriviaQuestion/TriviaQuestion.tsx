import { TRIVIA_DIFFICULTY_CLASSES } from "@/app/constants/trivia-question";
import { TriviaQuestionModel } from "@/app/types/models";
import { shuffle } from "@/app/utils/array";
import { MouseEvent, useMemo, useState } from "react";

type Props = { question: TriviaQuestionModel };

const correctClasses = "bg-green-600 hover:bg-green-500";
const incorrectClasses = "bg-red-600 hover:bg-red-500";
const defaultClasses = "bg-gray-600 hover:bg-gray-500";

const TriviaQuestion = ({
  question: { difficulty, category, question, correctAnswer, incorrectAnswers },
}: Props) => {
  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);

  const shuffledAnswers = useMemo(() => {
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    return shuffle(allAnswers);
  }, [correctAnswer, incorrectAnswers]);

  const renderAnswer = (answer: string) => {
    const isChosen = chosenAnswer === answer;
    const isCorrect = answer === correctAnswer;

    let classes = defaultClasses;

    if (isChosen) {
      classes = isCorrect ? correctClasses : incorrectClasses;
    }

    const handleAnswerClick = (event: MouseEvent) => {
      event.preventDefault();

      setChosenAnswer(answer);
    };

    return (
      <li key={answer}>
        <a
          href="#"
          className={[
            "flex items-center p-3 text-base font-bold rounded-lg group hover:shadow text-white",
            classes,
          ].join(" ")}
          onClick={handleAnswerClick}
        >
          <span className="flex-1 ms-3 whitespace-nowrap">{answer}</span>
        </a>
      </li>
    );
  };

  return (
    <div className="w-full max-w-sm p-4 border rounded-lg shadow sm:p-6 bg-gray-800 border-gray-700">
      <h5 className="mb-3 text-base font-semibold md:text-xl text-white">
        {question}
      </h5>
      <p className="text-sm font-normal text-gray-400">
        <span className="font-bold">Category:</span> {category}&nbsp;
        <span className="font-bold">Difficulty:</span>&nbsp;
        <span className={TRIVIA_DIFFICULTY_CLASSES[difficulty]}>
          {difficulty}
        </span>
      </p>
      <ul className="my-4 space-y-3">{shuffledAnswers.map(renderAnswer)}</ul>
    </div>
  );
};

export default TriviaQuestion;
