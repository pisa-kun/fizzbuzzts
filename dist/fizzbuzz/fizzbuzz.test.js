"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fizzbuzz_1 = require("./fizzbuzz");
test('input 3 is fizz', function () {
    expect((0, fizzbuzz_1.fizzbuzz)(3)).toBe("fizz");
});
// describe-it の書き方でもよい
describe('fizz buzz test', function () {
    it('input 5 is buzz', function () {
        expect((0, fizzbuzz_1.fizzbuzz)(5)).toBe("buzz");
    });
});
test('input Negative value test', function () {
    expect((0, fizzbuzz_1.fizzbuzz)(-1)).toBe("負の値が入力されました。");
    expect((0, fizzbuzz_1.fizzbuzz)(-100)).toBe("負の値が入力されました。");
});
test('input fizzbuzz test', function () {
    expect((0, fizzbuzz_1.fizzbuzz)(15)).toBe("fizzbuzz");
    expect((0, fizzbuzz_1.fizzbuzz)(45)).toBe("fizzbuzz");
    expect((0, fizzbuzz_1.fizzbuzz)(1515)).toBe("fizzbuzz");
});
test('not fizzbuzz test', function () {
    expect((0, fizzbuzz_1.fizzbuzz)(98)).toBe("fizzbuzzに該当しない");
    expect((0, fizzbuzz_1.fizzbuzz)(101)).toBe("fizzbuzzに該当しない");
});
test('input 0 test', function () {
    expect((0, fizzbuzz_1.fizzbuzz)(0)).toBe("0が入力されました。");
});
//# sourceMappingURL=fizzbuzz.test.js.map