import random
import os
status = None
winner = None
Lost = 0
Number = 1

def Screen():
    os.system("cls")
    print("*-*-*-*-*-*-*-*")
    print("----Casino----")
    print("Pro runde kannst du 1 Token verlieren oder deinen vervielfachen!")
    print()



Screen()
Tokens = int(input("Tokens :"))
STokens = Tokens

while status not in ("x", "X"):
    Screen()
    print(("■" * Number) + ("□" * 10))
    print()
    print ("If you want to Bet press [Enter]!")
    print ("If you stop write [X]!")
    status = input("Status :")
    if status in ("x", "X"):
        break
    winner = random.randint(1,100)
    if winner < 50:
        Number += 1
    else:
        Tokens -= 1
        Screen()
        print ("You Lost!")
        Number = 1
        print ("If you want to Bet press [Enter]!")
        print ("If you stop write [X]!")
        Lost = 1

    




Screen()
print ("You Started with " + str(STokens) + ".")
print ("And Left with " + str(Tokens*Number) + ".")
input ("Press [Enter] to continue!") 
print ()

