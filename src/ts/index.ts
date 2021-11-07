import { fizzbuzz } from "./fizzbuzz/fizzbuzz";

console.log("fizzbuzz問題")
for(let i = 0; i <= 100; i++){
    // import先の関数を使用
    let message = fizzbuzz(i)
    console.log(i, " is ", message)
}

// badcase
for(let x = 1; x <= 100; x++){
    let a = x % 15 == 0 ? "FizzBuzz" 
    : x % 5 == 0 ? "Buzz" 
    : x % 3 == 0 ? "Fizz" 
    : `${x}`;
    console.log(a)
}