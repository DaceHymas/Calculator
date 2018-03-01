var firstNum = 0
var secondNum = 0
var whichNum = 1
var whichFunction = 0

function simpleNumberFunction (numberInput) {
    if (whichNum == 1) {
        $("#firstNumber").append(numberInput)
        var number = $("#firstNumber").html()
        firstNum = Number(number)
        console.log("first number:", firstNum, ". second number: ", secondNum)
    } else {
        $("#secondNumber").append(numberInput)
        var number = $("#secondNumber").html()
        secondNum = Number(number)
        console.log("first number:", firstNum, ". second number: ", secondNum)
    }
}

$("#equals").click(function() {
    if (whichFunction == 1) {
        var answer = firstNum + secondNum
        console.log(firstNum + secondNum)
    } else if (whichFunction == 2) {
        var answer = firstNum - secondNum
        console.log(firstNum - secondNum)
    } else if (whichFunction == 3) {
        var answer = firstNum / secondNum
        console.log(firstNum / secondNum)
    } else if (whichFunction == 4) {
        var answer = firstNum * secondNum
        console.log(firstNum * secondNum)
    }
    $("#answer").html(answer)
    firstNum = 0
    secondNum = 0
    whichNum = 1
    $("#firstNumber").html("")
    $("#secondNumber").html("")
    $("#functionText").html("")
})

$( "#num1" ).click(function() {
    simpleNumberFunction ("1")
})
$( "#num2" ).click(function() {
    simpleNumberFunction ("2")
});
$( "#num3" ).click(function() {
    simpleNumberFunction ("3")
});
$( "#num4" ).click(function() {
    simpleNumberFunction("4")
});
$( "#num5" ).click(function() {
    simpleNumberFunction("5")
});
$( "#num6" ).click(function() {
    simpleNumberFunction("6")
});
$( "#num7" ).click(function() {
    simpleNumberFunction("7")
});
$( "#num8" ).click(function() {
    simpleNumberFunction("8")
});
$( "#num9" ).click(function() {
    simpleNumberFunction("9")
});
$( "#num0" ).click(function() {
    simpleNumberFunction("0")
});
$( "#plus" ).click(function() {
    whichNum = 2
    whichFunction = 1
    $("#functionText").html("+")
})
$( "#minus" ).click(function() {
    whichNum = 2
    whichFunction = 2
    $("#functionText").html("-")
})
$( "#divide" ).click(function() {
    whichNum = 2
    whichFunction = 3
    $("#functionText").html("/")
})
$( "#multiply" ).click(function() {
    whichNum = 2
    whichFunction = 4
    $("#functionText").html("*")
})

