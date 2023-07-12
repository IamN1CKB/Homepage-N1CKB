//questo è un file JavaScript, con l'estensione terminante in .js
//le frasi che sto scrivendo non verranno interpretate dall'interprete JavaScript, perché sono commenti
//esistono 2 tipi di commenti nello JavaScript: quello per la riga singola e quello multiriga
//quello a riga singola si applica con il doppio slash: tutto ciò che sta nella riga a destra del doppio slash è un commento
//quindi questo ci consente di scrivere i commenti affianco alle istruzioni
/*i commenti multiriga sono delimitati da uno slash e un asterisco
infatti questo è un commento multiriga,
e sono uguali ai commenti nel foglio di stile CSS
*/
//inoltre ricordiamoci che gli spazi vuoti (ossia quelli del tasto space) non influenzano nulla a meno che non siano all'interno di stringhe (dopo vedremo cosa sono)
/*invece alla fine di ogni linea di codice è solito usare il ; in modo da facilitare al compilatore la capacità di riconoscere che sono 2 linee di codice diverse
utilizzando il punto e virgola inoltre possiamo scrivere 2 istruzioni nella stessa linea di codice
il ; non è obbligatorio ma è molto consigliato
es:
IstruzioneACaso= Valore a caso; AltraIstruzioneACaso= Altro valore a caso 
in caso di linee di codice diverse possiamo anche omettere il ;
*/


/*Ora introduciamo meglio lo JavaScript
è un linguaggio di programmazione che ci permette di creare app dinamiche e siti web dinamici.
siccome si devono registrare le informazioni nel linguaggio, lo JavaScript (come la maggior parte dei linguaggi di programmazione), ha le variabili*/
/*le variabili sono dunque come scatole con un contenuto e con un nome.
per creare variabili noi usiamo le parole chiavi "let" e "const" (c'è anche un terzo modo, con "var", che vedremo molto più in là) */
// let crea delle variabili che possono essere aggiornate successivamente, con l'operator assign "="
//la forma per creare variabili è: let NomeDellaVaribile= valore dell variabile
let VariabileModificabile = "valore della variabile non costante (let)";
console.log(VariabileModificabile);      
//questa istruzione ci permette di stampare l'output del contenuto tra parentesi in un area chiamata console 
//(simile alla funzione print di python)
/*per poter visualizzare l'output abbiamo bisogno di collegarci a un file html (capiremo meglio queste cose in futuro)
ora vedi il file della stessa directory "console.html"*/

VariabileModificabile = "cambio valore della variabile (let)";   //per aggiornare una variabile creata con let si deve solo riscrivere il nome della variabile dando un nuovo valore (senza usare nessuna parola chiave)
console.log(VariabileModificabile);
//invece le variabili con la parola chiave const sono delle variabili costanti che non varieranno neanche successivamente.
//per scrivere queste variabili la forma è la stessa di let: const NOME_DELLA_VARIABILE= valore della variabile
const VARIBILE_COSTANTE = "valore della variabile costante (const)";
console.log(VARIBILE_COSTANTE);

//il nome delle variabili non possono contenere spazi tra di essi, ed è accettato solo il simbolo _ come parte del nome di una variabile
//il nome delle variabili possono contenere dei numeri, ma non possono stare come primo carattere del nome della variabile
const var1abile_a_cas0 = "boh";
//per rendere tutto più leggibile (è una convenzione), possiamo indicare con tutte lettere maiuscole i nomi delle variabili constanti (const), invece con lettere minuscole i nomi delle variabili non constanti (let)
/*per le variabili con nomi di più parole usiamo:
1) il trattino basso per le variabili costanti (es: NOME_DELLA_VARIABILE),
2) la prima lettera maiuscola di ogni parola per il nome delle variabili non constanti (es: NomeDellaVariabile)*/
//inoltre è meglio dare nomi descrittivi alle variabili, per aiutarci a capire cosa c'è dentro

//VALORI DELLE VARIABILI
//ci sono vari tipi (types) di valori delle variabili:
const STRINGA = "valore della stringa";        //1)le stringhe (strings), sono valori con qualsiasi carattere racchiuso tra le virgolette ""
const NUMERO = 25;                            //2)i numeri (numbers), che non hanno bisogno di nessun segno che li descriva
                                                //differentemente da altri linguaggi, lo JavaScript non differenzia vari tipi di numeri come i decimali, gli interi ecc...
                                                //possiamo scrivere i numeri anche in notazione scientifica
                                                let numero = 123e5;      //sarebbe 123*10^5= 12300000
                                                console.log(numero);
                                                let numero1 = 123e-5;    //sarebbe 123*10^-5= 0.00123
                                                console.log(numero1);
const BOOLEAN_TRUE = true;                   //3)i boolean, ossia i valori true e false
                                                console.log(BOOLEAN_TRUE);
//i valori true e false sono molto utili per verificare se un qualcosa è attivo o meno
// ad esempio:
console.log("allow update:");
console.log(true);
//altro esempio
console.log("dispositivo caricato:");
console.log(false);
//in certi casi di codice ci è utile sapere l'opposto del valore true o false
//per questo motivo si utilizza l'operatore "!" davanti al valore del boolean oppure davanti alla variabile con il valore boolean
const IS_MORNING=true;
console.log(!IS_MORNING);
//possiamo anche salvare i valori con l'operatore "!"
const IS_EVENING=!IS_MORNING;
console.log(IS_EVENING);

//un altro operatore è l'operatore di identità stretta ossia "==="
//infatti grazie a questo operatore possiamo controllare se 2 valori o variabili sono uguali
//se sono uguali, avremo come risultato true, altrimenti false
console.log(10 === 10);
console.log(10 === 11);
//altro operatore è l'operatore di non identità stretta, ossia "!==", che verifica se due valori o variabili sono diversi
console.log(10 !== 10);
console.log(10 !== 11);
//possiamo salvare il risultato di questi 2 operatori in una variabile
const RESULT= 1 !== 2;      const RESULT1= 1 === 2;
console.log(RESULT);
console.log(RESULT1);
//altri esempi
const UNO= "1";     const DUE= 1;
console.log(UNO === DUE);
console.log(UNO !== DUE);
//esempio
const BATTERY_LEVEL= 78;
const CHARGED = BATTERY_LEVEL === 100;
console.log(CHARGED);

console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)
//questi due operatori di identità e non identità stretta (=== e !==) hanno 2 corrispettivi operatori con alcune differenze ossia =! e ==
//definiamoli meglio:
//1) operatore di identità stretta ===, verifica non solo che i due valori siano uguali, ma anche che siano del medesimo tipo di dati
console.log('1' === 1);      //false, perché hanno lo stesso valore ma hanno tipi di dati diversi (stringa e numero)
console.log(1 === 1);        //true, perché hanno sia lo stesso valore che tipo di dati

//2) operatore di uguaglianza ==, verifica che i 2 valori siano uguali, senza considerare il tipo di dati
console.log("1" == 1);       //true, siccome hanno lo stesso valore (sticazzi del tipo di dati)
console.log(1 == 1);         //true, siccome hanno lo stesso valore (anche il tipo di variabile è lo stesso, ma non ce ne fotte)

//3) operatore di non identità stretta !==, verifica non solo che i due valori siano diversi, ma anche che siano del diverso tipo di dati. quindi per riportare true deve essere sia il valore che il tipo di dati diverso
console.log("1" !== 1);      //true, perché hanno diverso tipo di dati (stringa e numero), (il valore è lo stesso, ma non va bene per il tipo di dati)
console.log(1 !== 1);        //false, perché hanno lo stesso valore che tipo di variabile

//4) operatore di disuguaglianza !=, verifica che i 2 valori siano diversi, senza considerare il tipo di variabile
console.log("1" != 1);       //false, siccome hanno lo stesso valore (anche lo stesso tipo di variabile)
console.log(1 != 1);         //false, siccome hanno lo stesso valore (anche il tipo di variabile è lo stesso, ma non ce ne fotte)
console.log(1 != 2);         //true, siccome hanno diverso valore
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)


//possiamo anche comparare diversi tipi di valori, ma daranno sempre come risultato diverso
//infatti se compariamo il valore numerico 1 con la stringa "1", darà come risultato che sono diversi
console.log("1" === 1);        //darà come valore false perché sono sono 2 tipi di valori diversi
//se invece compariamo 2 valori con lo stesso tipo (non numerico), possiamo controllare se i valori sono gli stessi
console.log("apple" === "apple");
console.log("apple" === "orange");
console.log("apple" !== "orange");

//possiamo comparare i valori numerici anche con altri valori numeri tramite gli operatori minore (<) e maggiore (>)
console.log(2 < 3);
console.log(2 > 3);
console.log(2 > 2);   //questo valore sarà false perché non è compresa l'uguaglianza
//per comprendere l'uguaglianza dobbiamo usare gli operatori minore o uguale (<=) oppure maggiore o uguale (>=)
console.log(2 <= 3);
console.log(2 >= 3);
console.log(2 >= 2);   //in questo caso darà valore true
//facciamo un esempio di utilizzo
let record = 1233;
const score = 1212;
console.log("hai fatto un nuovo record?")
console.log(record < score);

//se dobbiamo comparare (in caso di maggiore o minore con o senza uguaglianza) 2 tipi di valori diversi, il risultato sarà true o false a seconda dei casi
console.log("eh" > "dgg");
//QUESTE COSE ANCORA DEVO STUDIARLE MA è UN DUBBIO CHE MI ERA VENUTO, DA STUDIARE


//utile in molti casi sono le espressioni, che si compongono con l'adding sign (+)
console.log(10 + 10);
//1) nel caso di un espressione tra 2 valori numerici, il risultato sarà il risultato dell'addizione tra i due numeri
const ADDIZIONE = 2 + 3.5;
console.log(ADDIZIONE);
//2) nel caso di un espressioni tra 2 stringhe, il risultato sarà l'accostamento delle 2 stringhe nell'ordine dell'espressione
console.log("io" + "sono" + "NICOLA");      //dato che di solito si mettono in un espressione di stringhe delle parole da unire, dobbiamo inserire gli spazi vuoti tra le parole
console.log("io " + "sono " + "NICOLA");
//3) nel caso di un espressione tra una stringa e un valore numerico, il valore numerico si converte automaticamente in stringa, quindi il risultato sarà l'accostamento tra i 2
console.log("100" + 12);
console.log(100 + 12);
    //così facendo possiamo far vedere nell'output informazioni numeriche con anche scritte a lettere
    const RISULTATO = 87;
    console.log("il tuo risultato è: " + RISULTATO);
//4) nel caso di un espressione tra una stringa e un valore boolean, tutto diventa una stringa e si accostano
let IsPassTest = false;
console.log("hai passato il test? " + IsPassTest);
//5) nel caso di un espressione tra 2 valori boolean, i valori boolean diventano valori numeri
//infatti i valori true e false hanno un corrispettivo valore numerico
//true=1 e false=0
console.log(true + true + false);   //sarebbe dunque, 1+1+0=2
//6) nel caso di un espressione tra un valore numerico e uno boolean, diventa tutto in valori numerici
console.log(7 + true);     //sarebbe 7 +1=8
console.log(true + false + 3);   //1+0+3=4

//invece il segno meno (-), per (*) e diviso (/) funzionano solo nei valori numerici e boolean, ed sono semplici sottrazioni, moltiplicazioni o divisioni.
console.log(true - 2);             //1 - 2 = -1
console.log(2*3 - 5/4 + false);    //per ordinare meglio le espressioni possiamo inserire le parentesi
//inoltre c'è anche l'operatore della potenza **
console.log(2**3);      // 2 alla 3 = 8
//se usiamo questi operatori matematici (escluso +) con valori di stringhe, o altri types che vedremo in futuro che non sono solo numeri e boolean, allora il risultato sarà NaN (not a number)
console.log("stringa" / true);
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)

