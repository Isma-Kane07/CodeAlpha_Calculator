$(document).ready(function () {
    let display = $('#display');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let isResultDisplayed = false;

    $('.btn').on('click', function () {
        let btnValue = $(this).text();

        if (btnValue === 'C') {
            // Réinitialiser l'affichage et toutes les variables
            currentInput = '';
            firstOperand = '';
            operator = '';
            isResultDisplayed = false;
            display.val('');
        } else if ($(this).find('i').hasClass('fa-backspace')) {
            // Supprimer le dernier caractère
            if (!isResultDisplayed) {
                currentInput = currentInput.slice(0, -1);
                display.val(currentInput);
            }
        } else if (btnValue === '+' || btnValue === '-' || btnValue === '*' || btnValue === '/') {
            // Enregistrer l'opérateur et le premier opérande
            if (currentInput !== '') {
                firstOperand = currentInput;
                operator = btnValue;
                currentInput = '';
                display.val('');
            }
        } else if (btnValue === '=') {
            // Calculer le résultat
            if (firstOperand !== '' && currentInput !== '') {
                let secondOperand = currentInput;
                let result = calculate(firstOperand, secondOperand, operator);
                display.val(result);
                currentInput = result;
                isResultDisplayed = true;
            }
        } else {
            // Ajouter un nombre ou un point décimal à l'entrée
            if (isResultDisplayed) {
                currentInput = '';
                isResultDisplayed = false;
            }
            currentInput += btnValue;
            display.val(currentInput);
        }
    });

    function calculate(firstOperand, secondOperand, operator) {
        let result = '';
        let a = parseFloat(firstOperand);
        let b = parseFloat(secondOperand);

        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = a / b;
                break;
            default:
                break;
        }

        return result;
    }
});
