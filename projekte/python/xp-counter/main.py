Total = 0
exp = 1000
Level = 52
average = 500
Minutes = 0
Hours = 0

average = int(input("Wie viele EXP bekommst du im Durchschnitt pro Stunde? :"))
Level = int(input("Auf welchem Level bist du? :"))
Ziel = int(input("Auf welchem Level möchtest du hin? :"))

while Level < Ziel:
    exp = 1000 * Level
    print ("Level", Level, "XP", exp)
    Total += exp
    Level += 1
    
print("")
print("Du brauchst", Total, "EXP um Level", Level, "zu erreichen.")
Minutes = Total / average
Hours = Minutes / 60
print("Das wären ungefähr", Hours,"Stunden, oder",Minutes,"Minuten.")
