from unittest import result

def profilo(inserimento_nome, età, inserimento_università, inserimento_sottoscritti):
    #inseriamo l'if statement che ci permette di verificare se è stato inserito un valore al nome
#    if bool(inserimento_nome):
#        nome = inserimento_nome
#    else:
#        nome = "nome Sconosciuto"
    #siccome vogliamo fare il codice più pulito possibile usiamo la forma contratta dell'if assign-if-exp 
    nome = inserimento_nome if bool(inserimento_nome) else "nome Sconosciuto"

    scuola_bool= bool(inserimento_scuola)
#    if scuola_bool:
#        scuola = "Frequento la scuola " + inserimento_scuola
#    else:
#        scuola=False
    scuola = f"Frequento la scuola {inserimento_scuola}" if scuola_bool else False
    università_bool = bool(inserimento_università)

    università= f"Frequento l'{inserimento_università}" if università_bool and not scuola_bool else False

    if not (università and scuola):
        non_frequentante="Non frequento scuola o università"
    
    sottoscritti = bool(inserimento_sottoscritti)
    sottoscritti= f" ed ho un canale Youtube con {inserimento_sottoscritti} inscritti" if sottoscritti else ""
    
    if università_bool:
        return f"CIAO. Mi chiamo {nome}, ho {str(età)} anni. {università + sottoscritti}"
    elif scuola_bool:
        return f"CIAO. Mi chiamo {nome}, ho {str(età)} anni. {scuola + sottoscritti}"
    else:
        return f"CIAO. Mi chiamo {nome}, ho {str(età)} anni. {non_frequentante + sottoscritti}"
        
inserimento_nome = input("inserisci il tuo nome:")
inserimento_età = input("inserisci la tua età:")
inserimento_scuola= input("inserisci la tua scuola (se la fai):")
inserimento_università = input("inserici la tua università (se la frequenti):")
inserimento_sottoscritti = input("inserisci i tuoi inscritti su youtube (se li tieni):")
print(profilo(inserimento_nome, inserimento_età, inserimento_università, inserimento_sottoscritti))