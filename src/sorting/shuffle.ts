import { swap } from '../util/swap';

// Fisher–Yates shuffle https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
export function shuffle<T> (arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    const rdmIdx = Math.floor(Math.random() * (i + 1));
    swap(arr, rdmIdx, i);
  }

  return arr;
}
