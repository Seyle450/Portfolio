import random
import os

os.system ('cls')

User_Wins = 0
Bot_Wins = 0
Wins = 0
options = ["stein","papier","schere"]


while True:
    os.system ('cls')

    print ("--Runde Nummer : ", Wins, "--")
    if Wins > 0:
        print ("Bot Wins : ", Bot_Wins)
        print ("Deine Wins : ", User_Wins)

    user_input = input ("Schere  /  Stein  /  Papier  / Verlassen = F : ").lower()  
    
   

    



    if user_input == "f" :
        break
    if user_input not in options:
        continue




    random_number = random.randint(0,2)
    #0 = Schere   /   1 = Stein   /    2 = Papier

    computer_pick = options[random_number]
   





    os.system ('cls')


    if computer_pick == "schere" and user_input == "papier":
        print ("Du hast verloren!")
        print ("-----------------")
        Bot_Wins = Bot_Wins + 1
        print ("Bot Wins : ", Bot_Wins)
        print ("Deine Wins : ", User_Wins)
        
    if computer_pick == "stein" and user_input == "schere":
        print ("Du hast verloren!")
        print ("-----------------")
        Bot_Wins = Bot_Wins + 1
        print ("Bot Wins : ", Bot_Wins)
        print ("Deine Wins : ", User_Wins)
        
    if computer_pick == "papier" and user_input == "stein":
        print ("Du hast verloren!")
        print ("-----------------")
        Bot_Wins = Bot_Wins + 1
        print ("Bot Wins : ", Bot_Wins)
        print ("Deine Wins : ", User_Wins)
        



    if user_input == "schere" and computer_pick == "papier":
        print ("Du hast Gewonnen!")
        print ("-----------------")
        User_Wins = User_Wins + 1
        print ("Bot Wins : ", Bot_Wins)
        print ("Deine Wins : ", User_Wins)
        
    if user_input == "stein" and computer_pick == "schere":
        print ("Du hast Gewonnen!")
        print ("-----------------")
        User_Wins = User_Wins + 1
        print ("Bot Wins : ", Bot_Wins)
        print ("Deine Wins : ", User_Wins)
        
    if user_input == "papier" and computer_pick == "stein":
        print ("Du hast Gewonnen!")
        print ("-----------------")
        User_Wins = User_Wins + 1
        print ("Bot Wins : ", Bot_Wins)
        print ("Deine Wins : ", User_Wins)
        


    if user_input == computer_pick:
        print ("Es ist Unentschieden!")
        print ("---------------------")
        print ("Bot Wins : ", Bot_Wins)
        print ("Deine Wins : ", User_Wins)
        
    print ()
    print ("Bot : ", computer_pick)
    print ("Du : ", user_input)
    print ()
    
    input ("Zum Fortsetzen enter Drücken")

    Wins = Wins + 1




    
   