//ci sono altri operatori detti logical operators, con cui possiamo comporre delle condizioni per decidere un risultato
//i logical operators decidono se due o più condizioni possono decidere un risultato
//l'and operator (&&) decide se le condizioni sono tutte vere
let DispositivoCollegato = true;
let batteria = 100;
let DispositivoCarico = batteria===100;
let ScollegoDispositivo = DispositivoCollegato && DispositivoCarico;       //entrambi i valori sono true, quindi il valore finale sarà true
console.log("il dispositivo può essere scollegato? " + ScollegoDispositivo);
//rivediamo le stesse linee di codice ma con un valore della batteria diverso (grazie alle variabili con let, il loro valore può cambiare)
DispositivoCollegato = true;
batteria = 78;
DispositivoCarico = batteria===100;     //questo risulta false
ScollegoDispositivo = DispositivoCollegato && DispositivoCarico;   //un valore è falso e l'altro è vero, dunque il risultato finale sarà false
console.log("il dispositivo può essere scollegato? " + ScollegoDispositivo);
//facciamo un altro esempio
let costi = 50;
let PrezzoDiVendita = 60;
const PROFITTI = PrezzoDiVendita - costi;
const RISULTATI = (costi < PrezzoDiVendita) && (PROFITTI > 0);
console.log("profitti fatti? "+ RISULTATI);
//ultimo esempio di and operator
let età = 19;
let ScuolaGuidaFatta = false;
const PATENTE = età >= 18 && ScuolaGuidaFatta;
console.log("puoi guidare: " + PATENTE);

//c'è poi l'or operator (||), nel quale basta che una sola condizione sia true per far in modo che tutto sia true
//ricordiamo poi che possiamo usare anche l'operator not (!), che davanti a una condizione la trasforma nel suo opposto
//esempio di ||:
let AttrazioneFisica = true;
let AttrazioneCaratteriale = false;
const AMORE = AttrazioneCaratteriale || AttrazioneFisica;     //un valore è true e l'altro è false => valore true
console.log("sei attratto da Gertrude? " + AMORE);
//esempio di !:
let doped = true;
let testosterone = true;
const NATURAL =! doped && testosterone;     //un valore è !true e l'altro è true => false
console.log("sei dopato? " + !NATURAL);     //!NATURAL è true

//PER CONDIZIONI COMPLICATE CON MOLTI OPERATORI POSSIAMO USARE LE PARENTESI TONDE
let MacchinaDisponibile = true;
let CostoMacchina = 2000;
let SoldiDisponibili = 3000;
let regalo = false;
const AFFARE_FATTO = (MacchinaDisponibile && (CostoMacchina <= SoldiDisponibili)) || regalo;
console.log("compriamo la macchina? " + AFFARE_FATTO);

//i programmi più sviluppati usano i booleans per prendere decisioni, se eseguire o meno una linea di codice
//infatti il codice si deve adattare a diverse situazioni usando l'if statement, che premette di fare ipotesi
//per creare un if statement dobbiamo usare la parola chiave if e subito dopo scrivere una condizione tra parentesi che darà il valore true o false
//se il valore è true, il codice dell'if statement verrà eseguito, se il valore è false, il codice verrà skippato dall'interprete
if (true) {        //il codice dell'if statement si inserisce dentro le parentesi graffe e viene detto code block
    console.log("Hello, World!");
}
if (false) {
    console.log("codice non eseguito");   //questo codice non viene eseguito perché la condizione dell'if statement è false
}
//per velocità di lettura possiamo scrivere tutto in una sola linea di codice, se il codice dell'if statement è di una sola istruzione, altrimenti mandiamo a capo per maggiore leggibilità
if (true) console.log("if statement a una sola istruzione"); //se mettiamo tutto in una sola riga le parentesi graffe non sono necessarie

//il code block può avere infinite linee di codice e istruzioni
//come condizioni possiamo usare anche le variabili che hanno come valore, i booleans
const condition = true;
if (condition) {
    console.log("siuuuuum");
}
//facciamo alcuni esempi di if statement
let risposta = "Picasso";
if (risposta === "Picasso") {
    console.log("la risposta " + risposta + " è giusta");
}

risposta = "Van Gogh"
if (risposta != "Picasso") {
    console.log("la risposta " + risposta + " è sbagliata")
}   //questo codice lo possiamo scrivere anche con il not operator
const RISPOSTA_GIUSTA = risposta === "Picasso"
if (!RISPOSTA_GIUSTA) {
    console.log("la risposta " + risposta + " è sbagliata");
}
//ricordiamo che possiamo usare qualsiasi operatore (< > >= <= || && !) per creare condizioni

//ora introduciamo un supporto per l'if statement: else (altrimenti)
//else fa in modo di eseguire un altro code block nel caso in cui la condizione dell'if statement sia false
età = 17;
if (età >= 18) {
    console.log("sei maggiorenne");
} else {                              //per una maggiore leggibilità lo poniamo subito dopo la chiusura del code block dell'if statement
    console.log("sei minorenne");
}
//altri esempi
MacchinaDisponibile = true;
CostoMacchina = 2000;
SoldiDisponibili = 3000;
regalo = false;
if ((MacchinaDisponibile && SoldiDisponibili >= CostoMacchina) || regalo) {
    console.log("compriamo la macchina");
} else {
    console.log("non compriamo la macchina");
}

//altro supporto per l'if statement è l'else if statement, che aggiunge una condizione opzionale all'if statement
let hour = 19;
if (hour <= 12 && hour > 6) {
    console.log("buongiorno");
} else if (hour <= 17 && hour > 12) {        //ulteriore caso
    console.log("buon pomeriggio");
} else if (hour <=21 && hour > 17) {
    console.log("buonasera");
} else if (hour > 24 || hour < 0) {
    console.log("errore: inserire un orario giusto");
} else {                     //se l'if statement e l'else if statement hanno la condizione false, allora viene eseguito l'else statement
    console.log("buonanotte");
}
//possiamo aggiungere infiniti numeri di else if in un if statement
/*possiamo scrivere il codice come vogliamo
infatti possiamo mettere gli else if subito dopo la chiusura del codice precedente
oppure possiamo scrivere gli else o else if alla riga successiva alla chiusura del code block
io preferisco mettere gli else statement alla riga successiva alla chiusura del code block
inoltre ricorda di non dover usare nessun ; dopo la chiusura del code block
*/

//altra funzionalità dello JavaScript sono i WHILE LOOP, che ti consentono di eseguire un pezzo di codice svariate volte
//se la condizione del while loop è vera, essa sarà eseguita, fino a quando quella condizione sarà falsa
//se la condizione è sempre vera, vuol dire che il codice verrà eseguito all'infinito. In questo caso abbiamo un infinite loop
/*
while (true) {               //in queste linee di codice c'è un infinite loop, che viene eseguito fin quando il programma non va in crash
    console.log(1)           //per provare togli i simboli di apertura e di chiusura dei commenti
}
*/
//per far si che la condizione non sia più true in un certo momento, dobbiamo fare in modo di modificarla nel code block del while loop
let condizioneWhileLoop = true;
while (condizioneWhileLoop) {
    console.log("while loop eseguito solo una volta");
    condizioneWhileLoop = false;
}
//per far eseguire un tot numero di volte un while loop dobbiamo modificare con precisione la condizione
//il modo per farlo è tramite a counter variable (ossia una variabile numerica)
let counter = 1;
while (counter <= 5) {
    console.log("questa è la " + counter + "° volta che viene eseguito questo pezzo di codice");
    counter = counter + 1;
}
//per modificare la counter variable possiamo usare dei nuovi operatori (+= -= ++ --)
//l'operatore += consente di modificare una variabile aggiungendo un certo valore alla variabile presa in considerazione
let variabile = 2;
console.log(variabile);
variabile += 3;       //aggiunge 3 al valore precedente, quindi 2 + 3 = 5
console.log(variabile);

//l'operatore -= fa la stessa cosa ma con la sottrazione
variabile = 10;
console.log(variabile);
variabile -= 2.2;       //sottrae 2.2 al valore precedente della variable, quindi 10 - 2.2 = 7.8
console.log(variabile);
//allo stesso modo sono gli operatori *= e /=
variabile = 5;
variabile *= 2;         //moltiplica 2 al valore precedente della variabile, quindi 5 * 2 = 10
console.log(variabile);
variabile /= 10;        //divide per 10 il valore precedente della variabile, quindi 10/10 = 1
console.log(variabile)   

//l'operatore ++ non ha bisogno di nessun numero dopo averlo scritto, infatti aggiunge 1 al valore della variabile
//è l'equivalente di scrivere += 1
variabile = 5;
console.log(variabile);
variabile++;        //aggiunge 1 al precedente valore, quindi 5 + 1 = 6
console.log(variabile);

//l'operatore -- sottrae 1 al valore della variabile.
//è l'equivalente di scrivere -= 1
variabile = 20;
console.log(variabile);
variabile--;       //sottrae 1 al precedente valore, quindi 20 - 1 = 19
console.log(variabile);


//ok, ora utilizziamo questi operatori nei while loop
//se vogliamo scrivere il conto da un numero a un altro possiamo usare codici del tipo:
variabile = 1;
while (variabile <= 10) {
    console.log(variabile);
    variabile++;       //questo sarà il conto da 1 a 10
}
//facciamo ad esempio la tabellina del 7
variabile = 0;
while (variabile <= 70) {
    console.log(variabile);
    variabile += 7;
}
//scriviamo con anche le moltiplicazioni prima
variabile = 0;
let moltiplicazione = 0;
while (variabile <= 70) {
    console.log("7 x " + moltiplicazione + " = " + variabile);
    moltiplicazione++;
    variabile += 7;
}

//un altro modo per controllare i loop più facilmente sono i for loop
//questi for loop ci permettono di eseguire un pezzo di codice un tot di volte, scrivendo nella condizione tutto quello che serve per capire il loop
//dobbiamo inserire la parola chiave for, poi nelle parentesi creare una variabile (con let), che sarà la nostra counter variable
//dopo la counter variabile inseriamo la condizione e poi l'istruzione secondo cui la counter variable viene modificata
for (let variabileCounter = 1; variabileCounter < 4; variabileCounter++) {
    console.log(variabileCounter + "° volta che viene eseguito il for loop");
}
//un comune counter variable che si usa nei for loop è i (usato per convenzione, ma non è obbligatorio), è sta ad indicare index
for (let i = 0; i <=5; i++) {
    console.log(i);
}
//la counter variabile esiste solo nel code block del for loop, per questo motivo può essere riutilizzato in un altro loop
for (let i = 0; i < 4; i++) {
    console.log("*******-----------");          //questo codice fa vedere la bandiera degli USA
}
for (let i = 0; i < 4; i++) {
    console.log("------------------");
}

//ora presentiamo 2 keyword che interagiscono in un while o for loop: continue e break:
    //In JavaScript, si può utilizzare la parola chiave continue all'interno del corpo di un ciclo for o while per interrompere
    //l'esecuzione dell'iterazione corrente e passare alla successiva. Ad esempio:
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
    //Questo ciclo stamperà i numeri da 0 a 4 e da 6 a 9, poiché l'iterazione in cui i è uguale a 5 viene saltata utilizzando continue.
    
    //In alternativa si può utilizzare la parola chiave break per interrompere l'esecuzione del ciclo intero.
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        console.log(i);
    }
    //Questo ciclo stamperà i numeri da 0 a 4, perché l'esecuzione del ciclo intero viene interrotta quando i è uguale a 5.

//ora come decidiamo se usare i for loop o i while loop?
    //In JavaScript, sia il ciclo for che il ciclo while sono utilizzati per eseguire un blocco di codice ripetutamente finché una determinata condizione è vera.
    //Tuttavia, ci sono alcune differenze importanti tra i due tipi di cicli:
        //Il ciclo for è progettato per essere utilizzato quando si conosce in anticipo il numero di volte che si desidera eseguire il ciclo.
        //Il ciclo for ha tre parti: un'inizializzazione, una condizione di continuazione e un'operazione di incremento/decremento.
        //Il ciclo viene eseguito finché la condizione è vera, e ogni volta che il ciclo viene eseguito, l'operazione di incremento/decremento viene eseguita.

        //Il ciclo while è progettato per essere utilizzato quando non si conosce in anticipo il numero di volte che si desidera eseguire il ciclo.
        //Il ciclo while ha solo una condizione di continuazione e viene eseguito finché la condizione è vera.
        //L'inizializzazione e l'operazione di incremento/decremento devono essere eseguiti manualmente all'interno del corpo del ciclo.

    //In generale, è consigliabile utilizzare un ciclo for quando si conosce il numero di iterazioni e un ciclo while quando
    //non si conosce il numero di iterazioni e si vuole continuare a eseguire il ciclo finché una condizione specifica è vera.
    //Inoltre, un while loop è più flessibile rispetto ad un for loop, perché consente di modificare la condizione di uscita
    //all'interno del corpo del ciclo, mentre un for loop ha la condizione di uscita fissata all'inizio del ciclo.

    //(UTILIZZA SEMPRE I FOR LOOP AL POSTO DEI WHILE LOOP: SONO PIù SEMPLICI E SONO (quasi) SEMPRE SOSTITUIBILI AI WHILE LOOP)

