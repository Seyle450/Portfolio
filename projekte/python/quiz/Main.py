import os

os.system('cls')

print ("---Valorant Quiz---")
print ("Es werden dir 10 Fragen gestellt und du musst mindestens 7 richtig beantworten")
print()
Play = input ("Schreibe Stop wenn du nicht Spielen willst : ")
if Play == "Stop":
    quit()


Score = 0
os.system('cls')


print ("----Frage 1----")
print ("Wann wurde Valorant Rausgebracht (Jahr) ?")
Antwort = input ("Antwort : ")

if Antwort == "2020":
    Score = Score + 1
    input ("Richtig Drücke Enter zum Fortsetzen")
else :
    input ("Falsch Drücke Enter zum Fortsetzen")

 

os.system('cls')


print ("----Frage 2----")
print ("Was ist die Teurste Waffe ?")
Antwort = input ("Antwort : ")

if Antwort.lower() == "operator":
    Score = Score + 1
    input ("Richtig Drücke Enter zum Fortsetzen")
else :
    input ("Falsch Drücke Enter zum Fortsetzen")

 
 
os.system('cls')


print ("----Frage 3----")
print ("Was ist die Günstigste Waffe ?")
Antwort = input ("Antwort : ")

if Antwort.lower() == "shorty":
    Score = Score + 1
    input ("Richtig Drücke Enter zum Fortsetzen")
else :
    input ("Falsch Drücke Enter zum Fortsetzen")

 
 

os.system('cls')


print ("----Frage 4----")
print ("Welche Waffe hat die schnellste Feurrate ? ")
Antwort = input ("Antwort : ")

if Antwort.lower() == "stinger":
    Score = Score + 1
    input ("Richtig Drücke Enter zum Fortsetzen")
else :
    input ("Falsch Drücke Enter zum Fortsetzen")

 
 

os.system('cls')


print ("----Frage 5----")
print ("Welcher Agent war schon tot ?")
Antwort = input ("Antwort : ")

if Antwort.lower() == "omen":
    Score = Score + 1
    input ("Richtig Drücke Enter zum Fortsetzen")
else :
    input ("Falsch Drücke Enter zum Fortsetzen")

 
 

os.system('cls')


print ("----Frage 6----")
print ("Welcher Agent ist ein Wissenschaftler ?")
Antwort = input ("Antwort : ")

if Antwort.lower() == "viper":
    Score = Score + 1
    input ("Richtig Drücke Enter zum Fortsetzen")
else :
    input ("Falsch Drücke Enter zum Fortsetzen")

 
 

os.system('cls')


print ("----Frage 7----")
print ("Welcher Agent kommt aus Marokko (Bind) ?")
Antwort = input ("Antwort : ")

if Antwort.lower() == "cypher":
    Score = Score + 1
    input ("Richtig Drücke Enter zum Fortsetzen")
else :
    input ("Falsch Drücke Enter zum Fortsetzen")

 
 

os.system('cls')


print ("----Frage 8----")
print ("Welcher Agent ist aus der Türkei ?")
Antwort = input ("Antwort : ")

if Antwort.lower() == "fade":
    Score = Score + 1
    input ("Richtig Drücke Enter zum Fortsetzen")
else :
    input ("Falsch Drücke Enter zum Fortsetzen")

 
 

os.system('cls')


print ("----Frage 9----")
print ("Welcher Agent benutzt die seele anderer um sich zu heilen ?")
Antwort = input ("Antwort : ")

if Antwort.lower() == "reyna":
    Score = Score + 1
    input ("Richtig Drücke Enter zum Fortsetzen")
else :
    input ("Falsch Drücke Enter zum Fortsetzen")

 
 

os.system('cls')


print ("----Frage 10----")
print ("Welcher Agent kann in der Luft gleiten ?")
Antwort = input ("Antwort : ")

if Antwort.lower() == "jett":
    Score = Score + 1
    input ("Richtig Drücke Enter zum Fortsetzen")
else :
    input ("Falsch Drücke Enter zum Fortsetzen")

 
 

os.system('cls')
print("---Fertig---")
print ()
if Score >7:
    print("Glückwunsch du hast bestanden!")
else:
    print("Leider hast du nicht bestanden, dir haben", 7 - Score,"Punkte Gefehlt.")
print ()
print ("Score : ",Score,"/10")
print ("Genauigkeit : ",Score * 10,"%")
print ("Fehler : ",10 - Score)
print ()
input ("Zum schliesen Enter Drücken")