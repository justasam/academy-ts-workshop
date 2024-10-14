import { TriviaQuestionDto } from "@/app/types/dtos";
import { TriviaQuestionModel } from "@/app/types/models";

export const transformTriviaQuestionDto = ({
  correct_answer,
  incorrect_answers,
  ...rest
}: TriviaQuestionDto): TriviaQuestionModel => ({
  ...rest,
  correctAnswer: correct_answer,
  incorrectAnswers: incorrect_answers,
});
