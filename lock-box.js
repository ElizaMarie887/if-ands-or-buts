const prompt = require('prompt-sync')({sigint: true});

let pinCode = 8484
let num1 = Number(prompt("Enter your 4 digit pin code now: "))

if(num1 === pinCode){
    console.log("Success!")
}else {
    console.log("Failure!")
}