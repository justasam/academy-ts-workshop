// Task 4: Use generics to make this shuffle function work with any array type.

export const shuffle = (array: Array<any>) => {
  return array.sort(() => Math.random() - 0.5);
};
