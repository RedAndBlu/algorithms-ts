import {
  RabinKarpStringMatch
} from '../../src/searching/rabin-karp-string-match';
import { randomWord } from '../../src/util/random-word';
import { shuffle } from '../../src/sorting/shuffle';

describe('RabinKarpStringMatch', () => {
  describe('.search(text)', () => {
    test('should return -1 when there is no match', () => {
      const matcher = new RabinKarpStringMatch('pattern');
      expect(matcher.search('some random text')).toBe(-1);
    });

    test('should get the index of starting char when there is a match', () => {
      const matcher = new RabinKarpStringMatch('pattern');
      expect(matcher.search('there is a pattern here')).toBe(11);
    });

    test('should get the index of first match when there are multiple matches',
      () => {
        const matcher = new RabinKarpStringMatch('match');
        expect(matcher.search('so many matches that match in here')).toBe(8);
      }
    );

    test('should be able to handle large text input', () => {
      const pattern = 'takeshi';
      const words = Array.from({ length: 10_000 }, () => randomWord());
      words.push(pattern);
      shuffle(words);
      const text = words.join(' ');
      const matcher = new RabinKarpStringMatch(pattern);
      expect(matcher.search(text)).toBe(text.search(new RegExp(pattern)));
    });
  });
});
