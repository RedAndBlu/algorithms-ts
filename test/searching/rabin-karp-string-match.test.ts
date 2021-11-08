import {
  RabinKarpStringMatch
} from '../../src/searching/rabin-karp-string-match';
import { randomWord } from '../../src/util/random-word';

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
      const matcher = new RabinKarpStringMatch('tx');
      const text = Array.from({ length: 10_000 }, () => randomWord()).join(' ');
      expect(matcher.search(text)).toBe(text.search(/tx/));
    });
  });
});
