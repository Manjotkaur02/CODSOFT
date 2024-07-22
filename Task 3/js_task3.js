let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.button');

    let calculation = '';
    let result = '';

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (buttonText === '=') {
          calculateResult();
        } else if (buttonText === 'C') {
          clearCalculation();
        } else {
          addButtonTextToCalculation(buttonText);
        }
      });
    });

    function addButtonTextToCalculation(buttonText) {
      calculation += buttonText;
      display.textContent = calculation;
    }

    function calculateResult() {
      try {
        result = eval(calculation);
        display.textContent = result;
        calculation = '';
      } catch (error) {
        display.textContent = 'Error';
      }
    }

    function clearCalculation() {
      calculation = '';
      display.textContent = '0';
    }