//ora vediamo cosa sono gli array
//nel caso di variabili simili tra loro, come giocatore1 giocatore2 giocatore3, possiamo raggruppare tutti questi valori in una sola variabile, detta array (insieme)
//gli array sono dunque delle liste di valori, contenute in una sola variabile
const ARRAY = ["valore1", "valore2", "valore3"];   //gli array sono racchiusi in parentesi quadre, e possono contenere infiniti valori e di vario tipo
console.log(ARRAY);
const ARRAY11 = [true, 2, false, "stringa", 2.4];
console.log(ARRAY11);
const OPZIONI = [false, true];
console.log(OPZIONI);
//i valori di array si chiamano elements
//possiamo creare anche un array vuoto, per poi modificarlo successivamente
const ARRAY_EMPTY = [];
console.log(ARRAY_EMPTY);
//per considerare un solo elemento dell'array possiamo considerare gli indici
//infatti ogni valore corrisponde ad un indice, che da sinistra verso destra sono: 0 1 2 3 4 ...
const INDICI = ["indice0", "indice1", "indice2", "indice3", "indice4", "indice5"];  //e così via
//per selezionare solo un elemento usiamo questa scrittura : nome_della_variabile[numero dell'indice]
console.log(INDICI[2]);
//possiamo anche salvare gli elementi di un array in altre variabili
const INDICE1 = INDICI[1];
console.log(INDICE1);
//gli array possono essere modificati successivamente (anche se sono stati creati con const)
//infatti usando gli indici possiamo aggiornare gli elementi di un array
const TEMPERATURE = [15, 17, 20, 26, 24, 20];
console.log(TEMPERATURE);
TEMPERATURE[3] = 25;
console.log(TEMPERATURE);

//inoltre ci sono anche altre istruzioni che possono modificare gli array
//le istruzioni per modificare gli array sono     .push()    .pop()            (ora le presentiamo e facciamo vedere come funziona, ma successivamente vediamo meglio)
//.push() si usa per aggiungere un elemento alla fine della lista
TEMPERATURE.push(15);
console.log(TEMPERATURE);
//.pop() si usa per rimuovere l'ultimo elemento della lista
TEMPERATURE.pop();     //dentro le parentesi non va messo nessun valore
console.log(TEMPERATURE);
//l'istruzione .pop() riporta un valore (ossia il valore dell'elemento che eliminiamo), che può essere salvato in una variabile
let ultimoGradoEliminato = TEMPERATURE.pop();
console.log(ultimoGradoEliminato);
console.log(TEMPERATURE);

//c'è inoltre l'istruzione .length (lunghezza), che consente di riportare un valore numerico, ossia quanti elementi ci sono in un array
const ARRAY_VUOTO = [];
console.log(ARRAY_VUOTO.length);
//possiamo usare quest'istruzione come condizione per un if statement o per un while loop o for loop
//esempio:
const tasks = ["lavare i piatti", "lavare le finestre", "preparare la tavola"];
if (tasks.length > 0) {
    console.log("Ugh, devo mettermi a fare le task!");
}
else {
    console.log("ho fatto tutto");
}

while (tasks.length > 0) {
    console.log("ho fatto una task");
    console.log("ho fatto la task " + tasks[tasks.length - 1])
    tasks.pop();
}

if (tasks.length > 0) {
    console.log("Ugh, devo mettermi a fare le task!");
}
else {
    console.log("ho fatto tutto");
}
//possiamo anche usare i for loop per una migliore comprensione del codice
if (tasks.length > 0) {
    console.log("Ugh, devo mettermi a fare le task!");
}
else {
    console.log("ho fatto tutto");
}
const LISTA_DA_FARE = ["compiti", "albero di natale", "programmare", "lavatrice"];
for (let i = 0; LISTA_DA_FARE.length > i; i++) {
    console.log("ho fatto la task numero " + (i + 1) + ", ossia: " + LISTA_DA_FARE[i]);
}
//altro esempio:
const LISTA_AMICI = ["Gabby", "Pio", "Peppe", "amica", "Delly", "Gionnie"];
for (let i = 0; LISTA_AMICI.length > i; i++) {
    console.log(LISTA_AMICI[i]);
}

//length è un istruzione che si può usare anche con altri tipi di variabili che non siano array
//con le stringhe determina la loro lunghezza, ossia da quanti caratteri è composta la stringa
const STRINGA_LUNGA = "Questi sono 24 caratteri";
console.log(STRINGA_LUNGA.length);   //24
//invece con i numeri e con i boolean il valore è undefined
const NUMERO_PT2 = 345;
console.log(NUMERO_PT2.length);     //undefined
const BOOLEAN_PT2 = false;
console.log(BOOLEAN_PT2.length);    //undefined


//ora vediamo cosa sono le funzioni
//nel caso dovessimo riutilizzare un pezzo di codice in futuro nel file stesso, possiamo racchiudere quel code block all'interno di una funzione invece che riscrivere tutto il code block
//per creare una funzione si utilizza questa sintassi
/*function nomeDellaFunzione (parametri) {           //i parametri vediamo dopo a che servono, per adesso omettiamoli
    code block
}       */
function funzioneACaso() {         //il nome della funzione di inserisce con il camel case (ossia le iniziali maiuscole)
    console.log("questa funzione serve a visualizzare <<si gruoss>>");
}
//per avviare una funzione basta richiamarla
funzioneACaso();

//ora vediamo cosa sono i parametri
//nel caso che dovessimo riutilizzare la funzione ma con dei valori diversi, possiamo usare i parametri
//essi sono variabili che vanno tra le parentesi della funzione, il cui valore è stabilito quando richiamiamo la funzione successivamente
function displayNome(nome) {
    console.log("il mio nome è " + nome);
}
displayNome("Nicola");
displayNome("Enza");
//i parametri possono esistere solo all'interno del code block della funzione
//infatti sono variabili che non hanno un valore definito
//console.log(nome)          //questa linea di codice darebbe errore
//siccome sono validi solo all'interno del code block a cui appartengono, possono essere riutilizzati in altri code block di funzioni come parametri
//i parametri possono essere di qualsiasi type e possono essere molteplici (separati da una ,)
function displayNomeCognome(nome, cognome, annoDiNascita) {
    console.log("Ciao, mi chiamo " + nome + " " + cognome + ", e sono nato nel " + annoDiNascita + ".");
}
const annoNicola = 2005;
displayNomeCognome("Nicola", "Belardo", annoNicola);
displayNomeCognome("Enza", "Belardo", 2004)

//RETURNING VALUES
//le funzioni possono riportare anche dei valori grazie alla parola chiave return
//infatti inserendo questo nel code block, con un valore vicino (che sia una variabile, un valore di una variabile, un espressone o una comparazione)
function getAffermazioneLampadinaAccesa(lampadina) {
    if (lampadina) {
        return "la lampadina è accesa";
    } else {
        return "la lampadina è spenta";
    } 
}
console.log(getAffermazioneLampadinaAccesa(true));
//altro esempio
function userAge(number) {
    const age = "Età dell'utente: " + number;
    return age;
}
let etàDellUtente = userAge(15);       //possiamo conservare il valore del return di una funzione in una variabile
console.log(etàDellUtente);

function moltiplicaPer10(numero) {
    return numero * 10;
}
const NUMERO23PER10 = moltiplicaPer10(23);
console.log(NUMERO23PER10);

function èPiùGrandeDi10(numero) {
    return "Il numero " + numero + " è più grande di 10: " + (numero > 10);
}
const NUMERO_A_CASO = 3;
console.log(èPiùGrandeDi10(3));

//nel caso in cui la funzione non ha la parola return, allora riporta il valore undefined
function FunzioneNoReturn(parametro) {
    const A_CASO = "A caso" + parametro;
}
console.log(FunzioneNoReturn(2));

//altri esempi di parametri multipli con return
function createID(nome, anno) {
    return nome + anno + "@hutmail.com";
}
const email = createID("Nicola", "2005");
console.log(email);

function mediaAritmetica(numero1, numero2) {
    return (numero1 + numero2) / 2;
}
console.log(mediaAritmetica(3, 8));

//ora vediamo come nominare le funzioni in base alla loro utilità (per convenzione)
//infatti il nome di una funzione deve essere descrittivo, facendo capire già cosa fa la funzione
//per convenzione si una il camel case (ossia la prima iniziale maiuscola), ma si può usare anche i trattino basso per separare le parole
//le funzioni i sono dunque azioni, e il loro nome dovrebbe contenere un verbo
//per convenzione si usa il verbo come prefisso in una funzione con parole multiple
function sumTotal(prezzo, tasse) {
    console.log(prezzo + tasse);
}
sumTotal(1000, 250);
//le funzioni che devono riportare un valore di solito hanno il verbo get
function getNome(nomeIntero) {
    return nomeIntero[0];    
}
const NOME_N1CKB = ["Nicola", "Belardo"];
console.log(getNome(NOME_N1CKB));
//le funzioni che riportano un valore boolean hanno il verbo is
function isCongelando(temperatura) {
    return temperatura < 0;
}
const CONGELANDO = isCongelando(-3);
console.log("si sta congelando? " + CONGELANDO);

//i nomi delle funzioni dovrebbero essere coerenti (consistent); se le funzioni compiono azioni simili, dovrebbero chiamarsi in modo simile, ad esempio con lo stesso prefisso
function calcolareSomma(a, b) {
    return a + b;
}
function calcolareDifferenza(a, b) {
    return a - b;
}
const SOMMA = calcolareSomma(30, 11);      const DIFFERENZA = calcolareDifferenza(30, 11);
console.log(SOMMA);
console.log(DIFFERENZA);

//ora vediamo un tipo di variabile molto particolare: gli OBJECTS
//gli object sono una variabile che raggruppano un insieme di valori, utile a non separare i valori in 2 variabili
//ad esempio se dobbiamo creare delle variabili che si riferisco tutte a una stessa cosa ma in categorie diverse, allora creiamo una variabile
//facciamo un esempio con me stesso
const NOME_NICOLA = "Nicola";
const COGNOME_NICOLA = "Belardo";
const COMPLEANNO_NICOLA = "6 gennaio";
const ANNO_DI_NASCITA_NICOLA = 2005;
const ETà_NICOLA = 18
//invece raggruppiamo tutte queste variabili in un object
const NICOLA = {
    nome: "Nicola",          //ogni valore dell'object deve essere separato con una virgola (per forza)
    cognome: "Belardo",
    compleanno: "6 gennaio",
    annoDiNascita: 2005,
    età: 17                 //l'ultimo valore può anche non avere la virgola
};
//all'interno dell'object ci sono le proprietà con i loro valori che si esprimono con la ,
console.log(NICOLA);      //questo è come viene visualizzato nella console

//similmente agli array, possiamo anche modificare le varie proprietà degli object (anche se creati con const)
//prima di tutto, per selezionare solo una proprietà di un object, possiamo usare questa scrittura
console.log(NICOLA.compleanno);
console.log(NICOLA.cognome);
//per aggiornare il valore di una proprietà si usa questa scrittura
console.log(NICOLA.età);
NICOLA.età = 18;
console.log(NICOLA.età);

//negli object possiamo inserire delle funzioni, dette methods
const CANE = {
    nome: "Lesia",
    abbaiare: function(parola) {        //la scrittura è leggermente diversa alla funzione tradizionale
        console.log(parola + ", bau bau");
        return parola + ", bau bau";
    },       //dopo la funzione, se non è l'ultimo elemento, va inserita sempre la virgola
    razza: "labrador"
};
//ora richiamiamo la funzione
CANE.abbaiare("ao");
//se il method non ha nessun parametro dobbiamo comunque mettere le parentesi
//se invece non viene definita il parametro, al posto del parametro viene presentato di default "undefined"
CANE.abbaiare();     //undefined, bau bau

