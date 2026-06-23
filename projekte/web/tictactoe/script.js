var player = "X";

function Pressed(x) {
    var element = document.getElementById(x);
    
    // Check if the element already has either class
    if (!element.classList.contains("x") && !element.classList.contains("o")) {
        if (player == "X") {
            element.classList.add("x");
            document.getElementById("P").innerText = "Spieler O";
            player = "O";
            document.body.style.backgroundColor = "rgb(74, 117, 237)";
        } else if (player == "O") {
            element.classList.add("o");
            document.getElementById("P").innerText = "Spieler X";
            player = "X";
            document.body.style.backgroundColor = "rgb(223, 72, 72)";
        }
    }
}


function reset() {
    document.getElementById(1).classList.remove("x");
    document.getElementById(1).classList.remove("o");

    document.getElementById(2).classList.remove("x");
    document.getElementById(2).classList.remove("o");

    document.getElementById(3).classList.remove("x");
    document.getElementById(3).classList.remove("o");

    document.getElementById(4).classList.remove("x");
    document.getElementById(4).classList.remove("o");

    document.getElementById(5).classList.remove("x");
    document.getElementById(5).classList.remove("o");

    document.getElementById(6).classList.remove("x");
    document.getElementById(6).classList.remove("o");

    document.getElementById(7).classList.remove("x");
    document.getElementById(7).classList.remove("o");

    document.getElementById(8).classList.remove("x");
    document.getElementById(8).classList.remove("o");

    document.getElementById(9).classList.remove("x");
    document.getElementById(9).classList.remove("o");
}