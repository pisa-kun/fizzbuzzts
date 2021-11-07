"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fizzbuzz_1 = require("./fizzbuzz/fizzbuzz");
console.log("fizzbuzz問題");
for (var i = 0; i <= 100; i++) {
    var message = (0, fizzbuzz_1.fizzbuzz)(i);
    console.log(i, " is ", message);
}
for (var x = 1; x <= 100; x++) {
    var a = x % 15 == 0 ? "FizzBuzz"
        : x % 5 == 0 ? "Buzz"
            : x % 3 == 0 ? "Fizz"
                : "" + x;
    console.log(a);
}
//# sourceMappingURL=index.js.map