function calculator(operation, num1, num2) {
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return 'Error: Division by zero is not allowed';
            }
            break;
        default:
            return 'Error: Invalid operation';
    }

    return `The result is ${result}`;
}
const calculator = require('./calculator');

describe('calculator', () => {
    it('adds two numbers correctly', () => {
        expect(calculator('add', 2, 3)).toBe('The result is 5');
    });

    it('subtracts two numbers correctly', () => {
        expect(calculator('subtract', 5, 3)).toBe('The result is 2');
    });

    it('multiplies two numbers correctly', () => {
        expect(calculator('multiply', 2, 3)).toBe('The result is 6');
    });

    it('divides two numbers correctly', () => {
        expect(calculator('divide', 6, 3)).toBe('The result is 2');
    });

    it('returns error when dividing by zero', () => {
        expect(calculator('divide', 6, 0)).toBe('Error: Division by zero is not allowed');
    });

    it('returns error for invalid operation', () => {
        expect(calculator('invalid', 2, 3)).toBe('Error: Invalid operation');
    });
});