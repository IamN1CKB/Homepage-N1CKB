from ast import If
from calendar import c
from cgi import print_environ
from distutils.command.upload import upload
from msilib.schema import Condition
from operator import truediv
from pickle import FALSE
import re
from traceback import print_tb
from unicodedata import numeric
from unittest import result
from xmlrpc.client import boolean
from zoneinfo import available_timezones
#i commenti in Python si inseriscono con il segno cancelletto e si concludono mandando a capo il testo senza cancelletto di chiusura
#tutte le cose import e from sono cose che vedremo in futuro (le librerie)
#caratteristica base del linguaggio python sono le variabili
#per inserire variabili in python (utili per ricordare informazioni al programma) si utilizza questo testo

#premetto che in python sono da tenere conto anche le maiuscole, le minuscole
nome_variabile = "valore della variabile"
#(gli spazi in python non influiscono sul codice a meno che sono si trovino all'interno di una striga di codice)
#se il nome della variabile è formato da più parole si inserisce il trattino basso tra le parole _
#le variabili possono avere dei nomi che devono seguire varie regole:
#1)Python ha 28 parole riservate, che non possono essere usate come variabili:
# and      continue  else      for      import    not      raise
# assert   def       except    from     in        or       return
# break    del       exec      global   is        pass     try
# class    elif      finally   if       lambda    print    while
#2)possono contenere numeri ma non possono iniziare con essi
#3)non possono contenere simboli vari (tranne _ )

#invece il valore della variabile hanno vari tipi (types)
#ci sono vari types:
# 1)la stringa è un quualsiasi testo compreso tra ""
# 2)integer (numeri interi)
# 3)float (numeri decimali; traduzione: gallegiante (boh))
# 4)boolean (affermazioni di vero o falso; non hanno traduzione)
# 5)NoneType (caso in cui il valore è None, ossia nessun valore definito)
#per mostrare del testo nella console (ossia un area in cui vengono rappresentati i valori) si utilizza la funzione print()
print("testo da inserire nella console")
# se si vuole inserire un testo che non sia di una variabile si scrive con ""
# invece per inserire il valore di una variabile si inserisce il suo nome senza ""
print(nome_variabile)
# le variabili vengono chiamate così perché possono cambiare, infatti si può aggiornare il valore di una variabile nel corso del codice
# quando aggiorniamo il valore di una variabile, esso dimentica il suo valore precedente, per questo aggiungiamo print () dopo ogni aggiornamento della variabile, così da vedere gli aggiornamenti nella console
nome_variabile = "nuovo valore"
print(nome_variabile)
#possiamo dare anche il valore di una variabile ad una altra variabile
variabile_1 = "siuuum"
nome_variabile = variabile_1
print(nome_variabile)
#possiamo inserire 2 valori di stringhe alle variabili o in print grazie al +
#in questo modo formiamo delle espressioni
variabile_1 = " gatti:" + "55"
print(nome_variabile + variabile_1)
#facciamo degli esempi in cui possono essere usate le espressioni
user = "snoopdogg"
print("Username: " + user)
print("")       #questa linea serve solo a fare una riga di spazio nella console

