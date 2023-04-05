var displayDiv = document.querySelector("#display");
var num1 = null
var num2 = null
var op = null


function press(num) {
    num1 += num
    displayDiv.innerText = num1
}

function setOP(operator) {
    if (num1 == "") {
        num1 = "0"
    }
    op = operator
    num2 = num1
    num1 = ""
}

function calculate() {
    x = parseFloat(num1)
    y = parseFloat(num2)
    result = 0
    switch (op){
        case "/":
            result = y / x
            break
        case "*":
            result = x * y
            break
        case "-":
            result = y - x
            break
        case "+":
            result = x + y
            break
    }
    displayDiv.innerText = result
    num1 = result
    op = null
}

function clr() {
    num1 = null
    num2 = null
    op = null
    displayDiv.innerText = "0"
}

// if (op == "/") {
//     result = y / x
// } else if (op == "*") {
//     result = x * y
// } else if (op == "-") {
//     result = y - x
// } else {
//     result = x + y
// }

