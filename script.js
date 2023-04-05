var displayDiv = document.querySelector("#display");
var num1 = ""
var num2 = ""
var op = ""


function press(num) {
    num1 = num1 + num
    displayDiv.innerText = num1
}

function setOP(operador) {
    if(num1 == ""){
        num1 = "0"
    }
    op = operador
    num2 = num1
    num1 = ""
}

function calculate() {
    var x = parseFloat(num2)
    var y = parseFloat(num1)

    switch (op) {
        case "/":
            result = x / y
            break
        case "*":
            result = x * y
            break
        case "+":
            result = x + y
            break
        case "-":
            result = x - y
            break
    }
    displayDiv.innerText = result
    num1 = result
    op = ""
}

function clr(){
    num1 = ""
    num2 = ""
    displayDiv.innerText = "0"
}