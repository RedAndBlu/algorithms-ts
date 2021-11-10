import { search } from '../../src/searching/boyer–moore–horspool';
import { randomWord } from '../../src/util/random-word';
import { shuffle } from '../../src/sorting/shuffle';

describe('boyer-moore-horspool', () => {
  test('should return -1 when there is no match', () => {
    expect(search('some random text', 'pattern')).toBe(-1);
  });

  test('should get the index of starting char when there is a match', () => {
    expect(search('there is a pattern here', 'pattern')).toBe(11);
  });

  test('should get the index of first match when there are multiple matches',
    () => {
      expect(search('so many matches that match in here', 'match')).toBe(8);
    }
  );

  test('should be able to handle large text input', () => {
    const words = Array.from({ length: 10_000 }, () => randomWord());
    words.push('tashm');
    shuffle(words);
    const text = words.join(' ');
    expect(search(text, 'tashm')).toBe(text.search(/tashm/));
  });
});
