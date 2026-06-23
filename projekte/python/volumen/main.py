import os


os.system ('cls')

print ("----Volumen Rechner----")
print ()


print ("Wähle eins der folgenden Körper")
print ("-Würfel")
print ("-Quader")
print ("-Pyramide")
print ("-Prisma")
print ()
input ("Zum Fortsetzen [Enter] drücken")

os.system ('cls')

print ("----Volumen Rechner----")
print ()


Körper = input ("Körper : ") #um zu wissen was berechnet werden soll

#Würfel
if Körper.lower() == "würfel":
        A = float (input ("A : "))
        print ()
        print ("Das Volumen dieses Körpers ist",A*A*A)
        print (f"Der Rechenweg ist {A} * {A} * {A} = {A * A * A}")

#Quader
if Körper.lower() == "quader":
       A = float (input ("A : "))
       B = float (input ("B : "))
       H = float (input ("H / C : "))
    
       print ("Das Volumen dieses Körpers ist",A*B*H)
       print (f"Der Rechenweg ist {A} * {B} * {H} = {A * B * H}")

#Pyramide
if Körper.lower() == "pyramide":
       G = float (input ("Grundfläche : "))
       H = float (input ("Höhe : "))
       print ()
       print ("Das Volumen dieses Körpers ist",G * H / 3)
       print (f"Der Rechenweg ist {G} * {H} / 3 = {G * H / 3}")

#Prisma
if Körper.lower() == "prisma":
    G = float (input ("Grundfläche : "))
    H = float (input ("Höhe : "))
    print ()
    print ("Das Volumen dieses Körpers ist",G*H)
    print (f"Der Rechenweg ist {G} * {H} = {G * H}")

print()
print()
input ("Zum Schliesen [Enter] drücken.")