//possiamo usare la keyword "this" in una funzione method, per indicare una proprietà dell'object
//la scrittura è this.proprietà
const GATTO = {
    nome: "Cioccolato",
    miagolare: function(parola) {
        console.log(this.nome + ", " + parola + ", miao miao")         //this.nome sarebbe dunque il valore della proprietà nome
    },      //la keyword this può essere usata per prendere il valore di una proprietà solo nella funzione method stessa
};
GATTO.miagolare("micio");

//una volta imparato cos'è un JS object, conosciamo cos'è JSON.
/*JSON (JavaScript Object Notation) è un formato di scambio dati leggero e basato su testo.
È utilizzato per rappresentare dati strutturati come oggetti e array, ed è comunemente utilizzato per la trasmissione di dati
tra un client e un server su Internet.*/
//per creare un oggetto JSON bisogna usare la singola virgoletta per racchiudere le parentesi graffe, che costituiranno l'oggetto
//inoltre le proprietà devono essere racchiuse tra le virgolette
const jsonVariable = '{"name": "Nicola", "surname": "Belardo", "age": 18, "dead": false}';
//i valori possono essere stringhe, numeri o boolean, ma non possono includere funzioni all'interno.

//per convertire un oggetto JS in un oggetto JSON usiamo il metodo JSON.stringify()
const CONCERTO = {
    cantante: "Ultimo",
    musica: "ua, è na pall"
}
console.log(CONCERTO);    //{cantante: "Ultimo", musica: "ua, è na pall"}
console.log(JSON.stringify(CONCERTO))   //{"cantante":"Ultimo","musica":"ua, è na pall"}
//invece per convertire un oggetto JSON in un oggetto JS usiamo il metodo JSON.parse()
console.log(JSON.parse(jsonVariable))   //{name: "Nicola", surname: "Belardo", age: 18, dead: false}


//ora sviluppiamo delle funzioni complicate con i vari statement che abbiamo studiato
//possiamo inserire nelle funzioni gli if statement (la maggior parte delle prossime cose saranno solo esempi)
function isMaggiorenne(età) {
    if (età >= 18) {
        console.log("è maggiorenne");
        return true;
    } else if (età < 18 && età >= 0) {
        console.log("è minorenne");
        return false;
    } else {
        console.log("età non disponibile");
        return "Errore";
    }
}
isMaggiorenne(13);     //è minorenne
isMaggiorenne(-2);     //età non disponibile
isMaggiorenne(34);     //è maggiorenne
//quando viene eseguita l'istruzione return, le istruzioni successive non vengono eseguite
function esempio() {
    console.log("questo viene eseguito");
    return "a caso"
    console.log("questo non viene eseguito");
    return "questo valore non verrà riportato";    //infatti ci può essere solo un istruzione return
}
esempio();
//facciamo altri esempi
function puòGuidare(patente, nome) {
    console.log("controllo patente");
    if (patente) console.log(nome + " può guidare");
    else console.log(nome + " non può guidare");
}
const NICK = {
    patente: true,
    nome: "Nicola",
    cognome: "Belardo"
}
puòGuidare(NICK.patente, NICK.nome);
//dato che l'istruzione return blocca l'esecuzione del code block, invece di else, possiamo inserire return dentro e dopo l'if statement
//in questo modo il codice è più snello e veloce
function PuòGuidare(patente, nome) {
    console.log("controllo patente");
    if (patente) {
        console.log(nome + " può guidare");
        return true       //se questo non viene eseguito, il resto del code block viene eseguito (come un else statement)
    };
    console.log(nome + " non può guidare");
}
PuòGuidare(true, "Carlo");
PuòGuidare(false, "Luca");

//possiamo inoltre inserire anche for loop nelle funzioni, inserendo anche i parametri nel loop conditions
function giorniMancantiDelMese(oggi) {
    console.log("i giorni mancanti sono:")
    for (let i = oggi; i < 31; i++) {
        console.log(i + 1)       //i + 1 perché contiamo dal giorno dopo
    }
}
giorniMancantiDelMese(23);
console.log("") //facciamo spazio nella console
//scriviamo questa funzione ma valido per tutto l'anno
function GiorniMancantiDelMese(mese, giornoDelMese, annoBisestile) {
    console.log("Al mese di " + mese + " mancano:")
    let totGiorniMancanti = 0;        //questa variabile va creato fuori dal blocco if e for perché poi perderebbe validità al di fuori del loro block code
    if (mese === "gennaio" || mese === "marzo" || mese === "maggio" || mese === "luglio" || mese === "agosto" || mese === "ottobre" || mese === "dicembre") {
        for (let i = giornoDelMese; i < 31; i++) {    //mesi con 31 giorni
            console.log(i + 1);
            totGiorniMancanti++;       //con questo teniamo il conto di quanti giorni mancano (vedi fine della funzione per capire)
        }
    }
    else if (mese === "novembre" || mese === "aprile" || mese === "giugno" || mese === "settembre") {
        for (let i = giornoDelMese; i < 30; i++) {     //mesi con 30 giorni
            console.log(i + 1);
            totGiorniMancanti++;
        }
    }
    else if (mese === "febbraio") {      //febbraio può cambiare a seconda che sia bisestile o meno
        if (annoBisestile) {
            for (let i = giornoDelMese; i < 29; i++) {
                console.log(i + 1);
                totGiorniMancanti++;
            }
        }
        else {
            for (let i = giornoDelMese; i < 28; i++) {
                console.log(i + 1);
                totGiorniMancanti++;
            }
        }
    }
    else {
        console.log("errore: mese inserito sbagliato");
        return "Errore";    //in questo modo se si sbaglia a scrivere il mese, il codice dopo non viene eseguito
    }
    console.log("Sarebbero dunque " + totGiorniMancanti + " giorni mancanti alla fine del mese di " + mese);
}
let oggi = {
    mese: "febbraio",     //cambia questi valori per vedere se funziona tutto bene
    giornoDelMese: 26,
    annoBisestile: false
}
GiorniMancantiDelMese(oggi.mese, oggi.giornoDelMese, oggi.annoBisestile);
//un altro esempio di uso di una funzione è la ricerca di un elemento in un array
function ricercaValoreInUnArray(array, ricerca) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === ricerca) {
            console.log("l'elemento " + ricerca + " esiste nell'array " + array);
            return true;
        }
    }
    console.log("l'elemento " + ricerca + " non esiste nell'array " + array)
    return false;
}
const ARRAY_DA_SOTTOPORRE_A_RICERCA = [10, 23, 34, 56, 75, "si", false];
const VALORE_DA_RICERCARE = 34;
ricercaValoreInUnArray(ARRAY_DA_SOTTOPORRE_A_RICERCA, VALORE_DA_RICERCARE);
//poi se vogliamo vedere se ci sono degli elementi comuni dello stesso indice possiamo usare questa funzione
function elementiConLoStessoIndice_ComuniTra2Array(array1, array2) {
    if (array1.length <= array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] === array2[i]) {
                console.log("elementi comuni con lo stesso indice " + i + ": " + array1[i]);
            };
        };
    }
    else if (array1.length > array2.length) {
        for (let i = 0; i < array2.length; i++) {
            if (array1[i] === array2[i]) {
                console.log("elementi comuni con lo stesso indice " + i + ": " + array1[i]);
            };
        };
    };
};
const ARRAY1 = [91, 66, 77, 84, 68];
const ARRAY2 = [81, 66, 78, 88, 68];
elementiConLoStessoIndice_ComuniTra2Array(ARRAY1, ARRAY2);

//ora vediamo un operatore che serve a indicare che tipo di variabile abbiamo davanti
//utilizzerò variabili già usate
//quest'operatore è typeof(), si inserisce la variabile nella parentesi
//prima di vedere questo, capiamo meglio i valori delle variabili
/*In JavaScript ci sono 5 differenti types di dati che possono contenere diversi valori:
string
number
boolean
object
function

poi ci sono 6 types di objects:
Object
Date
Array
String
Number
Boolean

e ci sono 2 dati che non contengono alcun valore:
null
undefined */

console.log(typeof(numero));    //questo operatore serve a verificare che tipo di valore ha una variabile

console.log(typeof("John"));                 // Reporta il valore "string"
console.log(typeof(3.14));                   // Reporta il valore "number"
console.log(typeof(NaN));                    // Reporta il valore "number"      questo valore vedremo cos'è STUDIA MEGLIO PER CAPIRE COS'è
console.log(typeof(false));                  // Reporta il valore "boolean"
console.log(typeof([1,2,3,4]));              // Reporta il valore "object"      sarebbe un array ma viene indicato come object
console.log(typeof({name:'John', age:34}));  // Reporta il valore "object"
console.log(typeof(new Date()));             // Reporta il valore "object"      questo vedremo cos'è STUDIA MEGLIO
console.log(typeof(function () {}));         // Reporta il valore "function"
console.log(typeof(myCar));                  // Reporta il valore "undefined"   questo non vuol dire nulla (non è nessuna keyword), quindi riporta indefinito
console.log(typeof(null));                   // Reporta il valore "object"
/*Osserva che:
The data type of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined
The data type of a variable that has not been assigned a value is also undefined
non puoi usare typeof per distinguere una variabile array da un object o da un data
*/

//FONTE E SITO SU CUI APPROFONDIRE: https://www.w3schools.com/JS//js_typeof.asp
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)

//ora vediamo un tipo di for loop particolari, detti for of loop
/*In JavaScript, il for...of loop è un modo per iterare sugli elementi di un oggetto iterabile, come un array, stringa o oggetto Set. (poi vedremo cos'è STUDIA MEGLIO)
Ecco un esempio di utilizzo del for...of loop con un array:
*/
/*Iterare significa eseguire ripetutamente una determinata azione o processo.
Nel contesto della programmazione informatica, iterare può significare eseguire un ciclo di istruzioni diverse volte,
utilizzando una struttura di controllo come un ciclo "for" o un ciclo "while".
Ad esempio, si può iterare attraverso tutti gli elementi di un array eseguendo un ciclo "for" che esegue una determinata azione per ogni elemento dell'array.*/
const COLORS = ['red', 'green', 'blue'];
for (const color of COLORS) {     //Il codice sopra stamperà ogni elemento dell'array colors sulla console, uno per linea.
  console.log(color);
}
//utilizziamo color (può essere usato qualsiasi parola) in questo caso come variabile che prende il valore di ogni elemento dell'array. Per convenzione usiamo sempre la variabile element
//si pùò usare molteplici volte perché ha valenza solo nel code block del suo for...of loop
let indice = 0     //per scrivere anche l'indice degli elementi di un array, creiamo questa variabile
for (const element of COLORS) {    //usiamo sempre element per convenzione
    console.log("il valore del " + (indice + 1) + "° elemento è: " + element)
    indice++
}
/*Il for...of loop è stato introdotto in JavaScript con la versione ECMAScript 6 (ES6).
Può essere utilizzato sia con gli array che con altri oggetti iterabili come le stringhe, gli oggetti Set e le classi che implementano l'interfaccia iterabile.
non può essere usato con gli object, infatti facciamo un esempio
*/
const OBJECT_ITERABILE = {
    valore1: 2,
    valore2: 4,
    valore3: 6,
    valore4: 78,
    valore5: 56
}
/*for (const valore of OBJECT_ITERABILE) {      //togli i segni commento per far eseguire il codice, che darà errore
    console.log(valore);                        //infatti un object non può essere usato come condizione di un for...of loop
}
*/


//Un altro tipo di for loop è il for..in loop
/*Il for...in loop in JavaScript è un modo per iterare sugli elementi di un oggetto, come ad esempio un array o un oggetto.
A differenza del for...of loop, che itera sugli elementi di un oggetto iterabile, il for...in loop itera sui nomi delle proprietà di un oggetto.
*/

const COLORS1_ITALIANI = ['rosso', 'verde', 'blu'];

