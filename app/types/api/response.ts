import { ResponseCode } from "@/app/constants/response";
import { TriviaQuestionDto } from "@/app/types/dtos";

export type TriviaResponse = {
  response_code: ResponseCode;
  results: Array<TriviaQuestionDto>;
};
