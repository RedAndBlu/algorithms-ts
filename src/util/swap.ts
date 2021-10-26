// mutate the given arr swapping the position i and j and returning it
// @param i and j - can't be negative.
export function swap<T> (arr: T[], i: number, j: number): T[] {
  if (i < 0 || j < 0) {
    throw new Error("parameters i and j can't be negative");
  }

  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
