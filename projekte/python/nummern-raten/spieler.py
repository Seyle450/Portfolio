import random
import os


os.system ('cls')
print ("----Nummern Erraten----")
print()

Max = input ("Max Number : ")
print()
print("---------------")
print ()
if Max.isdigit:
    Max = int(Max)
Max_r = Max + 1

r = random.randrange(Max_r)
Versuche = 0

print ("Eine nummer von 0 -",Max,"wurde generiert versuche sie zu erraten.")
print()
input ("Drücke [Enter] zum starten")


os.system ('cls')


print ("---Errate die Nummer---")
print()
Guess = input ("Nummer : ")
if Guess.isdigit:
    Guess = int(Guess)

Versuche = Versuche + 1

while Guess != r :
    print ("---Errate die Nummer---")
    

    if Guess > r: 
        os.system ('cls')
        print ("---Lower---")

    elif Guess < r:
        os.system ('cls')
        print ("---Higher---")


   
   
    print()
    print ("Letzer Versuch : ",Guess)
    print()
    Guess = input ("Nummer : ")
    Versuche = Versuche + 1
    if Guess.isdigit:
        Guess = int(Guess)


    continue     
    
    
    
if Guess == r:  
        os.system ('cls')
        print ("Gut gemacht du hast die Richtige Zahl erraten!")
        print()
        print ("Richtige Nummer : ", Guess)
        print("Versuche : ", Versuche)
        print ()
        print()
        input("Zum schliesen [Enter] Drücken")

