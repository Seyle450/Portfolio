print ("---Rechner---")

Num1 = float (input ("Erste Zahl : "))
print ()

Op = input ("Rechenart : ")
print ()

Num2 = float (input ("Zweite Zahl : "))
print ()



if Op == "+":
    Ergebniss = (Num1 + Num2)

elif Op == "-":
    Ergebniss = (Num1 - Num2)

elif Op == "*":
    Ergebniss = (Num1 * Num2)

elif Op == "/":
    Ergebniss = (Num1 / Num2)

elif Op != "/" or "*" or "+" or "-":
    input ("Etwas ist schiefgelaufen drücken sie [Enter] zum schliesen.")
    quit()






print ("----",Num1, Op, Num2, "=", Ergebniss, "----")

input ("Zum Schliesen [Enter] Drücken")