for (const index in COLORS1_ITALIANI) {
  console.log(index);     //questi sono gli indici degli elementi
}
//ora invece creiamo un code block 
for (const index in COLORS1_ITALIANI) {
  console.log("Il " + index + "° elemento è " + COLORS1_ITALIANI[index] + ".");
}
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)
//Siccome il valore della counter variabile è in stringa, quindi con le espressioni si accostano gli elementi
//facciamo questo cambio per aumentare il numero dell'indice
for (const index in COLORS1_ITALIANI) {
    console.log("Il " + (index + 1) + "° elemento è " + COLORS1_ITALIANI[index] + ".");
}
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)
//per poter aumentare il valore dell'index dobbiamo avere un counter variabile con let
//e poi aumentiamo il valore con l'operator ++
for (let index in COLORS1_ITALIANI) {
    index++
    console.log("Il " + index + "° elemento è " + COLORS1_ITALIANI[index] + ".");
}
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)
//però non viene visualizzato bene perché anche l'indice nell'ultima esecuzione viene cambiato, andando oltre l'indice dell'array
//per questo motivo per scrivere una frase del genere dobbiamo usare i type conversion che vedremo in futuro

//i for...in loop possono essere usati anche con gli object
//al posto dell'indice degli array, viene riportato il nome della proprietà
const OBJECT_ITERABLE = {
    valore1: 2,
    valore2: 4,
    valore3: 6,
    valore4: 78,
    valore5: 56
}
for (const proprietà in OBJECT_ITERABLE) {
    console.log(proprietà);
}
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)
//se vogliamo scrivere un object stampandolo sulla console, senza le {}
  
for (const proprietà in OBJECT_ITERABLE) {
    console.log(proprietà + ": " + OBJECT_ITERABLE[proprietà]);
}
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)

//usiamo anche una frase per meglio capirci
for (const proprietà in OBJECT_ITERABLE) {     //la variabile counter è sempre una stringa ma viene trasformata automaticamente in numero con la scrittura 
    console.log("il valore della proprietà " + proprietà + " è " + OBJECT_ITERABLE[proprietà]);
}
//la parte OBJECT_ITERABLE[proprietà] di solito negli object si usa il punto, quindi sarebbe questa scrittura: OBJECT_ITERABLE.proprietà
//in questo caso non si usa questa scrittura perché proprietà non è il nome della proprietà ma è una variabile.
//Quindi per considerare il valore della variabile proprietà (ossia il nome delle proprietà), si usano le []

//approfondisci gli altri tipi di for...of loop qui https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of?retiredLocale=it


//ora vediamo un nuovo operatore, ossia l'operatore di modulo "%", utilizzato per calcolare il resto di una divisione tra due numeri
console.log(10 % 3); // 10 / 3 = 3 con resto di 1 (viene visualizzato il resto)=> 1
console.log(11 % 3); // 11 / 3 = 3 con resto di 2 => 2
console.log(12 % 3); // 12 / 3 = 4 con resto di 0 => 0
/*L'operatore di modulo è particolarmente utile per verificare se un numero è divisibile per un altro.
Ad esempio, se il resto di una divisione tra due numeri è zero, significa che il primo numero è divisibile per il secondo.
Ecco un esempio di come utilizzare l'operatore di modulo per verificare se un numero è pari o dispari:
*/
const number = 5;
if (number % 2 === 0) {     //praticamente vede se è divisibile per 2
  console.log(number + " è pari");
} else {
  console.log(number + " è dispari");
}
//scriviamolo in una funzione per poterlo riutilizzare in futuro
function getPariODispari(number) {
    if (number % 2 === 0) {
        return number + " è pari";
    }
    return number + " è dispari";
}
console.log(getPariODispari(6) + ", cosa scritta tramite la funzione getPariODispari")
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)

//inoltre c'è l'operatore di modulo assegnamento (simile a += e -=) che assegna a una variabile (creata con let) il resto della divisione con un numero
let number2 = 10;
number2 %= 3;   //sarebbe 10 / 3 = 3 con resto di 1 => 1 (la variabile prende il valore del resto)
console.log(number2);   //1
//è l'equivalente di usare "number = number % 3;"

/*Inoltre, l'operatore di modulo assegnamento %= è spesso utilizzato insieme ad altri operatori,
come ad esempio il += operator, per incrementare o decrementare un valore di una certa quantità in modo ciclico.
Ad esempio:
*/
let counter1 = 0;
counter1 += 1;       //counter = 1
counter1 %= 10;      //counter = 1 / 10 = 0 con resto 1 => 1+
console.log(counter1);      
/*In questo esempio, il valore di counter viene incrementato di 1 ad ogni iterazione di un ciclo,
ma viene modificato in modo tale da rimanere compreso tra 0 e 9.
*/
//scriviamolo in una funzione
function displayNumeroTra0e9(numero) {
    numero %= 10;
    console.log(numero);
}
displayNumeroTra0e9(66);          //quindi il numero che viene stampato è l'ultima cifra dell'argomento della funzione  
displayNumeroTra0e9(8853254)



//ora capiamo meglio come funzionano le teoria delle variabili
//lo JavaScript è un linguaggio in continua evoluzione
//nel 2015 è stato revisionato e sono state introdotte molte novità
//questo aggiornamento è detto ECMAScript 2015 (con la sigla ES6)
//nell'ES6 sono state aggiunte i metodi per creare le variabile che già conosciamo, ossia let e const, ma in realtà il metodo per fare variabile era var (variable)
//var infatti crea un altro tipo di variabile
//l'ES6 aveva creato let e const per superare le limitazioni di var
var variabileVar = "valore variabile con var";
console.log(variabileVar);
//Per convenzione nel codice si preferisce usare sempre let e const, ma pui anche usare var e sbattertene il cazzo
//le differenze tra var, let e const sono:
//la DICHIARAZIONE e l'INIZIALIZZAZIONE
//la dichiarazione è la creazione di una variabile con la keyword, invece l'inizializzazione è il primo assegnamento del suo valore iniziale
//  una variabile con let può essere dichiarata una sola volta. Quando viene dichiarata non deve essere per forza anche inizializzata
    //possiamo scrivere senza avere errori il codice:
      let variabileSoloDichiarata;
    //let variabileSoloDichiarata;     //questa linea di codice darebbe errore perché può essere dichiarata solo una volta
      console.log(variabileSoloDichiarata);      //il valore è undefined perché ancora deve essere inizializzata
      variabileSoloDichiarata = "valore inizializzato dopo la dichiarazione";   //per essere usata deve essere inizializzata, anche in seguito alla dichiarazione
    //può essere aggiornata in seguito tramite l'assignment operator
      variabileSoloDichiarata = "nuovo valore";

//una variabile con const può essere dichiarata e inizializzata una sola volta (come let), e deve essere anche inizializzata insieme alla dichiarazione
    //const VARIABILE_SOLO_DICHIARATA;        //questa linea di codice darebbe errore, perché deve essere anche inizializzata
      const VARIABILE_SIA_DICHIARATA_CHE_INIZIALIZZATA = "valore";
    //const VARIABILE_SIA_DICHIARATA_CHE_INIZIALIZZATA = "valore"     //questa linea di codice darebbe errore perché non può essere dichiarata più volte
    //È importante notare che, anche se il valore di una costante non può essere modificato, il contenuto di un oggetto o di un array costanti può essere modificato. Ad esempio:
      const arr = [1, 2, 3];
      arr.push(4); // arr ora è [1, 2, 3, 4]
      //In questo esempio, anche se arr è stata dichiarata con const, il contenuto dell'array può essere modificato utilizzando metodi come push.
      //Tuttavia, non è possibile assegnare un nuovo array o oggetto a arr, poiché ciò implicherebbe la modifica della costante stessa.

//  una variabile con var può essere dichiarata e inizializzata più volte e anche separatamente senza avere errori.
      var variabileVarSoloDichiarata;
      console.log(variabileVarSoloDichiarata)       //undefined perché ancora deve essere inizializzata
      variabileVarSoloDichiarata = 69;
      console.log(variabileVarSoloDichiarata);      //69
      var variabileVarSoloDichiarata = 70;          //può essere dichiarata nuovamente senza errori
      console.log(variabileVarSoloDichiarata);      //70, ossia il nuovo valore della dichiarazione
    //Tuttavia, è consigliabile evitare di dichiarare più volte la stessa variabile,
    //poiché può creare confusione e rendere il codice più difficile da leggere e mantenere.


//LO SCOPE:
//Una traduzione di scope potrebbe essere quella di "contesto di esecuzione" all'interno del quale una particolare funzione JavaScript viene eseguita.
//quindi serve a capire dove le variabili sono disponibili
//una variabile può avere uno scope globale, locale (detto anche di funzione) o di blocco
//in inglese global, local (or function scope) or block scope

//local or function scope si riferisce a una parte del codice di una funzione
function funzionePerLocalScope() {
    const VARIABILE_CON_LOCAL_SCOPE = "oh yes";     //può essere usata solo all'interno di questa funzione
    console.log(VARIABILE_CON_LOCAL_SCOPE);
    var variabile1 = 23
    let variabile1Let = variabile1 + 1
}

//console.log(VARIABILE_CON_LOCAL_SCOPE)       //questa linea di codice dà errore
//console.log(variabile1);                    //questa linea di codice dà errore
//console.log(variabile1Let);                 //questa linea di codice dà errore
//con qualsiasi tipo di variabile proviamo (let, const e var), la sua validità resta sempre solo nella funzione
//se vogliamo far passare un valore dalla funzione, dobbiamo per forza usare la keyword return

//il global scope si riferisce allo spazio al di fuori della funzione
let cittàDaVisitare = ["Napoli", "Roma", "Tokyo", "Parigi"]      //questa variabile è accessibile in tutto il codice successivo alla sua inizializzazione (anche in una funzione)
function displayViaggi() {
    console.log("Andiamo a " + cittàDaVisitare[1]);
}
displayViaggi();

//il block scope l'ambito di un blocco di codice, ovvero l'area del codice all'interno di un set di parentesi graffe { }.
//In altre parole, le variabili dichiarate all'interno di un blocco di codice sono visibili solo all'interno di quel blocco e non possono essere utilizzate al di fuori del blocco stesso.
//Le parole chiavi let e const sono utilizzate per dichiarare variabili con block scope,
//mentre la parola chiave var è utilizzata per dichiarare variabili con ambito di funzione, ovvero visibili all'interno di tutta la funzione in cui vengono dichiarate.
if (true) {
    let x = 10;
    var y = 20;
    const z = 30;
}
//console.log(x);        // Errore: "x" non è definito
console.log(y);
//console.log(z);        // Errore: "z" non è definito
//il block scope è presente anche in variabili counter, che sono visibili solo all'interno del block code a cui appartengono
for (let index = 1; index <= 3; index++) {
    console.log(index);
}
//console.log(index);      //Errore: index is not defined

//ora vediamo i tipi di errori che si possono avere durante l'esecuzione:
//errori di sintassi (SyntaxError): questi errori si verificano quando il codice non è scritto in modo corretto e il motore JavaScript non riesce a interpretarlo.
    //Ad esempio, può esserci un errore di sintassi se si dimentica di chiudere una parentesi o se si utilizza una parola chiave in modo non corretto.
    /*if (true {                          //la mancanza della parentesi di chiusura provoca un errore
        console.log("seh");
    }*/
//Errori di tipo (TypeError): questi errori si verificano quando si tenta di eseguire un'operazione non valida su un tipo di dati.
    //Ad esempio, può esserci un errore di tipo se si tenta di aggiornare il valore di una proprietà all'indefinito.
    var foo;    //foo ha valore di indefinito
    //foo.value = 0;         //questa linea di codice da TypeError
    //quindi sono errori con la gestione dei types
//Errori di referenziamento (ReferenceError): questi errori si verificano quando si fa riferimento a una variabile o a una proprietà che non esiste.
    //Ad esempio, può esserci un errore di referenziamento se si fa riferimento a una variabile che non è stata dichiarata o che in quella parte di codice non è attendibile.
    if (true) {
        let oggetto = "a"
    }
    //console.log(oggetto)    //ReferenceError: oggetto is not defined
    //questo errore dunque fa capire che abbiamo sbagliato qualcosa con lo scope
//Errori di range (RangeError): questi errori si verificano quando si tenta di assegnare un valore fuori dal range consentito a una variabile o a una proprietà.
    //si potrebbe verificare in alcuni browser si e in altri no con lo stesso codice, perché alcuni browser supportano dei valori e altri no
//Errori di runtime (Runtime Errors): questi errori si verificano durante l'esecuzione del programma e possono essere causati da diverse ragioni, come ad esempio la mancanza di memoria o un'operazione non valida su un oggetto.
    //non sono dovuti a errori nel codice, ma al crush dell'app, per la pesantezza del codice

