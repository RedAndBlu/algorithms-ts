import { swap } from '../../src/util/swap';

describe('swap(arr, i, j)', () => {
  let arr = ['a', 'b'];

  beforeEach(() => (arr = ['a', 'b']));

  test('should not change the arr when i === j', () => {
    expect(swap(arr, 1, 1)).toEqual(arr);
  });

  test('should swap values at i and j when i !== j', () => {
    expect(swap(arr, 1, 0)).toEqual(['b', 'a']);
  });

  test('should swap values with undefined when i or j is overflowing', () => {
    expect(swap(arr, 2, 0)).toEqual([undefined, 'b', 'a']);
  });

  test('should throw error when i or j is negative', () => {
    expect(() => swap(arr, -1, 0))
      .toThrow('parameters i and j can\'t be negative');
    expect(() => swap(arr, 0, -1))
      .toThrow('parameters i and j can\'t be negative');
  });
});
