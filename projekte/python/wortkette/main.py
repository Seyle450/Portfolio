import os
import time

Woerter = []
Suche = "Start"
Buchstabe = "A"
Status = 1
Runde = 0
os.system('cls')
print ("Die Erste Runde fängt mit dem Buchstaben A an.")
print()
while Status == 1:
    print ("Buchstabe :",Buchstabe)
    Suche = input("Schreibe dein Wort : \n")
    os.system('cls')
    if Suche.lower() in Woerter:
        print ("Das Wort wurde schon in der Runde NR.", Runde, "benutzt, daher hast du verloren!")
        print()
        print("Runden :",Runde)
        print("Wörter :", Woerter)
        break
    elif Suche[0].capitalize() != Buchstabe:
        print ("Das Wort sollte mit ", Buchstabe,"anfangen, daher hast du verloren!")
        break
    else:
        Woerter.append(Suche.lower())
        print ("Das wort", Suche, "wurde der liste hinzugefügt.")
        Suche = ''.join(reversed(Suche))
        Suche = (Suche[0])
        Buchstabe = Suche.capitalize()
        print
        print("------------------------------")
        print ( )
        Runde += 1

input("Drücke ENTER zum fortfahren!")