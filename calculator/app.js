const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
let calculation = [];
let accumulativecalculative;

function calculate(button) {
    if(value === "CLEAR"){
        calculation = [];
        screenDisplay.textContent = '.'
              
    }
else if(value === "="){
    screenDisplay.textContent = eval(accumulativecalculative)
}
else{
    calculation.push(value);
    accumulativecalculative = calculation.join('');
    screenDisplay.textContent = accumulativecalculative
      
}
}
buttons.forEach(button => button.addEventListener('click',() => calculate(button)))