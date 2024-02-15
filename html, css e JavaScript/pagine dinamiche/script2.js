//adesso vediamo come far reagire una pagina a interazioni diverse da bottoni
//le pagine web sanno quando reagire all'interazione di un utente grazie agli eventi (events)
//Noi infatti ogni volta che creavamo un bottone, inserivamo l'attributo onclick, che crea il click event,
//attivato ogni volta che si preme quel bottone
//l'evento che usavamo era dunque un HTML event
//gli HTML event sono facili da usare ma difficili da maneggiare per grandi pezzi di codice
//Infatti gli attributi rendono il codice più difficile da controllare

//un altro modo per aggiungere eventi è tramite gli event properties, ossia proprietà che si aggiungono nel codice JavaScript
//le proprietà degli eventi sono molteplici e si riferiscono sempre all'elemento con cui interagiscono
//ad esempio se vogliamo inserire la proprietà dell'evento click su un immagine, per prima cosa scriviamo la funzione che verrà eseguita quando clicchiamo l'immagine
function clickImmagine() {
    console.log("l'immagine gatto è stata cliccata");
}
//poi salviamo l'immagine in una variabile, e infine alla variabile applichiamo la proprietà onclick, con il valore della funzione
var immagineClick = document.querySelector("img#gatto");
immagineClick.onclick = clickImmagine;     //la funzione deve essere scritta senza parentesi
//la funzione richiamata dopo un evento viene nominata event handler

//possiamo aggiungere eventi anche agli altri tipi di elementi, come div, h1, p, ecc
//ad esempio vediamo come cambia il colore del gruppo div quando ci clicchiamo sopra
var divCambioColore = document.querySelector("div#div-cambio-colore");
function cambioColoreDiv() {
    divCambioColore.classList.toggle("blu");
    divCambioColore.classList.toggle("rosa");
}
divCambioColore.onclick = cambioColoreDiv;

//ci sono vari tipi di eventi; quello che già conosciamo è l'evento click, che si avvia quando clicchiamo su un elemento
//poi c'è l'evento double click, che si avvia quando facciamo un doppio click su un elemento, che ha la ondblclick property
function doppioClickDiv() {
    console.log("doppio click bro");
}
divCambioColore.ondblclick = doppioClickDiv;    //siccome c'è sia l'evento del click che del doppio click, si avviano entrambe quando si fa il doppio click
//per vedere meglio il doppio click vediamo su un altro elemento, come il titolo
var titolo = document.querySelector("h1");
function doppioClickTitolo() {
    console.log("doppio click sul titolo");
}
titolo.ondblclick = doppioClickTitolo;

//altro evento si avvia quando si scrolla la pagina, con la proprietà onscroll (molto, molto raro da usare)
function paginaScrollata() {
    console.log("pagina scrollata");
}
document.querySelector("textarea").onscroll = paginaScrollata;

//un evento che viene eseguito ogni volta che un campo input cambia il suo valore è l'evento change, con la proprietà onchange
var data = document.querySelector("input#data");
var paragrafoPrompt = document.querySelector("p#prompt");
function valoreDellaDataInConsole() {
    console.log(data.value);
    paragrafoPrompt.innerHTML = data.value;
}
data.onchange = valoreDellaDataInConsole;
//facciamo un altro esempio, con un input di tipo text, che conta quanti caratteri ci sono.
//però l'evento onchange si esegue solo quando la modifica è finita, quindi bisogna mandare invio alla fine per farlo avviare
var inputText = document.querySelector("input#conta-caratteri-pezzotto");
var paragrafoPromptInputText = document.querySelector("p#prompt-input");
function contaCaratteri() {
    paragrafoPromptInputText.innerHTML = `il numero di caratteri digitato è ${inputText.value.length}`;
}
inputText.onchange = contaCaratteri;
//per far avviare l'evento durante ogni singola modifica del campo input, dobbiamo usare la proprietà oninput
var inputText2 = document.querySelector("input#conta-caratteri-buono");
var paragrafoPromptInputText2 = document.querySelector("p#prompt-input2");
function contaCaratteriBuono() {
    paragrafoPromptInputText2.innerHTML = `il numero di caratteri digitato è ${inputText2.value.length}`;
}
inputText2.oninput = contaCaratteriBuono;


