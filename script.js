function clearResult() {
    document.getElementById('out').value = '';
}

function append(value) {
    document.getElementById('out').value += value;
}

function calculate(func) {
    let resultInput = document.getElementById('out');
    let values = resultInput.value.split(',').map(Number);
    var result

    if (func === Math.min || func === Math.max) {
        result = func.apply(null, values);
    } else {
        result = func(math.evaluate(resultInput.value))
    }

    resultInput.value = result;
}

function calculatePow() {
    let resultInput = document.getElementById('out');
    let values = resultInput.value.split(',').map(Number);
    var result = Math.pow(values[0], values[1]);

    resultInput.value = result;
}

function evaluateExpression() {
    let resultInput = document.getElementById('out');
    let value = resultInput.value;
    let result = math.evaluate(value);

    resultInput.value = result;
}

function calculateRandom() {
    let resultInput = document.getElementById('out');
    let values = resultInput.value.split(',').map(Number);
    var result = Math.random() * (values[1] - values[0]) + values[0];

    resultInput.value = result;
}