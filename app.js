/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let secondInput = '';  
let firstInput = ''; 
let operator = '';      
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const buttonText = event.target.textContent;
  
      // If it's a number, append it to the current input
      if (button.classList.contains('number')) {
        secondInput += buttonText;
        updateDisplay();
      }
  
      // If it's an operator (+, -, *, /)
      if (button.classList.contains('operator')) {
        if (buttonText === 'C') {
          // Clear everything
          secondInput = '';
          firstInput = '';
          operator = '';
          updateDisplay();
        } else {
          if (firstInput !== '' && secondInput !== '') {
            calculate(); // Perform calculation before changing operator
          }
          operator = buttonText;
          firstInput = secondInput;
          secondInput = '';
        }
      }
  
      // If the equals button is pressed, perform the calculation
      if (button.classList.contains('equals')) {
        if (firstInput !== '' && secondInput !== '') {
          calculate();
        }
      }
    });
  });
  
  const calculate = () => {
    const prev = parseFloat(firstInput);
    const current = parseFloat(secondInput);
    let result;
  
    if (operator === '+') {
      result = prev + current;
    } else if (operator === '-') {
      result = prev - current;
    } else if (operator === '*') {
      result = prev * current;
    } else if (operator === '/') {
      result = current !== 0 ? prev / current : 'Error'; }
  
    
    secondInput = result.toString();
    operator = '';
    firstInput = '';
    updateDisplay();
  };
/*----------------------------- Functions -----------------------------*/
const updateDisplay = () => {
    display.textContent = secondInput || '0'; 
  }