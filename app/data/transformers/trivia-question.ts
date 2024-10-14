import { TriviaQuestionDto } from "@/app/types/dtos";
import { TriviaQuestionModel } from "@/app/types/models";
import { decodeHtmlEntities } from "@/app/utils/decoder";

export const transformTriviaQuestionDto = ({
  correct_answer,
  incorrect_answers,
  question,
  ...rest
}: TriviaQuestionDto): TriviaQuestionModel => ({
  ...rest,
  question: decodeHtmlEntities(question) ?? question,
  correctAnswer: decodeHtmlEntities(correct_answer) ?? correct_answer,
  incorrectAnswers: incorrect_answers.map(
    (incorrectAnswer) => decodeHtmlEntities(incorrectAnswer) ?? incorrectAnswer
  ),
});
