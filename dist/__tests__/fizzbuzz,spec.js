"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fizzbuzz_1 = require("../fizzbuzz/fizzbuzz");
test('input 3 is fizz', function () {
    expect((0, fizzbuzz_1.fizzbuzz)(3)).toBe("fizz");
});
// describe-it の書き方でもよい
describe('fizz buzz test', function () {
    it('input 5 is buzz', function () {
        expect((0, fizzbuzz_1.fizzbuzz)(5)).toBe("buzz");
    });
});
//# sourceMappingURL=fizzbuzz,spec.js.map