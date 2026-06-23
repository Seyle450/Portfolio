import random
import os
import pickle

Status = "E"  #Es kann alles sein hauptsache nicht F
while Status != "F":

    Nummer = (random.randint(1, 6))
    # Nummer wird generiert

    os.system('cls')

    print ("----Würfel Simulation----")
    print() # Start Text
    input ("Zum starten [Enter] drücken.")

    os.system('cls')

    print ("----Würfel Simulation----")
    print()
    print("--",Nummer,"--") # Generierte Nummer wird angezeigt
    print()
    print (Nummer * "*")
    print()
    print ("-----------------")

    print()

    print ("Zum fortsetzen [Enter] drücke.")
    # Man kann Status lassen wie es war oder in irgendetwas ändern Hauptsache nicht in F sonst wird es geschlossen
    Status = input ("Zum schliesen F Eingeben.    ")

