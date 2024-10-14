export const shuffle = <T>(array: Array<T>) => {
  return array.sort(() => Math.random() - 0.5);
};
