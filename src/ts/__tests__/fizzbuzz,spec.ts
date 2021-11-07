import {fizzbuzz} from '../fizzbuzz/fizzbuzz';

test('input 3 is fizz', () => {
    expect(fizzbuzz(3)).toBe("fizz");
});
  
  // describe-it の書き方でもよい
describe('fizz buzz test', () => {
    it('input 5 is buzz', () => {
      expect(fizzbuzz(5)).toBe("buzz");
    });
});