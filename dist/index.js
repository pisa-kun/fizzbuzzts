"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fizzbuzz_1 = require("./fizzbuzz/fizzbuzz");
console.log("fizzbuzz問題");
for (var i = 0; i <= 100; i++) {
    var message = (0, fizzbuzz_1.fizzbuzz)(i);
    console.log(i, " is ", message);
}
//# sourceMappingURL=index.js.map