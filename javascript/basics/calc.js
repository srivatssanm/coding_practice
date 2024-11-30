 
const prompt=require("prompt-sync")({sigint:true}); 

let operand1 = parseInt(prompt("Enter the first number: "));
// console.log(typeof operand1);

function arith(operand1){
    // console.log(operator);
const operator = prompt("Enter the operator (+, -, *, /) : ");

const operand2 = parseInt(prompt("Enter the second number: "));

    switch (operator) {
        case '+':
            res = operand1 + operand2;
            console.log(` Addition : ${operand1} + ${operand2} = ${res}`);
            break;
        case '-':
            res = operand1 - operand2;
            console.log(`Subtraction : ${operand1} - ${operand2} = ${res}`);
            break;
        case '*':
            res = operand1 * operand2;
            console.log(`Multiplication : ${operand1} * ${operand2} = ${res}`);
            break;
        case '/':
            res = operand1 / operand2;
            console.log(`Division : ${operand1} / ${operand2} = ${res}`);
            break;
        default:
            console.log("Invalid operator!!");
            break;
    }
    return res;
}
var result = arith(operand1);
// console.log(result); 
let isEnd=true;
while(isEnd){
    var endPrompt = prompt("Would u like to continue with calculation press (y / n) or z - to Exit : ").toLowerCase();
    if(endPrompt == 'y'){
        operand1 = result;
        console.log(`Result : ${operand1}`);
        result = arith(operand1);
        console.log(result);
    }
    
    else if(endPrompt == 'n'){
        let operand1 = parseInt(prompt("Enter the first number: "));
        arith(operand1);
    }
    else {
        // isEnd=false;
        console.log("Thank u ......");
        isEnd = false;
      }
}