//gli errori più comuni sono i primi 3: SyntaxError, TypeError, ReferenceError

//ora vediamo cosa sono gli arrow function
//Gli arrow function (funzioni a freccia) sono una sintassi alternativa per la definizione delle funzioni in JavaScript.
//Sono stati introdotti in JavaScript con l'aggiunta di ECMAScript 6 (ES6)
// Funzione tradizionale
function double(x) {
    return x * 2;
}
  
// Arrow function
const double_arrow = (x) => x * 2;
//le arrow function vengono dichiarate come variabili (per convenzione si usa const perché non si dovrebbe modificare la funzione, ma si può usare anche let, oppure var se si vuole un global scope anche all'interno di un block code)
//le arrow function non hanno bisogno della keyword function, e manco il nome della funzione (dato che il nome è la variabile stessa)
//dunque la prima cosa che scriviamo sono le parentesi con gli eventuali parametri, si usa l'arrow operator (=>) e infine il corpo della funzione
//il simbolo { } per racchiudere il corpo della funzione può essere anche omesso nel caso di una sola istruzione
//ultima cosa che possiamo omettere è anche la keyword return, nel caso di una sola istruzione che è appunto return, infatti il valore di quell'istruzione sarà riportato all'arrow function
//Ad esempio, prima abbiamo mostrato la sintassi di una funzione tradizionale e di una arrow function che restituisce il doppio di un numero
const ARROW_FUNCTION = (parametro) => "valore che verrà riportato, con il parametro: " + parametro;
console.log(ARROW_FUNCTION(2));
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)
//ora vediamo una funzione arrow multi-linea e multi-istruzione
const GET_DISPLAY_ARROW_FUNCTION = (parametro) => {     //La nomenclatura degli arrow function per convenzione deve essere descrittiva e simile alla funzione tradizionale
    console.log("questa è la prima istruzione dell'arrow function");
    console.log("questo è il parametro: " + parametro);
    return "le arrow function si usano principalmente come alternativa di funzione molto corte, ma nel caso di funzioni più complesse, si usa la funzione tradizionale"; //nel caso di più istruzioni dobbiamo inserire anche la keyword return
}
GET_DISPLAY_ARROW_FUNCTION("Osanna");  //si richiama l'arrow function in questo modo per eseguire il codice
console.log(GET_DISPLAY_ARROW_FUNCTION("Osanna"));     //così facendo vediamo solo il valore return
//inoltre ci sono alcune precisazioni che possiamo fare con i parametri
//si possono omettere le parentesi nel caso di un solo parametro
const MOLTIPLICA_PER_2 = numero => numero * 2;
//se ci sono più parametri ci devono essere le parentesi
//const MOLTIPLICA_NUMERO = numero, numero1 => numero * numero1;       //questo dà SyntaxError
const MOLTIPLICA_NUMERI = (numero1, numero2) => numero1 * numero2;       //con le parentesi non dà errore
console.log(MOLTIPLICA_NUMERI(7, 3));     //21
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)

//inoltre se non passiamo un argomento all'arrow function, il parametro avrà di default il valore di undefined
const GET_PREZZO = (totale) => {
    const TASSE = 0.16;     //16% di tasse
    return totale + (TASSE * totale);
}
console.log(GET_PREZZO());     //non abbiamo passato un argomento per il parametro, quindi prende il suo valore di default, ossia undefined
//il valore riportato è undefined + (0.16 * undefined) = NaN, ossia Not a Number
console.log(GET_PREZZO(30));    //in questo caso ci fa vedere il valore giusto
//per cambiare il valore di default dei parametri possiamo dichiarali nelle parentesi (obbligatorie anche con un solo parametro dichiarato)
//i parametri prendono il nome di additional default parameter
const GET_PREZZO1 = (totale = 200) => {       //valore di default del parametro = 200
    const sconto = 0.16;    //16% di sconto
    return totale - (sconto * totale);     //200 - (200 * 0.16) = 200 - 32 = 168
}
console.log(GET_PREZZO1());    //non passiamo alcun valore in modo da usare il valore di default
//possiamo anche inserire molteplici additional default parameter, separati dalla virgola
const GET_PREZZO2 = (totale = 200, sconto = 0.03) => totale - (sconto * totale);
console.log(GET_PREZZO2());     //200 - (0.03 * 200) = 200 - 6 = 194
//DUNQUE QUESTI ARROW FUNCTION RENDONO IL CODICE PIù COMPATTO E CONCISO, E CI SARà ESSENZIALE IN UN CODICE PIù COMPLESSO COME REACT (CHE VEDREMO MOLTO DOPO)

//Altra novità dell'ES6 sono i template literals, che possono sostituire i template classici (ossia le espressioni tra stringhe e altri types che si accostano)
/*I "template literals" sono una caratteristica di JavaScript che permette di creare stringhe facilmente leggibili, utilizzando una sintassi simile a quella dei template.
Sono indicati dai caratteri backtick (`) e possono contenere espressioni interne, racchiuse tra dollaro e parentesi graffe (${ }`).
i caratteri backtick (ossia una specie di virgolette però singole) non sono presenti nella tastiera e per scriverle usiamo o i tasti di scelta rapida Unicode
i tasti per i backtick sono ALT + 96 = `
*/

//Ecco un esempio di utilizzo di un template literal:
const MARIO = {
    nome: "Mario",      //template classico
    età: 30
}
console.log(`Il mio nome è ${MARIO.nome} e ho ${MARIO.età} anni.`);     // Output: "Il mio nome è Mario e ho 30 anni."
let numero01 = 4;       let numero02 = 45;
console.log(`${numero01 * numero02} è il risultato della moltiplicazione`);
//I template literals possono anche essere utilizzati per creare stringhe multilinea, semplicemente inserendo a capo all'interno della stringa tra i caratteri backtick:
const STRINGA_MULTILINEA = `Questa è una stringa;
multilinea.`;
//una particolarità dei template literal è nella chiamata di una funzione
//infatti se dobbiamo chiamare una funzione e scrivere l'argomento con le template literal, possiamo anche omettere le parentesi
const DISPLAY_WORD = parola => console.log(`la parola stampata è ${parola}`);
DISPLAY_WORD(`fraaaatm`);      //possiamo scrivere l'argomento tra parentesi
DISPLAY_WORD`fraaaatm`;        //possiamo anche omettere le parentesi
/*I template literals sono molto utili per creare stringhe facilmente leggibili e mantenibili, specialmente quando si hanno molte espressioni da inserire all'interno della stringa.
Inoltre, sono anche più performante delle stringhe concatenate, poiché vengono compilate direttamente in codice JavaScript durante il processo di build.
*/
console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)



//ora vediamo alcuni methods utili in molte situazioni STUDIA MEGLIO
//1)toUpperCase(): Il metodo toUpperCase() in JavaScript consente di convertire una stringa in maiuscolo.
    //la sintassi è: string.toUpperCase()
    //non ci sono parametri
    let string = 'hello world';
    let uppercase = string.toUpperCase();  // Converte la stringa in maiuscolo
    console.log(uppercase);        //'HELLO WORLD'
    //questo metodo riporta il valore in maiuscolo, ma non converte la stringa originale
//2)toLowerCase(): il metodo toLowerCase() in JavaScript consente di convertire una stringa in minuscolo
    //la sintassi è: string.toLowerCase()
    //non ci sono parametri
    string = 'HELLO WORLD';
    let lowercase = string.toLowerCase();  // Converte la stringa in maiuscolo
    console.log(lowercase);      //'hello world'
    //questo metodo riporta il valore in maiuscolo, ma non converte la stringa originale
//3)localCompare(): La funzione localeCompare() in JavaScript consente di confrontare due stringhe in modo sensibile alla lingua utilizzando il confronto di linguaggio specifico del sistema (solitamente, ordine alfabetico).
    //Restituisce un numero intero che indica se la stringa chiamante viene prima, dopo o è uguale alla stringa passata come argomento.
    //la sintassi è: string.localeCompare(compareString)
    let a = 'a';
    let b = 'b';
    
    let risultato = a.localeCompare(b);  // Confronta a con b
    console.log(risultato);          // result è -1, poiché a viene prima di b nell'ordine di linguaggio
    
    let c = 'c';
    
    risultato = b.localeCompare(c);  // Confronta b con c
    console.log(risultato);          // result è -1, poiché b viene prima di c nell'ordine di linguaggio
    
    risultato = c.localeCompare(b);  // Confronta c con b
    console.log(risultato);          // result è 1, poiché c viene dopo di b nell'ordine di linguaggio
    
    risultato = a.localeCompare(a);  // Confronta a con a
    console.log(risultato);          // result è 0, poiché a è uguale a a
    //quindi se si confronta:
        //una lettera che sta più avanti nell'alfabeto, con una lettera che sta più indietro => -1

        //una lettera che sta più indietro nell'alfabeto, con una lettera che sta più avanti => 1

        //2 stesse lettere => 0

    //se si confrontano dei valori non in stringhe si riceve errore
    a = 3;    b = 4;
    //console.log(a.localCompare(b));     //TypeError: a.localeCompare is not a function
    
    //la funzione localeCompare può avere risultati diversi a seconda della lingua (italiano, inglese, tedesco...) che si utilizza
    //per questo motivo si può usare un ulteriore argomento, ossia local, che specifica la lingua 
    console.log("ä".localeCompare("z", "de")); // -1: in tedesco, ä viene prima di z
    console.log("ä".localeCompare("z", "sv")); // 1: in svedese, ä viene dopo di z

    //La funzione localeCompare() accetta un opzionale argomento options (il terzo argomento), che può essere utilizzato per specificare il confronto di linguaggio e le opzioni di confronto.
    //Ad esempio, è possibile utilizzare l'opzione sensitivity per specificare se il confronto deve essere sensibile a maiuscole/minuscole o accenti:

    //l'argomento options si inserisce come un oggetto, e ha varie proprietà
    risultato = "a".localeCompare("A", undefined, { sensitivity: 'base' });  // Confronto senza tenere conto delle maiuscole/minuscole
    console.log(risultato);// result è 0, poiché "A" è uguale a "a" nell'ordine di linguaggio

    risultato = "a".localeCompare("à", undefined, { sensitivity: 'accent' });  // Confronto sensibile agli accenti
    console.log(risultato);// result è -1, poiché a viene prima di à nell'ordine di linguaggio

    risultato = "a".localeCompare("A", undefined, { sensitivity: 'case' });  // Confronto sensibile alle maiuscole/minuscole
    console.log(risultato);// result è -1, poiché "A" viene prima di "a" nell'ordine di linguaggio

    risultato = "a,A".localeCompare("aA", undefined, { ignorePunctuation: true }); //confronto insensibile alla punteggiatura
    console.log(risultato);      // result è 0, poiché string1 è uguale a string2 nell'ordine di linguaggio

    // di default, "2" > "10"
    console.log("2".localeCompare("10")); // 1

    // numeric using options:
    console.log("2".localeCompare("10", undefined, { numeric: true })); // -1
    //per vedere tutte le proprietà di options vedi l'argomento options del methods Intl.Collator() constructor: 
    //vedi qui https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator 

    console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)


//4)VEDI ALTRI METHODS COMUNI TRA QUESTI     STUDIA MEGLIO QUESTI METHODS
    //String: charAt(), concat(), indexOf(), lastIndexOf(), slice(), split(), substr(), substring(), toLowerCase(), toUpperCase()
    //Number: toFixed(), toPrecision(), toString(), valueOf()
    //Object: hasOwnProperty(), isPrototypeOf(), propertyIsEnumerable(), toString(), valueOf()
    //Date: getDate(), getDay(), getFullYear(), getMonth(), getTime(), getTimezoneOffset(), setDate(), setFullYear(), setMonth(), setTime()
    //Questi sono solo alcuni esempi dei molti metodi disponibili in JavaScript.
    //Per una lista completa dei metodi disponibili per ogni tipo di dato, si consiglia di consultare la documentazione ufficiale di JavaScript o di fare riferimento a una guida o a un manuale di riferimento.

//ora vediamo come manipolare gli array. Esistono diverse funzioni built-in che possono essere utilizzate per manipolare gli array in diversi modi.
//Ecco alcune deI methods più comunemente utilizzati per gli array in JavaScript:

