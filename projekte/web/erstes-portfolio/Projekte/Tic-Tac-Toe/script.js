var player = "X";
var cooldown = false;  // Flag, das angibt, ob der Cooldown aktiv ist

function Pressed(x) {
    // Verhindere Eingaben während des Cooldowns
    if (cooldown) return;

    var element = document.getElementById(x);
    
    // Check if the element already has either class
    if (!element.classList.contains("x") && !element.classList.contains("o")) {
        if (player == "X") {
            element.classList.add("x");
            document.getElementById("P").innerText = "Spieler O";
            player = "O";
            document.body.style.backgroundColor = "rgb(74, 117, 237)";
            
            // Check if there's a winner after this move
            checkWinner();
            
        } else if (player == "O") {
            element.classList.add("o");
            document.getElementById("P").innerText = "Spieler X";
            player = "X";
            document.body.style.backgroundColor = "rgb(223, 72, 72)";
            
            // Check if there's a winner after this move
            checkWinner();
        }
    }
}

function checkWinner() {



    // Define the win conditions
    var winPatterns = [
        [1, 2, 3], // Row 1
        [4, 5, 6], // Row 2
        [7, 8, 9], // Row 3
        [1, 4, 7], // Column 1
        [2, 5, 8], // Column 2
        [3, 6, 9], // Column 3
        [1, 5, 9], // Diagonal 1
        [3, 5, 7], // Diagonal 2
    ];
    
    // Check each win pattern
    for (let pattern of winPatterns) {
        var [a, b, c] = pattern;
        var elA = document.getElementById(a);
        var elB = document.getElementById(b);
        var elC = document.getElementById(c);
        
        // Check if all three elements have the same class ('x' or 'o')
        if (elA.classList.contains("x") && elB.classList.contains("x") && elC.classList.contains("x")) {
            alert("Spieler X hat gewonnen!");
            // Remove 'win' class from elements with class 'winscreen1'
            removeAndReapplyWinClass("winscreen1");
            setTimeout(reset, 5000);  // Reset after 5 seconds
            
            return;
        } else if (elA.classList.contains("o") && elB.classList.contains("o") && elC.classList.contains("o")) {
            alert("Spieler O hat gewonnen!");
            // Remove 'win' class from elements with class 'winscreen2'
            removeAndReapplyWinClass("winscreen2");
            setTimeout(reset, 5000);  // Reset after 5 seconds
            return;
        }
        if (player == "X"){
            document.body.style.backgroundColor = "rgb(74, 117, 237)";
    
        }
        if (player == "O") {
            document.body.style.backgroundColor = "rgb(223, 72, 72)";
        }
    }

    let allFilled = true;
    for (let i = 1; i <= 9; i++) {
        var element = document.getElementById(i);
        if (!element.classList.contains("x") && !element.classList.contains("o")) {
            allFilled = false; // Es gibt noch ein freies Feld
            break;
        }
    }

    // Wenn alle Felder gefüllt und kein Gewinner
    if (allFilled) {
        alert("Unentschieden!");
        reset();
    }
}

function removeAndReapplyWinClass(className) {
    // Set the cooldown flag to true
    cooldown = true;

    // Select all elements with the given class (winscreen1 or winscreen2)
    var elements = document.getElementsByClassName(className);
    
    // Remove 'win' class from all these elements
    Array.from(elements).forEach(element => {
        element.classList.remove("win");
    });

    // Wait for 5 seconds, then reapply the 'win' class
    setTimeout(() => {
        Array.from(elements).forEach(element => {
            element.classList.add("win");
        });
        
        // Reset the cooldown flag
        cooldown = false;
    }, 5000);  // 5000ms = 5 seconds
}

function reset() {
    document.body.style.backgroundColor = "rgb(242, 242, 242)";

    for (let i = 1; i <= 9; i++) {
        var element = document.getElementById(i);
        element.classList.remove("x");
        element.classList.remove("o");
    }
    document.getElementById("P").innerText = "Spieler X";  // Reset player turn display
    player = "X";  // Reset to player X
}
