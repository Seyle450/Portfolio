let number = "0";

function updateScreen() {
    document.getElementById("screen").innerHTML = number;
}


function one() {
    if (number === "0") {
        number = "1"
    }
    else {
        number = number + "1";
    }

    updateScreen()
}
function two() {
    if (number === "0") {
        number = "2"
    }
    else {
        number = number + "2";
    }

    updateScreen()
}
function three() {
    if (number === "0") {
        number = "3"
    }
    else {
        number = number + "3";
    }

    updateScreen()
}
function four() {
    if (number === "0") {
        number = "4"
    }
    else {
        number = number + "4";
    }

    updateScreen()
}
function five() {
    if (number === "0") {
        number = "5"
    }
    else {
        number = number + "5";
    }

    updateScreen()
}
function six() {
    if (number === "0") {
        number = "6"
    }
    else {
        number = number + "6";
    }

    updateScreen()
}
function seven() {
    if (number === "0") {
        number = "7"
    }
    else {
        number = number + "7";
    }

    updateScreen()
}
function eight() {
    if (number === "0") {
        number = "8"
    }
    else {
        number = number + "8";
    }

    updateScreen()
}
function nine() {
    if (number === "0") {
        number = "9"
    }
    else {
        number = number + "9";
    }

    updateScreen()
}
function zero() {
    if (number === "0") {
        number = "0"
    }
    else {
        number = number + "0";
    }

    updateScreen()
}
function plus() {

    if (number === "0") {
        number = "0"
    }
    if (number.slice(-1) !== "+") {
        number = number + "+";
    }

    updateScreen()
}
function calculate() {
    number = eval(number).toString();

    updateScreen()
}
function cleard() {
    number = "0"

    updateScreen()
}
function minus() {

    if (number === "0") {
        number = "0"
    }
    if (number.slice(-1) !== "-") {
        number = number + "-";
    }

    updateScreen()
}
function multiply() {

    if (number === "0") {
        number = "0"
    }
    if (number.slice(-1) !== "*") {
        number = number + "*";
    }

    updateScreen()
}
function divide() {

    if (number === "0") {
        number = "0"
    }
    if (number.slice(-1) !== "/") {
        number = number + "/";
    }

    updateScreen()
}
function point() {

    if (number === "0") {
        number = "0"
    }
    if (number.slice(-1) !== ".") {
        number = number + ".";
    }

    updateScreen()
}
function percent() {
    number = number / 100;
    
    updateScreen()

}
function change() {
    if (number.charAt(0) === "-"){
        number = number.slice(1);
    }
    else if (number === "0"){

    }
    else {
        number = "-" + number;
    }
    updateScreen()
}
window.onkeydown = function(event) {
    if (event.key == 1) {
        one()
    };
    if (event.key == 2) {
        two()
    };
    if (event.key == 3) {
        three()
    };
    if (event.key == 4) {
        four()
    };
    if (event.key == 5) {
        five()
    };
    if (event.key == 6) {
        six()
    };
    if (event.key == 7) {
        seven()
    };
    if (event.key == 8) {
        eight()
    };
    if (event.key == 9) {
        nine()
    };
    if (event.key == 0) {
        zero()
    };
    if (event.key == "+") {
        plus()
    };
    if (event.key == "-") {
        minus()
    };
    if (event.key == "*") {
        multiply()
    };
    if (event.key == "/") {
        divide()
    };
    if (event.key == "Enter") {
        calculate()
    };
    if (event.key == "Backspace") {
        del()
    };
    if (event.key == "delete") {
        cleard()
    };
};
updateScreen();
document.getElementById("screen").innerHTML = number;
