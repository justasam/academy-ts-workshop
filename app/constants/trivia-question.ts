export enum TriviaQuestionType {
  Multiple = "multiple",
  Boolean = "boolean",
}

export enum TriviaQuestionDifficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

export const TRIVIA_DIFFICULTY_CLASSES: Record<
  TriviaQuestionDifficulty,
  string
> = {
  [TriviaQuestionDifficulty.Easy]: "text-green-500",
  [TriviaQuestionDifficulty.Medium]: "text-yellow-500",
  [TriviaQuestionDifficulty.Hard]: "text-red-500",
};
