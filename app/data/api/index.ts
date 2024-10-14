import { TriviaResponse } from "@/app/types/api";
import { apiGet } from "@/app/utils/api";

export const getTriviaQuestions = () =>
  apiGet<TriviaResponse>("https://opentdb.com/api.php?amount=8");
