import {
  TriviaQuestionDifficulty,
  TriviaQuestionType,
} from "@/app/constants/trivia-question";

export type TriviaQuestionModel = {
  type: TriviaQuestionType;
  difficulty: TriviaQuestionDifficulty;
  category: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: Array<string>;
};
