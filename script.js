const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");

function updateDisplay(value) {
    display.value = value;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        display.value += value;
    });
});

operators.forEach(opButton => {
    opButton.addEventListener("click", () => {
        const opValue = opButton.textContent;
        if (opValue === "=") {
            calculate(display.value);
        } else {
            display.value += opValue;
        }
    });
});

clearButton.addEventListener("click", () => clear());

function calculate(expression) {
    const operators = ["+", "-", "*", "/"];
    let operator = null;
    let operands = [];

    for (let i of operators) {
        if (expression.includes(i)) {
            operator = i;
            operands = expression.split(i);
            break;
        }
    }

    if (operands.length !== 2) return;

    const num1 = parseFloat(operands[0]);
    const num2 = parseFloat(operands[1]);

    if (isNaN(num1) || isNaN(num2)) return;

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }

    updateDisplay(result);
}

function clear() {
    display.value = "";
}