//1)push(): Aggiunge uno o più elementi alla fine di un array e restituisce la nuova lunghezza dell'array.
    let array = [1, 2, 3];
    array.push(4);        //Aggiunge 4 alla fine dell'array:        diventa [1, 2, 3, 4]
    let nuovaLunghezzaArray = array.push(5, 6);     //Aggiunge 5 e 6 alla fine dell'array:    diventa [1, 2, 3, 4, 5, 6]
    console.log(nuovaLunghezzaArray);       //6 => il valore è il length dell'array modificato (QUESTA PARTICOLARITà NON C'è NEGLI APPUNTI PRECEDENTI)

//2)pop(): Rimuove l'ultimo elemento di un array e restituisce il valore rimosso.
    let array1 = [1, 2, 3];

    let last = array1.pop(3);  // Rimuove l'ultimo elemento dell'array (3) e lo assegna a last
    console.log(array1);    //[1, 2]
    console.log(last);      //3
    //se l'array è vuoto, riporta il valore undefined
    let arrayEmpty = [];
    last = arrayEmpty.pop();
    console.log(last);     //undefined

//3)shift(): Rimuove il primo elemento di un array e restituisce il valore rimosso. (il contrario di pop())
    let array2 = [1, 2, 3];
    let first = array2.shift();  // Rimuove il primo elemento dell'array (1) e lo assegna a first
    console.log(array2);       //[2, 3]
    console.log(first);        //1
    //se l'array è vuoto, riporta il valore undefined
    arrayEmpty = [];
    last = arrayEmpty.shift();
    console.log(last);     //undefined

//4)unshift(): Aggiunge uno o più elementi all'inizio di un array e restituisce la nuova lunghezza dell'array.   (il contrario di push())
    let array3 = [1, 2, 3];

    array3.unshift(0);              // Aggiunge 0 all'inizio dell'array:              diventa [0, 1, 2, 3]
    let newLength = array3.unshift(-3, -2, -1);  // Aggiunge -3 -2 e -1 all'inizio dell'array:   diventa [-3, -2, -1, 0, 1, 2, 3]
    console.log(newLength);
    console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)

//5)sort(): Ordina gli elementi di un array in modo crescente o decrescente (riporta valore dell'array ordinato, ma è inutile salvarlo in una nuova variabile).
    let array4 = [2, 3, 1];

    array4.sort();  //Ordina gli elementi dell'array in modo crescente:   diventa [1, 2, 3]
    console.log(array4);
    //il modo di default secondo cui sort riordina gli elementi è in ordine del codice UNICODE, ossia come vengono interpretati i vari caratteri dalla macchina
    //questa istruzione non fa distinzioni tra i vari types ma considera tutto come delle stringhe (true == "true")
    array4 = [true, 2, 3, 1, false, "true", true, false, "a", "ehy","zebra", "gionnie", "0", "2", "5", ",", "+", "£"];
    array4.sort();
    console.log(array4);
    //ordina prima i segni come +, poi i numeri in ordine crescente, poi le parole in ordine alfabetico, e infine i caratteri speciali come £
    
    //Tuttavia, è possibile passare una funzione di confronto come argomento di sort() per personalizzare il modo in cui gli elementi vengono confrontati e ordinati.
    //In questo modo, è possibile ordinare gli elementi in qualsiasi ordine si desideri.
    //questa funzione di confronto (ossia un arrow function) si chiama compareFunction, che viene chiamata per ogni coppia di elementi dell'array e deve restituire un numero intero.
    //la funzione di confronto ha 2 parametri, che per convenzione sono a e b, che prendono i valori di ogni elemento dell'array, paragonando tutti gli elementi due a due.
    //inoltre essa riporta un valore, che è stabilito da un espressione scritta da noi
    //se il valore riportato è maggiore di 1, allora ordina il primo elemento "a" dopo del secondo elemento "b"
    //se il valore riportato è minore di 1, allora ordina il primo elemento "a" prima al secondo elemento "b"
    //la sintassi è quella di un arrow function di una sola linea e una sola istruzione (ossia return, che viene omesso)
    let array5 = [10, 2, 5, 1, 9];
    array5.sort((a, b) => b - a);              //Ordina gli elementi (numeri) dell'array in modo decrescente (il valore riportato dalla funzione di confronto è negativo)
    //vediamo come funziona la funzione di confronto
    //prende 2 coppie di elementi, fino a finire gli elementi
    //facciamo un esempio con l'elemento 10 (a) e l'elemento 2 (b)
    //b - a = 2 - 10 = -8 => un valore negativo => elemento a (10) prima elemento b (2)
    console.log(array5);        //[10, 9, 5, 2, 1]    

    //invece per le stringhe si usa la funzione localCompare per poter ordinare in senso inverso dell'alfabeto
    let array6 = ['b', 'c', 'a'];
    array6.sort((a, b) => b.localeCompare(a));  //il valore riportato da localCompare è -1: Ordina gli elementi (stringhe) dell'array in modo decrescente
    console.log(array6);       //['c', 'b', 'a']
    //l'ordine crescente di localCompare non ha alcuna differenza con il valore di default di sort()

    //possiamo ordinare gli elementi anche in base alla loro lunghezza (funziona solo su stringhe)
    let arrayConStringhe = ["parola", "supercalifragilisichespiralitoso", "ok", "siuum", "è"];
    arrayConStringhe.sort((a, b) => a.length - b.length);      //ordine crescente della lunghezza
    console.log(arrayConStringhe);
    arrayConStringhe.sort((a, b) => b.length - a.length);      //ordine decrescente della lunghezza
    //ci sono altri modi per ordinare gli array che poi vedremo

//6)reverse(): Inverte l'ordine degli elementi di un array, e restituisce il valore dell'array invertito (dunque modifica l'array originale e riporta quello stesso valore).
    let array7 = [2, 3, 1];

    let arrayInvertito = array7.reverse();     //inverte l'ordine
    console.log(array7);                       //array originale
    console.log(arrayInvertito);               //valore riportato dall'istruzione

    //si può usare questa funzione per ordinare in ordine decrescente un array, usando prima sort() e poi reverse()
    let array8 = [1, 2, 3, "b", 6, "c", 8, "a"];
    array7.sort().reverse();       //viene prima ordinato e poi invertito l'ordine
    console.log(array8);
    //dunque, invece di usare una funzione nell'argomento di sort per mettere l'ordine decrescente, si invertire in questo modo più veloce
    //FAI MOLTO PRIMA COSì
    
    //questa funzione può essere usata anche con le stringhe ma si usano funzioni per non generare errori STUDIA MEGLIO
    let str = "abc";
    let reversed = str.split('').reverse().join('');    //QUESTE FUNZIONI DA STUDIARE MEGLIO
    console.log(reversed);    //"cba"

//7)indexOf(): Restituisce l'indice della prima occorrenza di un elemento specificato in un array, o -1 se l'elemento non è presente.
    //la sintassi è: array.indexOf(item, start)
    //la ricerca dunque è da sinistra verso destra
    let array9 = ["salumi", true, "python", 3, "£", false, true];
    console.log(array9.indexOf(true));                        //nell'indice 1 c'è la prima occorrenza di true    
    console.log(array9.indexOf(3));                           //nell'indice 3 c'è la prima occorrenza di 3       
    console.log(array9.indexOf("£"));                         //nell'indice 4 c'è la prima occorrenza di "£"     
    console.log(array9.indexOf("python"));                    //nell'indice 2 c'è la prima occorrenza di "python"
    console.log(array9.indexOf("questo valore non c'è"));     //non c'è un occorrenza di questo valore: -1       

    //questa funzione accetta un opzionale argomento detto fromIndex, che sarebbe il secondo argomento e indica da quale indice iniziare la ricerca
    //di default è l'indice 0
    console.log(array9.indexOf(true, 2))           //dall'indice 2, la prima occorrenza di true si trova all'ultimo indice, ossia 6
    console.log(array9.indexOf("salumi", 1))       //dall'indice 1, non ci sono occorrenze di "salumi", quindi il valore riportato è -1

    //il valore del parametro start può essere anche negativo, infatti -n indicherebbe array.length - n, ossia - 1 indica l'ultimo indice, -2 il penultimo, e così via
    console.log(array9.indexOf("£", -2));     //la ricerca parte dal penultimo indice e va fino all'ultimo: in questo range non c'è il valore "£" => -1

    console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)

//8)lastIndexOf(): Restituisce l'indice dell'ultima occorrenza di un elemento specificato in un array, o -1 se l'elemento non è presente. (corrispondente a indexOf())
    //la sintassi è: array.lastIndexOf(item, start)
    let array10 = ["Apple", "Orange", "Apple", "Mango"];
    console.log(array10.lastIndexOf("Apple"));       //nell'indice 2 c'è l'ultima occorrenza di "Apple"
    //come indexOf(), riporta -1 se non c'è il valore
    //ci possono essere 2 parametri: item, ossia il valore da ricercare (obbligatorio); e start, ossia l'indice da cui partire (opzionale)
    //ricordati che questa istruzione cerca i valori di default dall'ultimo indice (array.length - 1) fino all'indice 0
    //la ricerca dunque è da destra verso sinistra

    let array11 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
    console.log(array11.lastIndexOf("Apple", 4));       //partendo dall'indice 4 (Banana), e andando verso sinistra, la prima ricorrenza di Apple si ha all'indice 3
    //i valori del parametro start possono essere anche negativi, indicando con -1 l'ultimo index (array.length - 1), con -2 il penultimo index (array.length - 2) e così via
    let array12 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple", "Mango", "Banana"]
    console.log(array12.lastIndexOf("Banana", -2));     //la ricerca parte dal penultimo elemento e va fino al primo => indice 4

//9)slice(): Estrae una porzione di un array e restituisce un nuovo array. Non modifica l'array originale
    //la sintassi è: array.slice(start, end)
    let array13 = ["indice 0", "indice 1", "indice 2", "indice 3", "indice 4"];
    console.log(array13);

    console.log(array13.slice(2));  // Estrae gli elementi dell'array a partire dall'indice 2 (2 incluso)
    console.log(array13);           //non modifica l'array originale
    
    console.log(array13.slice(1, 3));  // Estrae gli elementi dell'array tra gli indici 1 (incluso) e 3 (escluso)
    
    console.log(array13.slice(-2));  // Estrae gli ultimi 2 elementi dell'array
    
    console.log(array13.slice(-2, -1));  // Estrae l'ultimo elemento dell'array 
    console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)

//10)concat(): Unisce due o più array e restituisce un nuovo array.
    //la sintassi è: array1.concat(array2, array3, ..., arrayX)    
    //il metodo concat() non modifica gli array originali, ma restituisce un nuovo array con gli elementi concatenati.
    //dunque bisogna salvare il valore restituito in una nuova variabile
    let array111 = [1, 6, 7, 4];
    let array22 = [4, 5, 6];
    
    let concatenated = array111.concat(array22);  // Unisce array111 e array22 in un unico array
    console.log(concatenated);      //[1, 6, 7, 4, 4, 5, 6]
    
    let array33 = [7, 8, 9];
    
    concatenated = array111.concat(array22, array33);  // Unisce array111, array22 e array33 in un unico array
    console.log(concatenated);          //[1, 6, 7, 4, 4, 5, 6, 7, 8, 9]

    concatenated = array111.concat([4, 5], 6, [7, 8]);  // Unisce gli elementi di array111 con altri elementi e array
    console.log(concatenated);          //[1, 6, 7, 4, 4, 5, 6, 7, 8]

//11)join(): Unisce tutti gli elementi di un array in una stringa e restituisce il risultato.
    //il metodo join() non modifica l'array originale, ma restituisce una stringa con gli elementi dell'array uniti.
    //la sintassi è: array.join(separator)
    let array222 = ['a', 'b', 'c', 'd'];

    let joined = array222.join();  // Unisce gli elementi dell'array in una stringa, separandoli con una virgola
    console.log(joined);
    //infatti il valore di default di separator è una virgola (,)
    
    joined = array222.join('');  // Unisce gli elementi dell'array in una stringa, senza utilizzare alcun delimitatore
    console.log(joined);
    
    joined = array222.join('-');  // Unisce gli elementi dell'array in una stringa, separandoli con il simbolo meno
    console.log(joined);
    console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)

