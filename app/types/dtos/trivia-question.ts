export type TriviaQuestionDto = {
  type: string; // Task 1: Use an enum here. It can be either "multiple" or "boolean".
  difficulty: string; // And here. It can be either "easy", "medium", or "hard".
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
};
