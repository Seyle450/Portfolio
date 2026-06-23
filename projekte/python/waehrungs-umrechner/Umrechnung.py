from Währungen import EUR_EUR,EUR_GBP,EUR_KWD,EUR_TND,EUR_USD,GBP_EUR,KWD_EUR,TND_EUR,USD_EUR,GBP_GBP,GBP_KWD,GBP_TND,GBP_USD,KWD_GBP,TND_GBP,USD_GBP,USD_KWD,USD_TND,USD_USD,KWD_USD,TND_USD,TND_KWD,TND_TND,KWD_TND,KWD_KWD
def Umrechnen(Eingabe,Ausgabe,Betrag):
    if Eingabe.upper() == "EUR" and Ausgabe.lower() == "liste":
        print("Dollar : ",EUR_USD * Betrag)
        print("Brittischer Pfund : ",EUR_GBP * Betrag)
        print("Tunesicher Dinar : ",EUR_TND * Betrag)
        print("Kuwaitischer Dinar : ",EUR_KWD * Betrag)
    if Eingabe.upper() == "USD" and Ausgabe.lower() == "liste":
        print("Euro : ",USD_EUR * Betrag)
        print("Brittischer Pfund : ",USD_GBP * Betrag)
        print("Tunesicher Dinar : ",USD_TND * Betrag)
        print("Kuwaitischer Dinar : ",USD_KWD * Betrag)
    if Eingabe.upper() == "GBP" and Ausgabe.lower() == "liste":
        print("Euro : ",GBP_EUR * Betrag)
        print("Dollar : ",GBP_USD * Betrag)
        print("Tunesicher Dinar : ",GBP_TND * Betrag)
        print("Kuwaitischer Dinar : ",GBP_KWD * Betrag)
    if Eingabe.upper() == "TND" and Ausgabe.lower() == "liste":
        print("Euro : ",TND_EUR * Betrag)
        print("Dollar : ",TND_USD * Betrag)
        print("Brittischer Pfund : ",TND_GBP * Betrag)
        print("Kuwaitischer Dinar : ",TND_KWD * Betrag)
    if Eingabe.upper() == "KWD" and Ausgabe.lower() == "liste":
        print("Euro : ",KWD_EUR * Betrag)
        print("Dollar : ",KWD_USD * Betrag)
        print("Brittischer Pfund : ",KWD_GBP * Betrag)
        print("Tunesicher Dinar : ",KWD_TND * Betrag)

    if Eingabe.upper() == "EUR" and Ausgabe.upper() == "EUR":
        print("Euro : ",EUR_EUR * Betrag)
    if Eingabe.upper() == "EUR" and Ausgabe.upper() == "GBP":
        print("Britischer Pfund : ",EUR_GBP * Betrag)
    if Eingabe.upper() == "EUR" and Ausgabe.upper() == "USD":
        print("Dollar : ",EUR_USD * Betrag)
    if Eingabe.upper() == "EUR" and Ausgabe.upper() == "TND":
        print("Tunesicher Dinar : ",EUR_TND * Betrag)
    if Eingabe.upper() == "EUR" and Ausgabe.upper() == "KWD":
        print("Kuwaitischer Dinar : ",EUR_KWD * Betrag)

    if Eingabe.upper() == "USD" and Ausgabe.upper() == "EUR":
        print("Euro : ",USD_EUR * Betrag)
    if Eingabe.upper() == "USD" and Ausgabe.upper() == "GBP":
        print("Britischer Pfund : ",USD_GBP * Betrag)
    if Eingabe.upper() == "USD" and Ausgabe.upper() == "USD":
        print("Dollar : ",USD_USD * Betrag)
    if Eingabe.upper() == "USD" and Ausgabe.upper() == "TND":
        print("Tunesicher Dinar : ",USD_TND * Betrag)
    if Eingabe.upper() == "USD" and Ausgabe.upper() == "KWD":
        print("Kuwaitischer Dinar : ",USD_KWD * Betrag)

    if Eingabe.upper() == "GBP" and Ausgabe.upper() == "EUR":
        print("Euro : ",GBP_EUR * Betrag)
    if Eingabe.upper() == "GBP" and Ausgabe.upper() == "GBP":
        print("Britischer Pfund : ",GBP_GBP * Betrag)
    if Eingabe.upper() == "GBP" and Ausgabe.upper() == "USD":
        print("Dollar : ",GBP_USD * Betrag)
    if Eingabe.upper() == "GBP" and Ausgabe.upper() == "TND":
        print("Tunesicher Dinar : ",GBP_TND * Betrag)
    if Eingabe.upper() == "GBP" and Ausgabe.upper() == "KWD":
        print("Kuwaitischer Dinar : ",GBP_KWD * Betrag)

    if Eingabe.upper() == "TND" and Ausgabe.upper() == "EUR":
        print("Euro : ",TND_EUR * Betrag)
    if Eingabe.upper() == "TND" and Ausgabe.upper() == "GBP":
        print("Britischer Pfund : ",TND_GBP * Betrag)
    if Eingabe.upper() == "TND" and Ausgabe.upper() == "USD":
        print("Dollar : ",TND_USD * Betrag)
    if Eingabe.upper() == "TND" and Ausgabe.upper() == "TND":
        print("Tunesicher Dinar : ",TND_TND * Betrag)
    if Eingabe.upper() == "TND" and Ausgabe.upper() == "KWD":
        print("Kuwaitischer Dinar : ",TND_KWD * Betrag)

    if Eingabe.upper() == "KWD" and Ausgabe.upper() == "EUR":
        print("Euro : ",KWD_EUR * Betrag)
    if Eingabe.upper() == "KWD" and Ausgabe.upper() == "GBP":
        print("Britischer Pfund : ",KWD_GBP * Betrag)
    if Eingabe.upper() == "KWD" and Ausgabe.upper() == "USD":
        print("Dollar : ",KWD_USD * Betrag)
    if Eingabe.upper() == "KWD" and Ausgabe.upper() == "TND":
        print("Tunesicher Dinar : ",KWD_TND * Betrag)
    if Eingabe.upper() == "KWD" and Ausgabe.upper() == "KWD":
        print("Kuwaitischer Dinar : ",KWD_KWD * Betrag)