//12)map(): Crea un nuovo array in cui ogni elemento è il risultato di una funzione specificata applicata a ogni elemento dell'array originale.
    //se vogliamo cambiare tutti i valori di un array secondo un criterio specifico, possiamo usare i for...of loop, oppure il metodo map()
    const FAHRENHEIT = [72, 68, 70, 74, 77, 75, 79];   //questi sono dei valori in gradi Fahrenheit, e li vogliamo trasformare in gradi celsius
    //vediamo come possiamo cambiare i valori della variabile tramite i for...of loop
    let celsius = [];    //creiamo un array vuoto che poi riempiamo man mano
    for (const element of FAHRENHEIT) {
        let valoreCelsius = (element - 32) * (5/9);         //questa variabile ha un block scope (valenza solo in questo code block)
        celsius.push(valoreCelsius);       //in questo modo aggiungiamo ogni valore all'array vuoto creato precedentemente
    } 
    console.log(celsius);
    //se vogliamo usare invece il metodo map(), sviluppiamo l'istruzioni cosi
    //la sintassi è: array.map(function(currentElement, index, array), thisValue)     //thisValue è UNA COSA CHE ANCORA DEVO STUDIARE: STUDIA MEGLIO
    //il metodo map() non modifica l'array originale, ma restituisce un nuovo array con gli elementi trasformati.
    celsius = FAHRENHEIT.map(function (element) {     //l'unico parametro obbligatorio è currentElement, che per convenzione scriviamo con element
        return (element - 32) * (5/9);     //la funzione all'interno di map deve per forza riportare un valore, che sarà i valori del nuovo array riportato
    });
    
    //possiamo scrivere questo in modo più veloce con un arrow function
    celsius = FAHRENHEIT.map(element => (element - 32)  * (5/9));
    //possiamo aggiungere un secondo parametro alla funzione all'interno di map, che sarebbe l'indice dell'elemento
    let GENTE_IN_CODA = ["Sara", "Marco", "Anna", "Benedetta"];
    console.log(GENTE_IN_CODA);
    GENTE_IN_CODA = GENTE_IN_CODA.map((element, index) => `${index + 1}: ${element}`);  //siccome map non aggiorna l'array originale, per farlo (nel caso di let o var, non const) possiamo fare array = array.map(function())
    console.log(GENTE_IN_CODA);
    //possiamo aggiungere anche un terzo parametro alla funzione, che sarebbe l'array stesso
    //con questo parametro possiamo gestire il length di tutto l'array oppure un elemento preciso dell'array
    let array14 = [1, 2, 3, 4];

    let mapped = array111.map((x, i, arr) => x * i + arr.length);  // Crea un nuovo array con gli elementi del vecchio array trasformati in base alla funzione
    console.log(mapped);       //mapped è [1*0 + 4, 2*1 + 4, 3*2 + 4, 4*3 + 4] => [4, 6, 10, 16]

    let people = [    //questo è un array in cui gli elementi sono delle variabili object
        {name: 'Alice', age: 30},
        {name: 'Bob', age: 35},
        {name: 'Charlie', age: 40},
    ];
      
    let names = people.map(person => person.name);  // Crea un nuovo array con i nomi delle persone
    console.log(names);          //['Alice', 'Bob', 'Charlie']

    let strings = people.map(person => `${person.name} (${person.age} anni)`);  // Crea un nuovo array con le stringhe formattate
    console.log(strings);         //['Alice (30 anni)', 'Bob (35 anni)', 'Charlie (40 anni)']
      
    //vediamo altri esempi di map()
    let array15 = ['one', 'two', 'three', 'four']
    array111 = array111.map(value => value.length);      //converte i valori nel numero di caratteri che hanno le stringhe ("one" => 3, "two" => 3, )
    //per aggiornare l'array e non crearlo un altro possiamo dare un nuovo assegnamento alla variabile let
    console.log(array111);        // [3, 3, 5, 4]

    const CITTà_LETTERA_MINUSCOLA = [ 
        {nome: "Caserta", sigla: "ce"},
        {nome: "Napoli", sigla: "na"},
        {nome: "Cremona", sigla: "cr"},
    ]
    const UPPER_CASE_SIGLE_CITTà = CITTà_LETTERA_MINUSCOLA.map(element => element.sigla.toUpperCase())
    console.log(UPPER_CASE_SIGLE_CITTà)

    //ecco come creare un array con oggetti mappati da 2 array (cosa un po)
    let proprietà = ['nome', 'età', 'luogo'];
    let valori = ['Alice', 30, 'New York'];
    
    let objects = valori.map((value, i) => ({[proprietà[i]]: value}));  // Crea un nuovo array di oggetti con le proprietà e i valori specificati
    //per poter scrivere il nome di una proprietà (non il valore), nella funzione bisogna scriverlo con le [], infatti c'è la scrittura {[proprietà[i]]: ...}
    console.log(objects);    // objects è [{nome: 'Alice'}, {età: 30}, {luogo: 'New York'}]
    console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)

//13)filter(): Crea un nuovo array contenente solo gli elementi che soddisfano una determinata condizione.
    //per filtrare solo gli elementi di un array che soddisfano una condizione si possono usare i for...of loop
    const PUNTEGGI = [72, 95, 90, 71, 75, 79];
    let punteggiMaggioriDi90 = [];
    for (const element of PUNTEGGI) {
        if (element >= 90) {
            punteggiMaggioriDi90.push(element);
        }
    }
    console.log(punteggiMaggioriDi90);

    //Possiamo anche usare il metodo filter()
    //questo metodo non cambia l'array originale ma riporta l'array modificato
    //la sintassi è: array.filter(function(currentValue, index, arr), thisValue)    //thisValue è UNA COSA CHE ANCORA DEVO STUDIARE: STUDIA MEGLIO
    punteggiMaggioriDi90 = PUNTEGGI.filter(function (element) {
        return element >= 90        //la funzione deve per forza riportare un valore boolean, se true l'elemento resta, se false no        
    });
    console.log(punteggiMaggioriDi90);

    //facciamo altri esempi
    const PARTECIPANTI = ["Ben", "Sarah", "Eli", "Henry", "Sean", "Annabel"];
    const NOMI = PARTECIPANTI.filter(function (element) {
        return element[0] == "S"    //controlla se la prima lettera è S
    });
    console.log(NOMI);

    //possiamo aggiungere anche un secondo parametro, ossia index, che indica l'indice dell'elemento
    const SETTIMANA = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const SETTIMANA_LAVORATIVA = SETTIMANA.filter(function(element, index) {
        return (index > 0 && index < 6);
    });
    console.log(SETTIMANA_LAVORATIVA);

    //possiamo semplificare il tutto con un'arrow function
    punteggiMaggioriDi90 = PUNTEGGI.filter(element => element >= 90);
    console.log(punteggiMaggioriDi90);

    //il terzo parametro dell'inline function è l'array stesso
    const ARRAY_A_CASO = ["123456789-10", "123456789-10", "123", "1", "12", "1234", "123456789-10-11-12", "indice 7", "indice 8"];
    console.log(ARRAY_A_CASO);
    const ARRAY_FILTRATO = ARRAY_A_CASO.filter((element, indice, array) => element.length >= array.length);   //paragona la lunghezza di ogni elemento con il numero di elementi nell'array (element.length >= 9)
    console.log(ARRAY_FILTRATO);

    console.log("")    //questa linea di codice serve a fare una riga di spazio nella console (inutile in un vero file e non un manuale)
//14)reduce(): Esegue una funzione su ogni elemento di un array, accumulando il risultato in un unico valore.
    //nel caso dobbiamo convertire tutti gli elementi di un array in un solo valore possiamo usare un for...of loop
    const PUNTEGGI_PER_PARTITA = [12, 23, 54, 75];
    let finalScore = 0;
    for (const element of PUNTEGGI_PER_PARTITA) {
        finalScore += element;
    }
    console.log(finalScore);

    //c'è però un metodo più facile e intuitivo, ossia reduce()
    //esso riporta il valore ma non modifica l'array originale
    //la sintassi è: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)     //initialValue è UNA COSA CHE ANCORA DEVO STUDIARE: STUDIA MEGLIO
    finalScore = PUNTEGGI_PER_PARTITA.reduce(function (total, element) {    //questi sono gli unici parametri obbligatori
        return total + element
    });
    console.log(finalScore);
    //i 2 parametri vengono solitamente indicati con prev (ossia previous reduction = precedente riduzione) e curr (ossia current value = valore corrente)
    //il valore di prev è inizialmente il primo elemento dell'array (se non è settato nessun valore per il parametro fuori dalla funzione initialValue)
    //il valore di curr sarebbe ogni elemento dell'array (uno ad uno)
    const array444 = [1, 2, 3, 4, 5];
    total = array444.reduce((prev, curr) => prev + (curr/2));
    console.log(total);       //quindi quest'operazione equivale a questa sotto
    console.log(1 + (2/2) + (3/2) + (4/2) + (5/2));    //8
    /*in realtà farebbe l'operazione uno alla volta per ogni elemento
    1 + (2/2) = 2     questo diventa il valore del nuovo prev
    2 + (3/2) = 3.5
    3.5 + (4/2) = 5.5
    5.5 + (5/2) = 8
    */

    //invece se diamo anche un valore all parametro initialValue, nella prima operazione prev non è il primo elemento ma è questo valore
    total = array444.reduce((prev, curr) => prev + (curr/2), 0);
    console.log(total); 
    console.log(0 + (1/2) + (2/2) + (3/2) + (4/2) + (5/2));  //7.5
    //vediamo il caso in cui initialValue è 1
    total = array444.reduce((prev, curr) => prev + (curr/2), 1);
    console.log(total); 
    console.log(1 + (1/2) + (2/2) + (3/2) + (4/2) + (5/2));  //8.5

    //c'è ancora un altro parametro che possiamo avere, ossia index, che è il terzo parametro della funzione
    const PREZZI = [17.50, 20.25, 24.75, 13.50, 8.50];
    const SCONTI_PER_ARTICOLO = [0.9, 0.9, 1.0, 1.0, 0.9];
    total = PREZZI.reduce((prevVal, currVal, index) => prevVal + (currVal * SCONTI_PER_ARTICOLO[index]), 0);
    console.log(total);
    console.log(0 + (17.50 * 0.9) + (20.25 * 0.9) + (24.75 * 1.0) + (13.50 * 1.0) + (8.50 * 0.9));  //79.875

    //vediamo alcuni esempi 
    const PAROLE = ["The", "house", "is", "red"];
    const FRASI = PAROLE.reduce((prev, curr) => prev + " " + curr);
    console.log(FRASI);




    //come lo dice chat-gpt è più veloce:
    //In JavaScript, il metodo Array.prototype.reduce() è utilizzato per applicare una funzione ad ogni elemento di un array e ridurlo ad un unico valore.
    //La funzione che viene passata a reduce() accetta due argomenti: un accumulatore e l'elemento corrente dell'array.
    //La sintassi generale per l'utilizzo di reduce() è la seguente:
        //arrayEsempio.reduce(function(accumulator, currentValue, currentIndex, array) {return accumulator}, initialValue);

    //accumulator è il valore accumulato per ogni iterazione, inizialmente viene valorizzato con initialValue.
    //se initialVale non è passato come secondo parametro, accumulator assume come valore il primo elemento dell'array.
    //currentValue è l'elemento corrente dell'array
    //currentIndex è l'indice corrente dell'elemento 
    //array è l'array su cui viene chiamato il metodo.
    //Esempio:
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);    //0 è il valore di initialValue
    console.log(sum); // Output: 10
    //In questo esempio, la funzione passata a reduce() somma l'accumulatore con il valore corrente dell'array.
    //L'accumulatore inizia con un valore iniziale di 0 e ad ogni iterazione l'accumulatore viene aggiornato con la somma dell'accumulatore e del valore corrente dell'array.
    //Alla fine del ciclo, l'accumulatore avrà la somma di tutti i valori dell'array. 


//Quasi tutte queste funzioni possono essere utilizzate solo su array, non su altri tipi di oggetti.
//Se si cerca di utilizzare queste funzioni su un oggetto che non è un array, verrà generato un errore.

//Ci sono molte altre funzioni per gli array disponibili in JavaScript, ma queste sono alcune delle più comunemente utilizzate.


//ORA VEDIAMO LE INTERAZIONI CON LA PAGINA HTML. VAI NELLA CARTELLA pagine dinamiche