//altro modo per aggiungere eventi alla notazione punto

//Il metodo addEventListener() è un metodo JavaScript che consente di assegnare una funzione di gestore ad un evento specifico su un elemento HTML.
//Si usa in questo modo:

//la sintassi è: element.addEventListener(event, function, useCapture);

/*dove: 
•   element è l'elemento HTML a cui si desidera assegnare il gestore dell'evento; 
•   event è il tipo di evento (ad esempio, 'click', 'mouseover', ecc.) e si scrive come una stringa; 
•   function è la funzione di gestore dell'evento da eseguire quando l'evento viene attivato e si scrive senza le virgolette della stringa e
     senza le parentesi. inoltre può essere anche una funzione anonima, ossia una funzione che non ha un nome e
     che è quindi definita nell'argomento del metodo stesso 
•   useCapture indica se l'evento deve essere catturato nella fase di propagazione o meno. dunque useCapture è un argomento opzionale del metodo
     addEventListener() che determina se un evento deve essere catturato nella fase di cattura o nella fase di bubbling. STUDIA MEGLIO
     Se impostato su true, l'evento viene catturato nella fase di cattura, altrimenti viene catturato nella fase di bubbling.
*/
//dunque su event non dobbiamo inserire gli event properties ma dobbiamo inserire il nome dell'evento, (non onclick, ma click)
//la liste degli eventi la puoi vedere qui: https://www.w3schools.com/jsref/dom_obj_event.asp
/*
La principale differenza tra inserire eventi con la notazione punto e con il metodo addEventListener() è che la notazione punto consente di
assegnare un solo gestore di eventi a un elemento, mentre il metodo addEventListener() consente di assegnare più gestori di eventi a un elemento.
Inoltre, la notazione punto non supporta l'utilizzo di funzioni anonime, mentre il metodo addEventListener() lo fa.
*/
//se vogliamo aggiungere più eventi a uno stesso elemento, possiamo dunque aggiungerli uno ad uno con addEventListener()
//adesso proviamo gli eventi più usati

//Evento click
const DIV_CAMBIO_COLORE = document.querySelector("div#cambio-colore-testo");
let condizioneCambioColore = true; //con questa condizione facciamo eseguire 2 diversi block code in base al colore del testo
DIV_CAMBIO_COLORE.addEventListener("click", function () {
    if (condizioneCambioColore) {   //il colore del testo è nero
        this.style.color = "red";    //this si riferisce all'elemento a cui è collegato il metodo addEventListener()
        this.innerHTML = "clicca per cambiare colore a nero";
    } else { //il colore del testo è rosso
        this.style.color = "black";
        this.innerHTML = "clicca per cambiare colore a rosso";
    }
    condizioneCambioColore = !condizioneCambioColore;      //fa cambiare la condizione in modo che risulta per i block code il testo da nero a rosso o viceversa
})
//l'evento dblclick (doppio click) già lo conosciamo (sappi che nei dispositivi touch non funziona il doppio click)