#altri valori, che abbiamo elencato, per le variabili sono gli integer e i float, ossia i numeri interi e decimali (utili a tenere traccia deidati numerici)
#i numeri non hanno bisogno delle virgolette ""
#le espressioni con i numeri diventano vere e proprie operazioni
print(5 + 6)       #si usano i valori / , * , - , +  per fare le operazioni
print(5 / 2)       #risultato = 2.5
#l'operatore ** viene usato per fare le potenze
#l'operatore // viene usato per fare divisioni intere, cioè senza resto e senza virgola
#con l'operatore // non si arrotonda, ma si elimina la parte decimale, quindi un 2.9 diventerebbe 2
print(5 ** 3)
print(11 // 5)
print("5" + "6") #questi non sono considerati numeri dal codice, ma vengono considerati come stringhe
#esempi
private = 3
pubblic = 10
total = pubblic + private
print("Total posts:")
print(total)
print("")       #questa linea serve solo a fare una riga di spazio nella console

#importanti sono l'uso degli operatori, come True o False. 
#True o False si utilizzano per considerare vero o falso un valore, in modo da renderlo utilizzabile (available)
#inoltre c'è l'operatore not che rende negativa un affermazione
available = True
print(not available)
morning = False
eveninig = not morning
print(eveninig)
print("")       #questa linea serve solo a fare una riga di spazio nella console

#altro operatore è l'operatore di uguaglianza, ossia ==
#come risultato di questo operatore ci può essere solo True o False
aaaaaaaaazpegna = 2==5
print(aaaaaaaaazpegna)
print(2==2) 
print("re leone")
print(5==3)
#!= è l'operatore di disuguaglianza.
#poi ci sono < e > che sono operatori di paragone
#per indicare sia paragone che uguaglianza si usa <= e >= (ossia "maggiore o uguale" e "minore o uguale")
chest_è_na_cosa_ver = 100!=1001      #per comodità scrivo dei commenti di fianco al codice. Se inizia con il doppio cancelletto, indico ciò che dovrebbe essere visualizzato dalla console
print(chest_è_na_cosa_ver)           ##true (questa scrittura del doppio cancelletto l'ho inventata io per comodità)
print(4<4)    ##false
print(4<3)    ##false
print(4>3)    ##true
print(4>=4)   ##true
print(4<=1)   ##false
#possiamo anche paragonare anche le variabili
print(aaaaaaaaazpegna != chest_è_na_cosa_ver)    ##false != true =>   true 
print("")       #questa linea serve solo a fare una riga di spazio nella console

#le espressioni viste in precendeza possono sommare solo type dello stesso genere
#print(5 + "non funzionerà")               #infatti in questa linea di codice il terminale darebbe errore (togli l'# per provare)
#per sommare 2 types diversi bisogna usare le f-strings (formatted strings)
#le f-string sono formate da f e la stringa che continene delle parentesi graffe che racchiudono l'integer, in questo modo
print(f"{3}stringa")            ##3stringa
#il valore nelle parentesi può essere anche una variabile, o un espressione
new = 5
print(f"{new} new messages")    ##5 new messages
read = 2
print(f"{new - read} unread messages")   ##{5 - 2} new messages =>    3 new messages
print("")       #questa linea serve solo a fare una riga di spazio nella console

#per rendere il programma più intellingente, bisogna creare decision (decisoni) con varie dichiarazioni (statement)
#una di queste dichiarazioni è l'if statement (con la minuscola), in cui se l'if è vera, il programma esegue le linee di codice ad esso associato; però se l'if è falso, il proggramma skippa le linee do codice
#dopo if vanno i valori true o flase, detti condition. infine per chiudere la condition si mettono :
#per far sì che le linee di codice si associno alla condizione if, si devono mettere le linee di codice sotto if con uno spazio aggiuntivo, creando uno schema a cascata
if True:    
    print("sheeeee")
if False:
    print("no sheeeeeee")
variabile_a_caso = 5 <= 10
if variabile_a_caso:
    sium = new==3
    print(sium)      ##false
if sium:             #sium è false, quindi questo codice non viene eseguito
    print(f"{new} è il mio numero preferito")       ##5 è il mio numero preferito (non viene eseguito)
#possiamo usare l'if statement intelligentemente, ad esempio nella compilazione di moduli
answer = "Picasso"
if answer=="Picasso":
    print("la risposta " + answer + " è giusta")
if answer!="Picasso":
    print("la risposta " + answer + " è sbagliata")
#nel caso la condizione if sia falsa, però, invece di creare un altra condizione if contraria alla prima, che sblocca delle linee di codice altrenativo, possiamo usare la condizione else
#else (altrimenti) si usa dopo la condizione if, e raggruppa linee di codice che vengono elaborata in TUTTI i casi in cui la condizione if è falsa. non ha bisogno di condition
answer = "Giovanni"
if answer=="Picasso":
    print("la risposta " + answer + " è giusta")
else:
    print("la risposta " + answer + " è sbagliata")

number = "99"
if number==1:
    print("il numero è uno")
else:
    print("il numero non è uno")
#altra condizione si può inserire con l'elif statement, ossia un caso preciso in cui la condizione if è falsa
hour = 17   #cambia il valore di hour per vedere funzionare tutte le funzioni
if hour<12:
    print("buongiorno")
elif hour<17:
    print("buon pomeriggio")
elif hour<21:     #possamo aggingere quanti elif vogliamo, basta che stiano dopo la condizone if e prima la condizione else
    print("buonasera")
elif hour<24:
    print("buonanotte")
else:     #caso in cui sia la condizone if che le condizioni elif sono false
    print("felis navidal")
#ordine giusto delle condizioni: if    elif     (elif...)     else
print("")       #questa linea serve solo a fare una riga di spazio nella console

#nel caso volessimo aggingere più condizioni per if o elif, possiamo aggiungere l'operatore and tra le condizioni
#se solo una delle condizioni è falsa, le linee di codice vengono skippate
età = 17
permessi = False
privacy = True
if età>=16 and permessi and privacy:
    print("Puoi registrarti")
elif età>=16 and permessi!=True and privacy:
    print("non hai acconsentito ai permessi")
else:
    print("Non puoi registrarti")
#invece nel caso vogliamo aggiungere più condizioni, in modo che il codice venga eseguito se almeno una sola condizione è vera, possiamo usare l'operatore or
#se almeno una condizione è vera, il codice viene eseguito; se nessuna condizione è vera, il codice viene skippato
condizione_a_caso = "A"
if età>=16 or permessi or privacy and condizione_a_caso=="A":
    print("Nun mollà")
print("")       #questa linea serve solo a fare una riga di spazio nella console

#per i cambiamenti nel tempo (over time), le variabili cambiano grazie al self-assignment (autonomina)
likes = 5
likes = likes + 3
print(likes)   ##likes = 8
likes = likes - 1
print(likes)   ##likes = 7
#ci sono operatori che aiutano nel self-assignment
#l'operatore += aumenta il valore della variabile
likes += 3
print(likes)   ##likes = 10
#l'operatore -= invece riduce il valore della variabile
likes -= 2     ##likes = 8
print(likes)
#per la moltiplicazione della varibile per un numero si usa *=
likes *= 3     ##likes = 24
print("i likes sono:")
print(likes)
print("")       #questa linea serve solo a fare una riga di spazio nella console

#poi ci sono gli operatori //= che cambia il valore della variabile dividendolo per un numero (divisione intera)
commenti = 8
commenti //= 3    ##commenti = 8 // 3 = 2.66666... => si toglie la parte decimale perchè è un integer, quindi il risultato è 2
print("i commenti sono:")
print(commenti)
#per la divisione con la virgola bisogna fare il processo lungo=>   variabile = variabile / numero
nu_nummer = 100
nu_nummer = nu_nummer / 3     #divisione con la virgola
print(nu_nummer)       ##33.33333...
print("")       #questa linea serve solo a fare una riga di spazio nella console

#se i cambiamenti delle variabili sono ripetitivi possiamo usare i while loop
#sono simili alle condizioni if, ma fanno in modo che una stessa azione si ripeta
condition = True
while condition:
    print("ancora")
    condition = False           #questa linea di codice fa in modo che il loop si interrompa, facendo eseguire il codice solo una volta. se questa linea di codice non c'è, il programma viene eseguito all'infinito fino a crushare il computer
#se vogliamo far eseguire per un determinato numero di volte il codice, possiamo mettere nella condizione un counter variable (variabile di contatore)
numero_di_loop = 6
while numero_di_loop < 10:
    print(numero_di_loop)
    numero_di_loop += 1   #questo fa in modo che la condizione non funzioni dopo alcuni loop
#l'ordine con cui scriviamo i comandi influisce su ciò che viene eseguito. possiamo usare anche gli operatori and e or
#per condizioni miste tra operatori and e operatori or e operatori not, possiamo usare le parentesi tonde per dare più ordine a tutto
numero_di_loop = 10
while (numero_di_loop <= 15 and numero_di_loop > 7) or (numero_di_loop==23):
    numero_di_loop -= 1.2
    print(numero_di_loop)
print(f"{numero_di_loop} è il valore della variabile counter dopo il loop")
#i loop possono essere molto utili per ripetere un testo, formare un disegno, ecc. ad esempio possiamo fare la bandiera americana con queste linee di codice
first_counter = 0
while first_counter < 5: 
    print("**********-------------------")
    first_counter += 1

second_counter = 0
while second_counter < 4:
    print("-----------------------------")
    second_counter += 1
print("")       #questa linea serve solo a fare una riga di spazio nella console

#altro modo di fare i loop è tramite i for loop, più semplici da scrivere per i programmatori
#for + variabile non definita + in + range(numero)
#"for" e "in" sono operatori 
#la variabile non definta descrive a che loop è stato eseguita la linea di codice, fungendo da counter
#range indica quante volte il programma deve eseguire le linee di codice
for counter in range(3):
    print("hello")
    print(counter)
#di solito si sceglie i come variabile nei for loop per convenzione
#il valore della varibile counter quindi indica quante volte è stato esegito quel blocco di codice
#se nel valore della funzione raneg però inseriamo 2 valori, che diventano il primo il valore iniziale e il secondo il valore finale, possiamo definire la variabile counter come i valori compresi tra i 2 valori da range
for a in range(7, 15):
    print(a)
#la variabile non definti per convenzione è i, che sta per index, però possiamo scegliere qualsiasi nome
#ad esempio se vogliamo fare la bandiera americana più facilmente con i for loop, scriviamo:
for i in range(4):
    print("**********-------------------")
for i in range(4):
    print("-----------------------------")
print("")       #questa linea serve solo a fare una riga di spazio nella console

#per organizzare meglio numerose variabili, si possono raggruppare in delle liste (una sola variabile con più valori) in questo modo
#invece di scrivere della liste come questa:
a_caso_1 = "adiè"
a_caso_2 = "si gruoos"
a_caso_3 = 69
a_caso_4 = True
#si posssono fare liste in questo modo
a_caso=["adiè", "si gruoos", 69, True]
print(a_caso)
#i valori della lista (detti elementi) possono essere infiniti, e sono numerati da un indice (index), in cui 0 è il primo, 1 è il secondo, 2 è il terzo, 3 è il qarto
#per selezionare solo un elemento di una lista si usano gli indici in questo modo
print(a_caso[1])
#con gli indici si può anche cambiare un solo elemento della lista
a_caso[0]=6.56
print(a_caso)
#l'indice può essere anche negativo nel caso in cui conti gli elementi dall'ultimo fino al primo, in cui -1 è l'ultimo, -2 è il penultimo, -3 è il terzultimo, e così via
print(a_caso[-2])
print("")       #questa linea serve solo a fare una riga di spazio nella console

#si può modificare la lista con vari instructor (istruttori), come append, insert e pop
#gli istructor si usano si usano scrivendo: nome della variabile + . + instructor + (elemento da aggiungere)
#append si usa per aggiungere un elemento alla fine della lista
a_caso.append(False)
print(a_caso)
#si può aggiungere solo un elemento alla volta
#insert inserisce elementi su un indice indicato. infatti nelle parantesi si deve scrivere prima l'indice e poi l'elemento ad aggiungere
a_caso.insert(3, "chest è ver")
print(a_caso)
print(a_caso[3])
#pop si usa per rimuovare un elemento. nelle parentesi va l'indice dell'elemento da rimuovere
a_caso.pop(4)
print(a_caso)
#nel caso volessimo creare una nuova lista partendo dalla lista che abbiamo e selzionando solo alcuni elementi, possiamo scrivere
nuova_lista=a_caso[1:3]   #1 e 3 indicano gli indici degli elementi di apertura e chiusura, esclusi loro stessi
print(nuova_lista)
#se si vuole fare i primi tot numeri, o gli ultimi tot, possiamo scrivere
print(a_caso[1:])    #in questo caso si vedono gli elementi dall'indice 2 fino alla fine
print(a_caso[:-2])   #in questo caso si vedono gli elementi dall'inizio fino all'indice -2
print("")       #questa linea serve solo a fare una riga di spazio nella console

#le liste possono essere usate per fare dei for loop, mettendo al posto di range(numero), che indicava il numero di loop da fare, la variabile della lista
#in questo modo la variabile counter diventa gli elementi della lista, e il loop viene eseguito tot volte, quanti sono gli elementi della lista
for i in range(4):
    print(i)
Cantanti_Sanremo=["Blanco", "Emma Marroni", "Gianni Morandi", "Jovanotti"]
for counter in Cantanti_Sanremo:
    print(counter)
    print("-----")

artisti=["Blanco", "Emma Marroni", "Negramano"]
for artista in artisti:
    print(artista)
    print("------")
print("")       #questa linea serve solo a fare una riga di spazio nella console

#usiamo len (instructor) per visalizzare il numero di elementi in una lista
print(len(artisti))
#possaimo anche memorizzare 
users = ["Sarah", "Mike", "Ella", "Nicola"]
number_of_users  = len(users)
print(number_of_users)
#se usiamo len per una lista vuota, il suo valore sarà 0
lista_vuota=[]
print(len(lista_vuota))

#con l'if statement, possiamo usare len per fare delle condizioni
tasks = ["dishes", "windows", "vacuum"]
if len(tasks)>1:
  print("Ugh, more work!")
print("")       #questa linea serve solo a fare una riga di spazio nella console

#se vogliamo trovare i valori massimi o minimi di una lista di dati, possiamo usare gli instructor max() e min()
punteggio_gioco=[59, 47, 60, 97, 53.5, 34, 90.356, 77]
print(max(punteggio_gioco))
print(min(punteggio_gioco))
#gli instructor max e min funzionano solo sui types integer e float (ossia i valori numerici), o suoi valori di stringhe. se i valori sono mischiati, la console da errore
#nelle liste di stringhe il valore max sarebbe qello ordinato alfabeticamente per ultimo (più vicino alla z), invece il valore min sarebbe quello ordinato per primo (più vicino alla a)
lista_alfabetica=["fssf", "gerg", "wgwg", "AZ", "az"]
print(max(lista_alfabetica))
print(min(lista_alfabetica))
lista_alfabetica_numerica=["c", 2, "A", "B", 23.4]
#per vedere che la console da errore togli l'# alla prossima riga
#print(max(lista_alfabetica_numerica))
print("")       #questa linea serve solo a fare una riga di spazio nella console

#per ordinare una lista in ordine alfabetico o numerico ascendente si usa l'instructor .sort()
punteggio_gioco.sort()
print(punteggio_gioco)
lista_alfabetica.sort()
print(lista_alfabetica)
#come per l'instructor max e min, anche con sort non si possono mischiare types numerici e di stringe
#lista_alfabetica_numerica.sort()           #infatti queste righe darebbero errore
#print(lista_alfabetica_numerica)
print("")       #questa linea serve solo a fare una riga di spazio nella console

#per sommare i dati di una lista possiamo usare l'instructor sum
print(sum(punteggio_gioco))
#le liste che si possono sommare sono solo numeriche
#print(sum(lista_alfabetica))                             #questa linea di codice darebbe errore
#possiamo salvare la somma dei dati in variabili
total=sum(punteggio_gioco)
print(total)
print("")       #questa linea serve solo a fare una riga di spazio nella console

#invece se vogliamo prendere i dati di 2 liste possiamo fare delle espressioni con le liste
#le liste possono essere anche di stringhe e di numeri e boolean, e poi vengono scritti nell'ordine dell'espressione, cioe:
#lista_1+lista_2= [elementi della lista_1, elementi della lista_2]
lista_booleen=[True, False, False]
lista_suprema=punteggio_gioco+lista_booleen+lista_alfabetica
print(lista_suprema)
print("")       #questa linea serve solo a fare una riga di spazio nella console

#in una lista ci possono essere più volte lo stesso valore
#per contare quante volte un valore è presente in una lista si usa l'instrctor count()
#per prima cosa aggiungo degli elementi (con append) in modo da fare dei doppioni
lista_suprema.append("gerg")
lista_suprema.append(True)
lista_suprema.append(77)
lista_suprema.append("gerg")
lista_suprema.append(77)
lista_suprema.append("gerg")
#ora utilizziamo count(), inserendo tra le parentesi l'elemento che vogliamo contare
print(lista_suprema)
settantesettte_time=lista_suprema.count(77)
print(settantesettte_time)
print(lista_suprema.count(True))
print(lista_suprema.count("gerg"))
#se contiamo un elemento che non c'è, apparirà 0 come risultato
print(lista_suprema.count(32))
print("")       #questa linea serve solo a fare una riga di spazio nella console

#se invece vogliamo sapere solo se un elemento è presente in una lista, possiamo usare l'operatore in
#a queste operazioni il risulatato sono true o false
AZ_cè_nella_lista_suprema="AZ" in lista_suprema
print(AZ_cè_nella_lista_suprema)
print(32 in lista_suprema)
print("")       #questa linea serve solo a fare una riga di spazio nella console

#possiamo usare count e in per fare condizioni per l'if statement o per il while loop
if AZ_cè_nella_lista_suprema:
    print("ce sta, mo me so rotto de vedè")
while "az" in lista_suprema:
    lista_suprema.pop(10)
    print(lista_suprema)
while lista_suprema.count("Siuuuum")<=5:
    lista_suprema.insert(17, "Siuuuum")
    print(lista_suprema)
print(lista_suprema.count("Siuuuum"))
print("")       #questa linea serve solo a fare una riga di spazio nella console

#nel caso di una varibile con le Stringhe contiene più parole, e si vogliono dividere le varie parole formando una lista, usiamo l'instructor split() (dividere)
variabile_con_tante_parole="Che la forza sia con te"
print(variabile_con_tante_parole.split())
print(variabile_con_tante_parole)
#questo instructor non cambia la variabile come facevano gli altri instrctor, ma ne creano un altra che deve essere salvata in una nuova variabile
variabile_con_la_lista_di_tante_parole=variabile_con_tante_parole.split()
print(variabile_con_la_lista_di_tante_parole)
#possiamo anche aggiornare la variabile originaria
variabile_con_tante_parole=variabile_con_tante_parole.split()
print(variabile_con_tante_parole)
#la parentesi in split indica il carattere che divide i vari elementi della lista
#di default come si è visto il carattere che divide gli elementi è lo spazio bianco (whitespace)
altra_variabile_di_stringhe="It's about drive, It's about power. We stay hungry, we devoir"
altra_variabile_di_stringhe=altra_variabile_di_stringhe.split(",")
print(altra_variabile_di_stringhe)
#non possiamo però dividere gli elementi di una lista nuovamente
#altra_variabile_di_stringhe=altra_variabile_di_stringhe.split(".")       #questa linea di codice darebbe errore
#esempio:
link="https://getmimo.com/glossary/python"
link_percorso_web=link.split("/")
print(link_percorso_web)
print("")       #questa linea serve solo a fare una riga di spazio nella console

#altro instructor per le variabili di stringhe è replace, che si usa per rimpiazzare una parte della stringha con un altra
#anche replace come split deve essere salvato in una nuova variabile
#esempio:
testo_bello="Bassano, sei tu?"
testo_ancora_più_bello=testo_bello.replace("Bassano", "D'Antonio")
print(testo_ancora_più_bello)
saldi_gennaio="A Gennaio c'è iper sconto, approfittane subito!"
saldi_febbraio=saldi_gennaio.replace("Gennaio", "Febbraio")
print(saldi_febbraio)
print("")       #questa linea serve solo a fare una riga di spazio nella console

#in certe operazioni, come abbiamo visto, non tutti i tipi di type possono interagire tra loro, infatti nella console uscirebbe errore
#per poter fare interagire type diversi possiamo fare una type conversion
#prima funzione che possiamo usare per la conoscenza dei types è type()
bellofigo=34
numero_decimale=1.098
stringa="siuuum"
boolean_valore=True
no_valore=None
print(type(bellofigo))
print(type(numero_decimale))
print(type(stringa))
print(type(boolean_valore))
print(type(no_valore))
#ci sono altre funzioni che ci permettono di cambiare i valori da types diversi:
#str()   int()  float()   bool()
#ci sono molti casi di conversioni

#1) da stringa a int
valore_in_stringa="14"
print(int(valore_in_stringa))
#se proviamo a cambiare un valore di stringa che però contiene lettere o simboli, oppure un numero decimale, la console ci da errore
valore_in_stringa_lettere="54fg"
#print(int(valore_in_stringa_lettere))              #questa linea di codice darebbe errore

#2) da stringa a float
valore_in_stringa_decimale="14.7"
print(float(valore_in_stringa_decimale))
valore_in_float=float(valore_in_stringa)                   #qui diventa 14.0
print(valore_in_float)
print(type(valore_in_float))
#se la stringa contiene lettere o simboli ci darebbere errore come per gli int
#print(float(valore_in_stringa_lettere))               #questa linea di codice darebbe errore

#3) da stringa a bool
#questa conversione verifica se è presente del testo nella stringa, se è presente = True, altrimenti False
#il testo della stringa può essere qualunque
print(bool(valore_in_stringa))
print(bool(valore_in_stringa_lettere))
valore_vuoto=""
print(bool(valore_vuoto))

#4) da int a stringa
#nella console il risultato di questa conversione non si nota, siccome rappresenta allo stesso modo sia le stringhe numeriche che i numeri
print(str(bellofigo))

#5) da int a float
#questa conversione aggiunge solo la virgola con lo zero al numero. es 14 diventa 14.0
print(float(bellofigo))

#6) da int a bool
#similmente alla stringa, questa conversione controlla se il valore è diverso da 0
print(bool(bellofigo))
numero_non_numero=0
print(bool(numero_non_numero))

#7) da float a stringa
#nella console il risultato di questa conversione non si nota, siccome rappresenta allo stesso modo sia le stringhe numeriche che i numeri
print(str(numero_decimale))

#8) da float a int
#questa conversione arrotonda per difetto il numero decimale
#anche se il numero è 12.9999 verrà arrotondato a 12 e non 13
print(int(numero_decimale))
numero_decimale_da_arrotondare=22.9999999
print(int(numero_decimale_da_arrotondare))

#9) da float a bool
#questa conversione controlla se il valore è diverso da 0 decimale (ossia 0.0 , 0.00 , 0.0000 , ecc)
print(bool(numero_decimale))
numero_non_numero_pt2=0.0
print(bool(numero_non_numero_pt2))

#10) da bool a stringa
#questa conversione fa solo diventare una stringa le parole True o False
print(str(boolean_valore))

#11) da bool a int
#questa conversione fa diventare 1 il valore True, e 0 il valore False
print(int(boolean_valore))
boolean_valore_negativo=False
print(int(boolean_valore_negativo))

#12) da bool a float
#questa conversione è ungale alla conversione da bool a int, ma aggiunge la virgola e lo zero
#quindi a True corrisponde 1.0 , e a False corrisponde 0.0
print(float(boolean_valore))
boolean_valore_negativo=False
print(float(boolean_valore_negativo))
print("")       #questa linea serve solo a fare una riga di spazio nella console

#ad esempio, simuliamo una compilazione di dati dove tutto arriva in valori di stringhe
#cambia i valori di inserimento per provare che il codice funzioni
inserimento_nome = "Nicola Belardo"
inserimento_età = "17"
inserimento_scuola= "G. Siani"
inserimento_università = ""
inserimento_sottoscritti = "54.587"

nome_bool = bool(inserimento_nome)
if nome_bool:
    name = inserimento_nome
else:
    name = "nome Sconosciuto"

età = int(inserimento_età)
scuola_bool= bool(inserimento_scuola)
if scuola_bool:
    scuola= "Frequento la scuola " + inserimento_scuola
else:
    scuola=False

università_bool = bool(inserimento_università)
if università_bool and scuola_bool==False:
    università= "Frequento l'" + inserimento_università
else:
    università=False
if università==False and scuola==False:
    non_frequentante="Non frequento scuola o università"
    
sottoscritti = bool(inserimento_sottoscritti)
if sottoscritti:
    sottoscritti= " ed ho un canale Youtube con " + inserimento_sottoscritti + " iscritti"
else:
    sottoscritti=""

if università_bool:
    profilo = "Mi chiamo " + name + ', ho ' + str(età) + " anni. " + università + sottoscritti
    print(profilo)
elif scuola_bool:
    profilo = "Mi chiamo " + name + ', ho ' + str(età) + " anni. " + scuola + sottoscritti
    print(profilo)
else:
    profilo = "Mi chiamo " + name + ', ho ' + str(età) + " anni. " + non_frequentante + sottoscritti
    print(profilo)
print("")       #questa linea serve solo a fare una riga di spazio nella console

#per semplificare i codici nei programmi, invece di riscivere sempre lo stesso codice, si possono usare delle funzioni che raggruppano blocchi di codice
#la funzione usata è def, che ci permette di salvare varie azioni in una keyword
def nome_della_funzione():
    print("Buongiorno")
    print("O Buonasera")
#per eseguire la funzione bisogna richiamarla riscrivendola
nome_della_funzione()
#le funzioni però hanno bisogno di specifiche informazioni, con variabili diverse a seconda del momento
#per fare ciò noi usiamo i parametri (o variabile locale) che diventano delle variabili all'interno della funzione
#i parametri vengono inseriti nelle parentesi dopo def e nome della funzione
def saluto(nome):
    print(f"Ciao {nome}")
#al parametro viene dato un valore quando si richiama la funzione
saluto("Nick")
saluto("FraaaaaAAAtm")
#es
def user_status(status):
    print(f"Nick: {status}")
user_status("Online")
print("")       #questa linea serve solo a fare una riga di spazio nella console

#fonte:https://www.andreaminini.com/python/return-python
#una funzione, quando viene richiamata può riportare un valore che si mostra con print
#il valore alla funzione creata può essere assegnata con l'istruzione return
#senza return infatti la funzione non ha valore assegnato e nella console viene visualizzato il valore None se si  inserisce in print
def funzione(parametro):
    variabile_1_1=parametro+1       #la variabile variabile_1_1 funziona solo all'interno della funzione, all'esterno non esiste
print(funzione(2))                  #viene visualizzato il valore None perchè non abbiamo usato return

def funzione_1(parametro):
    variabile_1_2=parametro+1
    return variabile_1_2
print(funzione_1(2))                #nella console viene visalizzato il valore di return
print("")       #questa linea serve solo a fare una riga di spazio nella console

#ora introduciamo un nuovo operatore, ossia: n %m
#m deve essere un integer, altrimenti la console ci dà errore
#n è un qualsiasi numero integer o float
#questa operazione ci dà come risultato il resto della divisione tra la variabile ed n (variabile/n)
numeroo = 37%7     #37 / 7 fa 5 col resto di 2
print(numeroo)
#in questo modo possiamo verificare se una divisione ha un certo resto con anche gli operatori di paragone
resto = 7%3==1
print(resto)

#per fare un esempio con l'instructor return, possiamo determinare quando un valore è pari o dispari
def funzione(n): 
    if (n %2==0):
        return 'pari'
    elif (n%2==1):
        return 'dispari'
    else:
        return 'errore'
num=5       #questa variabile diventa poi il parametro della funzione, quindi bisogna cambire questa variabile per cambiare numero da analizzare
print("il numero è", funzione(num))

#altra funzione con cui possiamo fare un esempio è la funzione che ci fa calcolare la media
def media_aritmetica(x, y):
    media=(x+y)/2
    return media
x=3         #questi valori sono i numeri con cui sarà calcolata la media
y=5
print(media_aritmetica(x, y))
print("")       #questa linea serve solo a fare una riga di spazio nella console

#con l'instructor return si possono trasferire molti valori fuori dalla funzione, grazie alle virgole
def primi_tre_multipli(n):
    a, b, c= n, n*2, n*3
    return a, b, c
a, b, c= primi_tre_multipli(2)      #in questo modo i tre valori di return vengono assegnati a tre variabili diverse
print(b)
print(a)
print(c)
#oppure si possono usare gli indici di un unica variabile, di solito per convenzione si usa result
#result infatti, anche se viene visualizzato in un colore diverso, è sempre una variabile
result = primi_tre_multipli(2)
print(result[1])
print(result[2])
print(result[0])
print("")       #questa linea serve solo a fare una riga di spazio nella console

#i nomi delle funzioni, sempre per convenzione, hanno caratteristiche simili:
#1)le funzioni che sono delle azioni iniziano con create_
#2)le funzioni che riportano valori con return inziano con get_
#3)le funzioni che riportano valori booleani (Tre o False) iniziano con is
#4)le funzioni con azioni simili iniziano con la stessa parola

#le variabili create all'interno di una funzione hanno una validità locale, con infatti funzionanti solo nella funzione
#invece tutte le altre variabili create in blocchi di codice come i for loop, if statement o nel codice normale, hanno validità globale

#le funzioni possono incorparare anche vari blocchi di codice come l'if statement, detto nested (ossia   CONTINUA DA QUIIII)
def display_progress(total_files):
  for i in range(total_files):
    print(f"Downloading file {i} out of {total_files}")
  print(f"Downloading file {total_files} out of {total_files}")

display_progress(4)









#inoltre ci sono delle funzioni che convertono le liste di elementi, ossia
#list()    dict()   set()   tuple()
#queste funzioni le approfondiremo in futuro