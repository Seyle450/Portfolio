
import random
import os

while True:
    os.system ('cls')

    Min = 0
    Max = 1000001
    Versuche = 1
    Guess = False

    print ("----Nummern Erraten (BOT)----")
    print ()
    print ("Denke dir eine nummer zwischen 1-1.000.000 aus und merke sie dir.")
    print ()
    input ("Drücke [Enter] wenn du eine nummer hast.")

    os.system ('cls')


    while Guess != True:
        os.system ('cls')
        Versuch = random.randrange(Min,Max)

        print ("----Nummern Erraten (BOT)----")
        print ()
        print (f"---{Versuch}---")
        print()
        Status = input ("Höher (H) oder Niedriger (N) oder Richtig (R) : ")


        if Status.upper() == "R":
            Guess = True
        elif Status.upper() == "H":
            Min = Versuch
            Versuche = Versuche + 1
        elif Status.upper() == "N":
            Max = Versuch
            Versuche = Versuche + 1
        elif Status.upper() != "R" or "H" or "N":
            print ("Schreiben sie bitten nur R / H / N.")
            input ("Drücken sie [Enter] zum Fortfahren")
            Status = input ("Höher (H) oder Niedriger (N) oder Richtig (R) : ")

            if Status.upper() == "R":
                Guess = True
            elif Status.upper() == "H":
                Min = Versuch
                Versuche = Versuche + 1
            elif Status.upper() == "N":
                Max = Versuch
                Versuche = Versuche + 1
            elif Status.upper() != "R" or "H" or "N":
                input ("Ein Fehler ist aufgetreten drücken sie [Enter] zum schliesen.")
                quit()

    print ()
    print (f"Der Bot hat deine Zahl nach {Versuche} herausgefunden.")
    print ()
    Weiter = input ("Schreibe W wenn du Weiter Spielen willst.  ")

    if Weiter.upper != "W":
        quit()
        