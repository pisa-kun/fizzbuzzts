"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzbuzz = void 0;
var fizz = 3;
var buzz = 5;
var fb = fizz * buzz;
function fizzbuzz(x) {
    var message;
    // guard statement
    if (x < 0) {
        return "負の値が入力されました。";
    }
    if (x === 0) {
        return "0が入力されました。";
    }
    if (x % fb === 0) {
        message = "fizzbuzz";
    }
    else if (x % fizz === 0) {
        message = "fizz";
    }
    else if (x % buzz === 0) {
        message = "buzz";
    }
    else {
        message = "fizzbuzzに該当しない";
    }
    return message;
}
exports.fizzbuzz = fizzbuzz;
//# sourceMappingURL=fizzbuzz.js.map