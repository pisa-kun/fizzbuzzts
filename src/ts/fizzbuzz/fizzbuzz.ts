const fizz = 3
const buzz = 5
const fb = fizz * buzz

export function fizzbuzz(x: number): string {
    let message
    // guard statement
    if(x < 0){
        return "負の値が入力されました。"
    }

    if(x === 0){
        return "0が入力されました。"
    }

    if(x % fb === 0){
        message = "fizzbuzz"
    }else if(x % fizz === 0){
        message = "fizz"
    }else if(x % buzz === 0){
        message = "buzz"
    }
    else{
        message = "fizzbuzzに該当しない"
    }
    return message
  }