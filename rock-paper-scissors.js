const prompt = require('prompt-sync')({sigint: true});

let symbol1 = prompt("Player 1, enter rock, paper or scissors: ")

let symbol2 = prompt("Player 2, enter rock, paper or scissors: ")
 
let rock = "rock"
let paper = "paper"
let scissor = "scissor"

if(symbol1 == rock && symbol2 == scissor){
    console.log("Player 1 wins!")
}else if(symbol1 == paper && symbol2 == rock){
    console.log("Player 1 wins!")
}else if(symbol1 == scissor && symbol2 == paper){
    console.log("Player 1 wins!")
}else if(symbol1 == rock && symbol2 == paper){
    console.log("Player 2 wins!")
}else if(symbol1 == paper && symbol2 == scissor){
    console.log("Player 2 wins!")
}else if(symbol1 == scissor && symbol2 == rock){
    console.log("Player 2 wins!")
}else if(symbol1 == rock && symbol2 == rock){
    console.log("It's a draw!")
}else if(symbol1 == paper && symbol2 == paper){
    console.log("It's a draw!")
}else if(symbol1 == scissor && symbol2 == scissor){
    console.log("It's a draw!")
}else{
    console.log("Invalid Entry, try again!")
}