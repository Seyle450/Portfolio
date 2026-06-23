from time import sleep
import turtle


win = turtle.Screen()
win.title("Ping Pong")
win.bgcolor("grey")
win.setup(width=800, height=600)
win.tracer(0)


#Score
Score_A = 0
Score_B = 0

#Spieler A
Spieler_A = turtle.Turtle()
Spieler_A.speed(0)
Spieler_A.shape("square")
Spieler_A.color("Blue")
Spieler_A.penup()
Spieler_A.goto(-350,0)
Spieler_A.shapesize(stretch_wid=5,stretch_len=1)


#Spieler B
Spieler_B = turtle.Turtle()
Spieler_B.speed(0)
Spieler_B.shape("square")
Spieler_B.color("Red")
Spieler_B.penup()
Spieler_B.goto(350,0)
Spieler_B.shapesize(stretch_wid=5,stretch_len=1)

#Ball
Ball = turtle.Turtle()
Ball.speed(0)
Ball.shape("square")
Ball.color("white")
Ball.penup()
Ball.goto(0,0)
Ball.dx = 0.2
Ball.dy = -0.2


#Pen
pen = turtle.Turtle()
pen.speed(0)
pen.color("White")
pen.penup()
pen.hideturtle()
pen.goto(0,260)
pen.write ("Spieler A: 0  Spielerr B: 0", align="center", font=("Courier", 24, "normal"))

#Function
def Spieler_A_up():
    y = Spieler_A.ycor()
    y += 20
    Spieler_A.sety(y)
def Spieler_A_down():
    y = Spieler_A.ycor()
    y -= 20
    Spieler_A.sety(y)

def Spieler_B_up():
    y = Spieler_B.ycor()
    y += 20
    Spieler_B.sety(y)
def Spieler_B_down():
    y = Spieler_B.ycor()
    y -= 20
    Spieler_B.sety(y)

#Keyboard binding
win.listen()
win.onkeypress(Spieler_A_up, "w")
win.onkeypress(Spieler_A_down, "s")

win.onkeypress(Spieler_B_up, "Up")
win.onkeypress(Spieler_B_down, "Down")

while True:
    win.update()
    sleep(0.0005)

    Ball.setx(Ball.xcor()+ Ball.dx)
    Ball.sety(Ball.ycor()+ Ball.dy)

    if Ball.ycor() > 290:
        Ball.sety(290)
        Ball.dy *= -1


    if  Ball.ycor() < -290:
        Ball.sety(-290)
        Ball.dy *= -1

    if  Ball.xcor() > 390:
        Ball.goto(0,0)
        Ball.dx *= -1
        Score_A += 1
        pen.clear()
        pen.write (f"Spieler A: {Score_A}  Spielerr B: {Score_B}", align="center", font=("Courier", 24, "normal"))

    if  Ball.xcor() < -390:
        Ball.goto(0,0)
        Ball.dx *= -1
        Score_B += 1
        pen.clear()
        pen.write (f"Spieler A: {Score_A}  Spielerr B: {Score_B}", align="center", font=("Courier", 24, "normal"))

    #Spielr und Ball Colision
    if (Ball.xcor() > 340 and Ball.xcor() < 350) and (Ball.ycor()< Spieler_B.ycor()+50 and Ball.ycor() > Spieler_B.ycor() -50 ):
        Ball.setx(340)
        Ball.dx *= -1

    if (Ball.xcor() < -340 and Ball.xcor() < -350) and (Ball.ycor()< Spieler_A.ycor()+50 and Ball.ycor() > Spieler_A.ycor() -50 ):
        Ball.setx(-340)
        Ball.dx *= -1

    
