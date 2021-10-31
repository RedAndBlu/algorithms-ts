import { binarySearch } from '../../src/searching/binary-search';

const cmp: (a: number, b: number) => number = (a, b) => a - b;

describe('binarySearch(arr, val)', () => {
  test('should get the -1 when not found', () => {
    const arr = Array.from({ length: 100 }, (v, i) => i);
    expect(binarySearch(arr, cmp, 100)).toBe(-1);
  });

  test('should get the first index of an array', () => {
    const arr = Array.from({ length: 100 }, (v, i) => i);
    expect(binarySearch(arr, cmp, 0)).toBe(0);
  });

  test('should get the last index of an array', () => {
    const arr = Array.from({ length: 100 }, (v, i) => i);
    expect(binarySearch(arr, cmp, 99)).toBe(99);
  });

  test('should get the 777th index of a large array', () => {
    const arr = Array.from({ length: 100_000 }, (v, i) => i);
    expect(binarySearch(arr, cmp, 777)).toBe(777);
  });
});
