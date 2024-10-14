import {
  TriviaQuestionDifficulty,
  TriviaQuestionType,
} from "@/app/constants/trivia-question";
import { TriviaQuestionDto } from "@/app/types/dtos";
import { TriviaQuestionModel } from "@/app/types/models";

import { transformTriviaQuestionDto } from "../trivia-question";

describe("transformTriviaQuestionDto", () => {
  it("transforms trivia question dto to trivia question model", () => {
    const dto: TriviaQuestionDto = {
      type: TriviaQuestionType.Multiple,
      difficulty: TriviaQuestionDifficulty.Medium,
      category: "General Knowledge",
      question: "What is the most common surname Wales?",
      correct_answer: "Jones",
      incorrect_answers: ["Williams", "Davies", "Evans"],
    };

    const expectedResult: TriviaQuestionModel = {
      type: TriviaQuestionType.Multiple,
      difficulty: TriviaQuestionDifficulty.Medium,
      category: "General Knowledge",
      question: "What is the most common surname Wales?",
      correctAnswer: "Jones",
      incorrectAnswers: ["Williams", "Davies", "Evans"],
    };

    expect(transformTriviaQuestionDto(dto)).toEqual(expectedResult);
  });
});
