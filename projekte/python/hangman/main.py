from Zeichnungen import Zeichnungen
from Wörter import Wörter
import random
import os

while True:
    word = random.choice(Wörter)


    progress = ["_"] * len(word)


    incorrect_guesses = 6
    Anzeige = Zeichnungen[incorrect_guesses]


    while "_" in progress and incorrect_guesses > 0:
        os.system('cls')
        
        print(" ".join(progress))
        print(f"Verfügbare Versuche: {incorrect_guesses}")
        print (Anzeige)
        
        guess = input("Buchstabe: ").lower()

        # Check if the guess is in the word
        if guess in word:
            # Update the player's progress
            for i in range(len(word)):
                if word[i] == guess:
                    progress[i] = guess
        else:
            # Update the number of incorrect guesses
            incorrect_guesses -= 1
        Anzeige = Zeichnungen[incorrect_guesses]

    # Check if the player has won
    if "_" not in progress:
        print("Glückwunsch das Wort war "+word+".")
    else:
        print("Leider hast du keine Versuche mehr, das Wort war " + word + ".")

    input("Drücke [ENTER] zum Wiederholen")