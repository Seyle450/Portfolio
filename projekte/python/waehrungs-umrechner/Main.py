import os
from Umrechnung import Umrechnen

print("----Währungs Umrechner----") # Start Text

print()

print("---Es werden folgende währungen unterstützt---")
print()
print("-Euro-EUR")
print("-Dollar-USD")
print("-Pfund Sterling-GBP")
print("-Tunesicher Dinar-TND")
print("-Kuwaitisher Dinar-KWD")

print()

Eingabe = input("Eingabe Währung : ").upper()
Ausgabe = input("Ausgabe Währung (Liste möglich): ").upper() # Eingabe Zeilen um damit zu rechnen
Betrag = float (input("Betrag : "))


os.system ('cls')

if Eingabe.upper() not in ["EUR","TND","USD","GBP","TND","KWD"]:
    print ("Ungültige Eingabe Währung")
    input ("Drücken sie [Enter] zum Schliesen")
    quit()
if Ausgabe.upper() not in ["EUR","TND","USD","GBP","TND","KWD","LISTE"]:
    print ("Ungültige Ausgabe Währung")
    input ("Drücken sie [Enter] zum Schliesen")
    quit()



print("----Währungs Umrechner----")

print()
print("Orginal Betrag : ", Betrag)
print("Orginal Währung : ", Eingabe)
print()
Umrechnen(Eingabe,Ausgabe,Betrag)
# Die rechnungen die gemacht werden müssen um es umzurechnen werden durchgegangen und 1 wird gemacht


print()
input ("Drücke [Enter] Zum schliesen.")  