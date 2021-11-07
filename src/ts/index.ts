import { fizzbuzz } from "./fizzbuzz/fizzbuzz";

console.log("fizzbuzz問題")
for(let i = 0; i <= 100; i++){
    let message = fizzbuzz(i)
    console.log(i, " is ", message)
}