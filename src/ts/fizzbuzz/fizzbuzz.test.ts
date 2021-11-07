import {fizzbuzz} from './fizzbuzz';

test('input 3 is fizz', () => {
    expect(fizzbuzz(3)).toBe("fizz");
});
  
  // describe-it の書き方でもよい
describe('fizz buzz test', () => {
    it('input 5 is buzz', () => {
      expect(fizzbuzz(5)).toBe("buzz");
    });
});

test('input Negative value test', () => {
    expect(fizzbuzz(-1)).toBe("負の値が入力されました。");
    expect(fizzbuzz(-100)).toBe("負の値が入力されました。");
});

test('input fizzbuzz test', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(45)).toBe("fizzbuzz");
    expect(fizzbuzz(1515)).toBe("fizzbuzz");
});

test('not fizzbuzz test', () => {
    expect(fizzbuzz(98)).toBe("fizzbuzzに該当しない");
    expect(fizzbuzz(101)).toBe("fizzbuzzに該当しない");
});

test('input 0 test', ()=>{
    expect(fizzbuzz(0)).toBe("0が入力されました。");
});