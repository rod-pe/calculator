const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number"); // Corrigido para querySelectorAll
const operands = document.querySelectorAll(".operation"); // Corrigido para querySelectorAll
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
let operation;

function appendNumber(number) {
    if (number === "." && currDisplay.innerText.includes(".")) return;
    currDisplay.innerText += number;
}

function chooseOperation(operand) {
    if (currDisplay.innerText === "") return;
    if (prevDisplay.innerText !== "") {
        compute();
    }
    operation = operand;
    prevDisplay.innerText = currDisplay.innerText + " " + operand;
    currDisplay.innerText = "";
}

function clearDisplay() {
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
    operation = undefined;
}

function compute() {
    let result;
    const previousValue = parseFloat(prevDisplay.innerText);
    const currentValue = parseFloat(currDisplay.innerText);

    if (isNaN(previousValue) || isNaN(currentValue)) return;

    switch (operation) {
        case "+":
            result = previousValue + currentValue;
            break;

        case "-":
            result = previousValue - currentValue;
            break;

        case "*":
            result = previousValue * currentValue;
            break;

        case "/":
            result = previousValue / currentValue;
            break;

        default:
            return;
    }

    currDisplay.innerText = result;
    operation = undefined;
    prevDisplay.innerText = "";
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        appendNumber(number.innerText);
    });
});

operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        chooseOperation(operand.innerText);
    });
});

clearBtn.addEventListener("click", () => {
    clearDisplay();
});

equalBtn.addEventListener("click", () => {
    compute();
});

delBtn.addEventListener("click", () => {
    currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});
