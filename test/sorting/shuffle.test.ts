import { shuffle } from '../../src/sorting/shuffle';

describe('shuffle(array)', () => {
  test('should not return the same order', () => {
    const inOrder = Array.from({ length: 100 }, (v, i) => i);
    const shuffled = shuffle([...inOrder]);
    expect(shuffled).not.toEqual(inOrder);
    expect(shuffled.length).toBe(inOrder.length);
  });
});
