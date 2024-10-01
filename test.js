<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        body { display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f0f0; margin: 0; }
        .calculator { border: 1px solid #ccc; border-radius: 10px; padding: 20px; background-color: #fff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
        .display { width: 100%; height: 50px; background-color: #222; color: #fff; text-align: right; padding: 10px; font-size: 24px; border-radius: 5px; margin-bottom: 10px; }
        .buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .button { padding: 20px; font-size: 18px; border: none; border-radius: 5px; cursor: pointer; background-color: #f0f0f0; }
        .button.operator { background-color: #ff9500; color: #fff; }
        .button.equal { background-color: #34c759; color: #fff; grid-column: span 2; }
        .button.clear { background-color: #ff3b30; color: #fff; grid-column: span 2; }
    </style>
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button class="button clear" id="clear">C</button>
            <button class="button" id="divide">/</button>
            <button class="button" id="multiply">*</button>
            <button class="button" id="seven">7</button>
            <button class="button" id="eight">8</button>
            <button class="button" id="nine">9</button>
            <button class="button" id="subtract">-</button>
            <button class="button" id="four">4</button>
            <button class="button" id="five">5</button>
            <button class="button" id="six">6</button>
            <button class="button" id="add">+</button>
            <button class="button" id="one">1</button>
            <button class="button" id="two">2</button>
            <button class="button" id="three">3</button>
            <button class="button equal" id="equal">=</button>
            <button class="button" id="zero">0</button>
            <button class="button" id="decimal">.</button>
        </div>
    </div>
    <script>
        const display = document.getElementById('display');
        const buttons = document.querySelectorAll('.button');
        let currentInput = '0', operator = null, previousInput = null, operatorPressed = false, resultCalculated = false;

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.innerText;

                if (button.id === 'clear') {
                    currentInput = '0'; operator = null; previousInput = null; operatorPressed = false; resultCalculated = false;
                } else if (button.id === 'equal') {
                    if (operator && previousInput !== null && !operatorPressed) {
                        currentInput = evaluate(previousInput, currentInput, operator);
                        operator = null; previousInput = null; resultCalculated = true;
                    }
                } else if (['+', '-', '*', '/'].includes(value)) {
                    if (!operatorPressed && previousInput !== null && !resultCalculated) {
                        currentInput = evaluate(previousInput, currentInput, operator);
                    }
                    operator = value; previousInput = currentInput; operatorPressed = true; resultCalculated = false;
                } else if (value === '.') {
                    if (!currentInput.includes('.')) currentInput += '.';
                } else {
                    if (operatorPressed || resultCalculated) {
                        currentInput = value; operatorPressed = false; resultCalculated = false;
                    } else {
                        currentInput = currentInput === '0' ? value : currentInput + value;
                    }
                }

                display.innerText = currentInput;
            });
        });

        function evaluate(a, b, operator) {
            const numA = parseFloat(a), numB = parseFloat(b);
            switch (operator) {
                case '+': return (numA + numB).toString();
                case '-': return (numA - numB).toString();
                case '*': return (numA * numB).toString();
                case '/': return numB === 0 ? 'Error' : (numA / numB).toString();
                default: return b;
            }
        }
    </script>
</body>
</html>