//ci sono altri eventi di tocco che funzionano solo sui display touch.
//per farli andare sl computer si deve mettere la modalità dispositivo mobili.
    /*L'evento touchstart è un evento che viene generato quando un utente tocca un dispositivo touchscreen. Questo evento viene generato quando l'utente
    inizia a toccare lo schermo, ma non ancora rilasciato. Dunque può essere sia un click veloce che un click prolungalo, ma l'evento si avvia subito, senza aver bisogno di rilasciare
    Questo evento può essere utilizzato per attivare funzionalità come la selezione di elementi sullo schermo o l'esecuzione di operazioni.*/
    var paragrafoTouchstart = document.querySelector("p#touchstart");
    paragrafoTouchstart.addEventListener("touchstart", function () {
        this.innerHTML = "si avvia questo codice al primo istante in cui tieni premuto";
    });

    /*L'evento touchmove è un evento che si verifica quando un utente interagisce con un dispositivo touchscreen, come ad esempio uno smartphone o un tablet.
    Si verifica quando l'utente fa scorrere il proprio dito sullo schermo, spostandolo da un punto all'altro. Questo evento può essere utilizzato per
    creare applicazioni interattive, come giochi o app di disegno.*/ 
    var paragrafoTouchmove = document.querySelector("p#touchmove");
    paragrafoTouchmove.addEventListener("touchmove", function() {
        this.innerHTML = "si avvia con un interazione prolungata con lo schermo, tenendo premuto e muovendo il dito";
    });
    
    /*L'evento touchcancel è un evento che viene generato quando un tocco viene annullato. Ciò può accadere in vari modi, come ad esempio quando l'utente 
    sposta il dito fuori dall'area dello schermo o quando l'utente interrompe il tocco premendo il pulsante di blocco. Questo evento è utile per le applicazioni che 
    devono gestire i tocchi in modo appropriato e può essere utilizzato per annullare eventuali azioni che sono state avviate a seguito di un tocco.*/
    //per farlo avviare sul computer, tieni premuto l'elemento e poi clicca il tasto windows oppure il tasto destro del mouse
    var paragrafoTouchcancel = document.querySelector("p#touchcancel");
    paragrafoTouchcancel.addEventListener("touchcancel", function() {
        this.innerHTML = "si avvia quando porti il dito fuori dall'area dello schermo, oppure quando si interrompe l'interazione per qualche altro motivo";
        console.log("si è interrotto per qualche errore con l'interazione dell'elemento")
    })

    /*Il touchend è un evento che si verifica quando l'utente tocca un dispositivo mobile e poi rilascia il dito. Si verifica dopo il touchstart e prima del
    touchcancel. Questo evento viene utilizzato per rilevare quando l'utente ha finito di interagire con un elemento sullo schermo.*/
    var paragrafoTouchend = document.querySelector("p#touchend");
    paragrafoTouchend.addEventListener("touchend", function() {
        this.innerHTML = "si avvia quando finisci di interagire con un elemento, dunque quando rilasci il dito da un elemento";
    });

//Per rimuovere un evento inserito con addEventListener() usiamo il metodo removeEventListener()
/*Il metodo removeEventListener() in JavaScript viene utilizzato per rimuovere un listener da un oggetto specifico. 

Per utilizzarlo, è necessario prima aggiungere un listener all'oggetto con il metodo addEventListener(). 
Una volta aggiunto, è possibile rimuovere l'ascoltatore con il metodo removeEventListener(). 

Il metodo removeEventListener() prende tre argomenti: 
1. Il nome dell'evento da rimuovere 
2. La funzione di callback da rimuovere 
3. Un valore booleano che indica se l'evento deve essere gestito in modo sincrono o asincrono. STUDIA MEGLIO
*/
//se vogliamo usare l'evento una sola volta possiamo aggiungere il metodo removeEventListener() alla fine della funzione che è un argomento di 
//addEventListener(). in questo modo quando avviamo l'evento, si avvia il codice per rimuovere l'evento
const DIV_CAMBIO_SFONDO = document.querySelector("div#cambio-colore-sfondo");
function cambioColoreSfondo() {
    this.style.backgroundColor = "red";
    console.log("da usare solo una volta");
    this.removeEventListener("click", cambioColoreSfondo);      //con questa linea di codice rimuoviamo l'evento
}
DIV_CAMBIO_SFONDO.addEventListener("click", cambioColoreSfondo);








//fai i progetti in querying webpages: word editor
//VEDI TIKTOK SALVATI
/*

La funzione `toFixed()` in JavaScript è un metodo dell'oggetto Number che formatta un numero utilizzando una notazione con punto fisso⁵. Questo metodo ritorna una stringa che rappresenta un numero con un numero specifico di cifre decimali¹².

La sintassi del metodo `toFixed()` è la seguente:

```javascript
numObj.toFixed([digits])
```

Dove `numObj` è un oggetto Number e `digits` è un parametro opzionale che specifica il numero di cifre da mostrare dopo il punto decimale. Il valore di `digits` dovrebbe essere compreso tra 0 e 100².

Ecco un esempio di utilizzo del metodo `toFixed()`:

```javascript
let num = 5.56789;
let n = num.toFixed(2);  // ritorna '5.57'
```

In questo esempio, `toFixed()` arrotonda il numero a due cifre decimali.

Si prega di notare che se il valore assoluto del numero è maggiore o uguale a 10^21, `toFixed()` ritorna una stringa in notazione esponenziale². Inoltre, se il numero di cifre decimali è superiore a quello nel numero, vengono aggiunti degli zeri¹.
*/