var multNums = document.getElementById('mult');
var result = document.getElementById('print_result');
var clear = document.getElementById('clear');

// function performs multiplication calculation
function multiply() {
    var number1  = document.getElementById('num1').value;
    var number2 = document.getElementById('num2').value;
    var value = number1 * number2;

    result.innerHTML = "Result: " + value;

    // another way to store the result
    // var result = document.getElementById('print_result').value =  value;
}

// multNums.onclick = multiply;

//both perform the same functionality

multNums.onclick = function() {
    multiply();
}


// function clears inputted data
function clearData() {
    var number1  = document.getElementById('num1').value = '';
    var number2 = document.getElementById('num2').value = '';
    result.innerHTML = 'Result: ';
}

clear.onclick = function() {
    clearData();
}