import {
  TriviaQuestionDifficulty,
  TriviaQuestionType,
} from "@/app/constants/trivia-question";

export type TriviaQuestionDto = {
  type: TriviaQuestionType;
  difficulty: TriviaQuestionDifficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
};
