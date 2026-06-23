from random import randint
import os
Status = 0
Money = 1000
while True :
 list = ["list","0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","black","red","row1","row2","row3"]
 Black = ["2", "4", "6", "8", "10", "11", "13", "15", "17", "20", "22", "24", "26", "28", "29","31","33","35"]
 Red = ["1", "3", "5", "7", "9", "12", "14", "16", "18", "19", "21", "23", "25", "27", "30", "32", "34", "36"]
 First12 = ["0","1","2","3","4","5","6","7","8","9","10","11","12"]
 Second12 = ["13","14","15","16","17","18","19","20","21","22","23","24"]
 Third12 = ["25","26","27","28","29","30","31","32","33","34","35","36"]



 os.system ('cls')

 print("---Elyes's Roulette---")
 print()
 print("Welcome to Elyes's Casino, good Luck!")
 print ("To see a list of the Inputs write List.")
 print()
 print ("Money :",Money)
 print()
 Number = input("Pick Bet :")
 Number = str(Number)
 Number = str.lower(Number)
 print()
 if Number == "list":
    
    os.system ('cls')
    print("---Elyes's Roulette---")
    print()
    print("Here are the Inputs you can use, and their Payout rate.")
    print ()
    print("A number from 0 to 36   Payout : 36x")
    print("Black   Payout : 2x")
    print("Red   Payout : 2x")
    print("Row1   Payout : 3x")
    print("Row2   Payout : 3x")
    print("Row3   Payout : 3x")
    print ()
    input("Press [Enter] to continue.")
    Number = input("Pick Bet :")
    Number = str(Number)
    Number = str.lower(Number)
 if Number not in list and not "list":
    while Number not in list and not "list":
       os.system ('cls')

    print("---Elyes's Roulette---")
    print()
    print("Your Input was INVALID.")
    print ("To see a list of the Inputs write List.")
    print()
    print("--------------------------------------")
    Number = input("Input :")
    Number = str(Number)
    Number = str.lower(Number)
    print()
    if Number == "list":
        os.system ('cls')
        print("---Elyes's Roulette---")
        print()
        print("Here are the Inputs you can use, and their Payout rate.")
        print("A number from 0 to 36   Payout : 36x")
        print("Black   Payout : 2x")
        print("Red   Payout : 2x")
        print("Row1   Payout : 3x")
        print("Row2   Payout : 3x")
        print("Row3   Payout : 3x")
        print ()
        input(" Press [Enter] to continue.")
 Payin = input("Pay-In :")
 Payin = int(Payin)
 Money -= Payin

 
 


 Winner = randint(0,42)
 Winner = str(Winner)
 if Number in list:
    if Number == "black":
        if Winner in Black:
            Status = 1
            Rate = 2
        else: Status = 2
    if Number == "red":
        if Winner in Red:
            Status = 1
            Rate = 2
        else: Status = 2
    if Number == "Row1":
        if Winner in First12:
            Status = 1
            Rate = 3
        else: Status = 2
    if Number == "Row2":
        if Winner in Second12:
            Status = 1
            Rate = 3
        else: Status = 2
    if Number == "Row3":
        if Winner in Third12:
            Status = 1
            Rate = 3
        else: Status = 2
 else: 
    if Number == Winner:
        Status = 1
        Rate = 36
    else: Status = 2





 os.system ('cls')
 print("---Elyes's Roulette---")
 print()
 print("--------------------------------------")
 print()
 print("The Input you Picked is : ", Number)
 print ("The Winner Number is : ", Winner)
 print()
 if Winner in Black:
    print("Color : Black")
 elif Winner in Red:
    print("Color : Red")
 else: 
    print("Color : White")

 if Winner in First12:
    print("Row : First")
 elif Winner in Second12:
    print("Row : Second")
 elif Winner in Third12:
    print("Row : Third")
 else: 
    print("Row : None")

 print()
 print("------------------------------------------------------")
 if Status == 1:
    print("You Won this bet and will get", str(Rate) + "x of your pay in.")
    Payout = Rate * Payin
    print("Pay-Out :",Payout)
    Money += Payout
 elif Status == 2:
    print("You Lost this bet.")
    Payout = 0
    print("Pay-Out :",Payout)

 print()
 Continue = input("To leave write [1], to continue press anything")
 if Continue == 1:
    break