const readline = require('readline');
const { expect } = require('chai');
const sinon = require('sinon');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    try {
        const num1 = parseFloat(await askQuestion('Enter the first number: '));
        const operation = await askQuestion('Enter the operation (+, -, *, /): ');
        const num2 = parseFloat(await askQuestion('Enter the second number: '));

        if (isNaN(num1) || isNaN(num2)) {
            console.log('Invalid input. Please enter valid numbers.');
            rl.close();
            return;
        }

        let result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    console.log('Error: Division by zero is not allowed.');
                    rl.close();
                    return;
                }
                result = num1 / num2;
                break;
            default:
                console.log('Invalid operation. Please enter one of +, -, *, /.');
                rl.close();
                return;
        }

        console.log(`Result: ${result}`);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        rl.close();
    }
}

main();


describe('Calculator Tests', () => {
    let rlStub;

    beforeEach(() => {
        rlStub = sinon.stub(readline, 'createInterface').returns({
            question: sinon.stub(),
            close: sinon.stub()
        });
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should add two numbers correctly', async () => {
        rlStub().question.onCall(0).yields('5');
        rlStub().question.onCall(1).yields('+');
        rlStub().question.onCall(2).yields('3');

        const consoleLogStub = sinon.stub(console, 'log');

        await main();

        expect(consoleLogStub.calledWith('Result: 8')).to.be.true;
        consoleLogStub.restore();
    });

    it('should subtract two numbers correctly', async () => {
        rlStub().question.onCall(0).yields('5');
        rlStub().question.onCall(1).yields('-');
        rlStub().question.onCall(2).yields('3');

        const consoleLogStub = sinon.stub(console, 'log');

        await main();

        expect(consoleLogStub.calledWith('Result: 2')).to.be.true;
        consoleLogStub.restore();
    });

    it('should multiply two numbers correctly', async () => {
        rlStub().question.onCall(0).yields('5');
        rlStub().question.onCall(1).yields('*');
        rlStub().question.onCall(2).yields('3');

        const consoleLogStub = sinon.stub(console, 'log');

        await main();

        expect(consoleLogStub.calledWith('Result: 15')).to.be.true;
        consoleLogStub.restore();
    });

    it('should divide two numbers correctly', async () => {
        rlStub().question.onCall(0).yields('6');
        rlStub().question.onCall(1).yields('/');
        rlStub().question.onCall(2).yields('3');

        const consoleLogStub = sinon.stub(console, 'log');

        await main();

        expect(consoleLogStub.calledWith('Result: 2')).to.be.true;
        consoleLogStub.restore();
    });

    it('should handle division by zero', async () => {
        rlStub().question.onCall(0).yields('6');
        rlStub().question.onCall(1).yields('/');
        rlStub().question.onCall(2).yields('0');

        const consoleLogStub = sinon.stub(console, 'log');

        await main();

        expect(consoleLogStub.calledWith('Error: Division by zero is not allowed.')).to.be.true;
        consoleLogStub.restore();
    });

    it('should handle invalid operation', async () => {
        rlStub().question.onCall(0).yields('6');
        rlStub().question.onCall(1).yields('%');
        rlStub().question.onCall(2).yields('3');

        const consoleLogStub = sinon.stub(console, 'log');

        await main();

        expect(consoleLogStub.calledWith('Invalid operation. Please enter one of +, -, *, /.')).to.be.true;
        consoleLogStub.restore();
    });

    it('should handle invalid number input', async () => {
        rlStub().question.onCall(0).yields('abc');
        rlStub().question.onCall(1).yields('+');
        rlStub().question.onCall(2).yields('3');

        const consoleLogStub = sinon.stub(console, 'log');

        await main();

        expect(consoleLogStub.calledWith('Invalid input. Please enter valid numbers.')).to.be.true;
        consoleLogStub.restore();
    });
});