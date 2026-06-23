import os
import random
import string


def get_password(length):
    
    result_str = ''.join(random.choice(string.ascii_letters) for i in range(length))
    
    print ("Password : ")
    print(result_str)
    print ()


print ("---Password Generator---")
print ()
Ziffern = float (input ("Länge : "))

if Ziffern < 3 :
    input ("Ungültige länge - Drücke [Enter] zum schliesen.")
    quit

if Ziffern == 3 :
    get_password(3)

if Ziffern == 4 :
    get_password(4)

if Ziffern == 5 :
    get_password(5)

if Ziffern == 6 :
    get_password(6)

if Ziffern == 7 :
    get_password(7)

if Ziffern == 8 :
    get_password(8)

if Ziffern == 9 :
    get_password(9)

if Ziffern == 10 :
    get_password(10)

if Ziffern == 11 :
    get_password(11)

if Ziffern > 11 :
    input ("Ungültige länge - Drücke [Enter] zum schliesen.")
    quit

input ("Zum schliesen [Enter] drücken.")