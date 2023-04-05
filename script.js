var displayDiv = document.querySelector("#display");
var op = ""
var number = 0


console.log(displayDiv.innerText)


function press(num) {
    var initializer = displayDiv.innerText
    var temp = ""
    if (num == ".") {
        displayDiv.innerText = displayDiv.innerText + num
        initializer = displayDiv.innerText
    } else if (initializer === "0") {
        displayDiv.innerText = num
    } else {
        displayDiv.innerText = displayDiv.innerText + num
    }
}

function setOP(operator){
    if(operator == "/"){
        op = "/"
        number = displayDiv.innerText
        console.log(op)
        console.log(number)
    }else if(operator == "*"){
        op = "*"
        number = displayDiv.innerText
    }else if(operator == "-"){
        op = "-"
        number = displayDiv.innerText
    }else{
        op = "+"
        number = displayDiv.innerText
    }
    return op
}

function calculate(){
    var result = 0
    if(op == "/"){
        result = number / displayDiv.innerText
        displayDiv.innerText = result
    }else if(op == "*"){
        result = number * displayDiv.innerText
        displayDiv.innerText = result
    }else if(op == "-"){
        result = number - displayDiv.innerText
        displayDiv.innerText = result
    }else{
        sum = displayDiv.innerText
        result = parseFloat(number) + parseFloat(sum)
        displayDiv.innerText = result
    } 
}