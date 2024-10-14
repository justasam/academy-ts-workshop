export type TriviaQuestionDto = {
  type: string; // Task 1: Use an enum here. It can be either "multiple" or "boolean".
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
};
