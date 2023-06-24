//come abbiamo visto si può gestire un tag in base al proprio id
const PARAGRAFO_1 = document.getElementById("1paragrafo").innerHTML;
//oppure in base alla posizione in cui si trova nella struttura HTML
const PARENT_PARAGRAFO = document.getElementById("parente-paragrafo")    //serve il genitore del tag in considerazione
const PARAGRAFO_2 = PARENT_PARAGRAFO.firstElementChild;
PARAGRAFO_2.innerHTML = `secondo paragrafo modificato`;
//per poter trovare gli elementi in base alla loro posizione, dobbiamo essere in grado di vedere la pagina HTML come una struttura ad albero
//questa struttura da albero consente di rappresentare dati e relazioni in modo gerarchico

//ogni elemento della struttura lo chiamiamo node (nodo), come ad esempio p
//ci sono diversi tipi di nodes
//il tag html è il root node (nodo della radice), che non può essere più di uno
//gli elementi come p sono chimati element nodes, invece il testo che sta dentro un tag di apertura e uno di chiusura si chiama text nodes
//infatti ogni testo che appare sulla pagina è scritta nel codice HTML

//inoltre già conosciamo le relazioni genitore-figlio dei vari tag
//altra relazione sono i discendenti, secondo cui tramite varie relazioni parent-child tutti i nodi sono discendenti del tag html

//per gestire queste posizione in JavaScript si usa il DOM
//il DOM (document object model) è un interfaccia che permette di accedere a ttti gli elementi in base alla loro posizione nella struttura ad albero
//la prima cosa a cui DOM può farci accedere è il root node
var htmlRoot = document;
console.log(htmlRoot);
//per accedere ai figli di html (ossia a head e body) si possono usare le parole chiave (questa cosa va bene solo per loro 2)
var headNode = document.head;
console.log(headNode);
console.log(document.body);
//possiamo sempre aggiornare i nodes con l'instruzione .innerHTML

//per accedere a tutti i figli di un node si usa l'instruzione .children
var figli = PARENT_PARAGRAFO.children;
console.log(figli);  //riporta un array con tutti l'elementi figli
console.log(figli[2]);   //per prendere un figlio possiamo usare []
//per accedere al primo elemento possiamo anche usare direttamente il metodo firstElementChild
console.log(PARENT_PARAGRAFO.firstElementChild);

//invece per accedere al prossimo "fratello in ordine crescente" (ad esempio il prossimo fratello di head è body), si usa nextElementSibling
console.log(PARAGRAFO_2.nextElementSibling.innerHTML);   //così vediamo il contenuto del prossimo figlio


//un altro modo per accedere a specifici elementi della pagina è tramite il metodo 
var titolo_h2 = document.querySelector("h2");
console.log(titolo_h2.innerHTML);
//querySelector funziona su tutti i tipi di selettori, come tag, classi o id
console.log(document.querySelector("#id").innerHTML);
//questo metodo accede solo al primo tag o classe che è presentato nel codice
var elemento1classe = document.querySelector(".classe");
console.log(elemento1classe);    //ad esempio gli altri elementi .class non vengono eseguiti
var elemento1span  = document.querySelector("span").innerHTML = "elemento 1 span modificato con JS";     //l'elemento 2 non viene toccato
//questo può essere un problema nel caso dobbiamo accedere a un elemento successivamente nel codice
//per questo motivo si può specificare a che tag e classe tramite la sintassi tag.classe
var elementoSpanClasse = document.querySelector("span.classe");
console.log(elementoSpanClasse);    //in questo modo non si prende il primo elemento span o il primo elemento con class="classe"
//invece si prende il primo elemento span con il class="classe"
//per specificare in modo ancora ulteriore, si possono inserire più classi
console.log(document.querySelector("p.classe.altraclasse"));

//ora vediamo come accedere il valore degli attributi dei tag
//possiamo salvare il tag in considerazione in una variabile
//facciamo tutto in una funzione che verrà eseguita da un bottone, salvando tutto in scope locale
function cambioImmagine() {
    const IMMAGINE = document.querySelector("img.cambio-attributo");
    //dopo di che si accede all'attributo con la sintassi: tagNameVariabile.attributoName
    console.log(IMMAGINE.src);
    //per cambiare il valore dell'attributo usiamo =
    IMMAGINE.src = "esercitazioni/media/fratelli.jpg";
}
//facciamo altri esempi
let condizione = false;
function cambioHrefTagA() {
    const LINK = document.querySelector("a");
    const LINK_INIZIALE = document.querySelector("#link-iniziale");   //paragrafo prompt
    const LINK_FINALE = document.querySelector("#link-finale");
    condizione = !condizione;
    if (condizione) {
        LINK_INIZIALE.innerHTML = `il link inziale è ${LINK.href}`;
        LINK.href = "https://www.treccani.it/";
        LINK.innerHTML = "link a treccani";
        LINK_FINALE.innerHTML = `il link finale è ${LINK.href}`;
    }
    else {
        LINK_INIZIALE.innerHTML = `il link inziale è ${LINK.href}`;
        LINK.href = "https://it.wikipedia.org/wiki/Pagina_principale";
        LINK.innerHTML = "link a wikipedia";
        LINK_FINALE.innerHTML = `il link finale è ${LINK.href}`;
    }
        
}
let condizione1 = false;
function cambioTipoDiInput() {
    const INPUT = document.querySelector("input");
    const TIPO_INPUT_INIZIALE = document.querySelector("#input-iniziale");
    const TIPO_INPUT_FINALE = document.querySelector("#input-finale");
    condizione1 = !condizione1;
    if (condizione1) {
        TIPO_INPUT_INIZIALE.innerHTML = `il tipo inziale è ${INPUT.type}`;
        INPUT.type = "date";
        TIPO_INPUT_FINALE.innerHTML = `il tipo finale è ${INPUT.type}`;
    }
    else {
        TIPO_INPUT_INIZIALE.innerHTML = `il tipo inziale è ${INPUT.type}`;
        INPUT.type = "text";
        TIPO_INPUT_FINALE.innerHTML = `il tipo finale è ${INPUT.type}`;
    }
    
}
//il cambio di attributo può essere molto potente, anche dando stile a una pagina
let condizione2 = false;
function addStyleSheet() {
    const STYLE_LINK = document.querySelector("link");
    condizione2 = !condizione2;
    if (condizione2) {
        STYLE_LINK.href = "stili/style.css";        
    } 
    else {
        STYLE_LINK.href = "";
    }
}

//cambiamo il type di un tag input da text a password
let condizione3 = false;
function inputChange() {
    const INPUT1 = document.querySelector("input.boo");
    condizione3 = !condizione3;
    if (condizione3) {
        INPUT1.type = "password";        
        INPUT1.placeholder = "type: password";
    } else {
        INPUT1.type = "text";
        INPUT1.placeholder = "type: text";
    }
}

//cancelliamo tutti gli elementi presenti, così che siamo più liberi dallo spazio
//il bottone si trova in alto a destra nella pagina 
const ELEMENTO_DA_NON_CANCELLARE_titolo = document.querySelector("#non-cancellare");
function cancellaElementiDallaPagina() {
    console.clear();
    console.log(`per ancora maggiore pulizia ho cancellato anche gli elementi della console`);
    //modifica l'id dell'elemento da cui non vuoi cancellare nulla

    console.log(`i tag cancellati sono:`)
    while (document.body.children.length > 0) {
        if (ELEMENTO_DA_NON_CANCELLARE_titolo === document.body.children[0]) {
            console.log("sono arrivato all'ultimo elemento")
            break;     //questa instruzione stoppa il while loop
        }
        else if (document.body.children[0].matches("script")) {
            console.log(`non ho cancellato il tag script`);
            break;
        }
        console.log(document.body.children[0]);
        document.body.removeChild(document.body.children[0]);
    }
    //per capire meglio come cancellare cose dalla pagina, clicca il link vicino il bottone cancella pagina, e vedi codice JavaScript
}


const BODY2 = document.querySelector("#da-cancellare-pt2");
//ora vediamo come cambiare lo stile di una pagina
//per accedere allo stile di una pagina, dobbiamo avere lo stile stabilito in tipo inline (ossia con l'attributo stile nel tag)
//se è stabilito in questo modo, allora possiamo accedere allo stile con la sintassi: element.style.proprietà
function displayColor(paragrafo) {
    if (paragrafo.style.color === "") {
        var frase_colore = "il colore del paragrafo non è accessibile";
    } else {
        var frase_colore = `il colore del paragrafo è ${paragrafo.style.color}`;    //prendiamo il colore del paragrafo
    }
    document.querySelector("#prompt").innerHTML = frase_colore;
    console.log(frase_colore);
}
const PARAGRAFO_COLORATO1 = BODY2.children[0];
const PARAGRAFO_COLORATO2 = document.querySelector("#paragrafo-colorato2");
const PARAGRAFO_COLORATO3 = document.querySelector("#paragrafo-colorato3");
//come possiamo provare, nel paragrafo colorato 1 si riesce ad accedere al colore, perchè settato inline
//invece nel paragrafo colorato 2 e 3 no, perchè settati in un foglio esterno o nel tag style
//se vogliamo cambiare lo stile del paragrafo 2 e 3 vedremo come si fa

//per adesso vediamo come cambiare lo stile inline
//con = possiamo cambiare lo stile sempre settandolo tra ""
function cambiaColore(paragrafo) {
    paragrafo.style.color = "black";
}
//per cambiare lo stile di proprietà con più parole si usa il camel Case, ad esempio background-color diventa backgruondColor
function cambiaColoreSfondo(elemento) {
    elemento.style.backgroundColor = "antiquewhite";
}
//per cambiare colore non c'è differenza negli elementi con lo stile settato inline o in un foglio di stile
//dunque possiamo cambiare lo stile di qualsiasi elemento, ma possiamo (per ora) accedere ad esso solo se inline

//Puoi accedere a un attributo di un tag HTML in JavaScript utilizzando il metodo getAttribute(). (metodo alternativo alla notazione punto)
//Il metodo getAttribute() accetta una stringa che rappresenta il nome dell'attributo di cui si desidera ottenere il valore e
//restituisce il valore dell'attributo. Ecco un esempio:
function displayPizzaInfo() {
    const IMMAGINE_PIZZA = document.querySelector("#pizza");
    const SRC_PIZZA = IMMAGINE_PIZZA.getAttribute("src");
    const ALT_PIZZA = IMMAGINE_PIZZA.getAttribute("alt");
    console.log(`il link source dell'immagine pizza è ${SRC_PIZZA}`);
    console.log(`l'attributo alt ha il valore di "${ALT_PIZZA}"`);
}

/*
La principale differenza tra i due metodi per accedere a un attributo HTML in JavaScript è il modo in cui vengono gestiti i nomi degli attributi.
    Utilizzando il metodo getAttribute(), devi passare il nome dell'attributo come una stringa esatta, comprese le eventuali maiuscole o trattini.
    Ad esempio, per accedere all'attributo "data-color" nel mio esempio precedente, avresti dovuto chiamare getAttribute("data-color").
    
    Utilizzando la notazione punto, il nome dell'attributo viene trasformato in camelCase e accedere all'attributo come una proprietà dell'oggetto.
    Ad esempio, per accedere all'attributo "data-color" nel mio esempio precedente, avresti dovuto accedere alla proprietà dataset.color.

In generale, se sai il nome esatto dell'attributo che vuoi accedere e sei sicuro che l'attributo esiste,
puoi utilizzare la notazione punto per accedere alla proprietà corrispondente.
Altrimenti, è meglio utilizzare il metodo getAttribute() perché gestisce meglio i casi in cui l'attributo non esiste o il nome è scritto in modo diverso.
*/

//per cambiare attributo possiamo usare setAttribute().   (sempre alterantivo alla notazione punto)
function changeImage() {
    const IMMAGINE_GATTO = document.querySelector("#gatto");
    console.log(IMMAGINE_GATTO.getAttribute("src"));
    IMMAGINE_GATTO.setAttribute("src", "esercitazioni/media/kittles.png");
    console.log(IMMAGINE_GATTO.getAttribute("src"));
}


//cancelliamo il gruppo body2
function removeBody2() {
    console.clear();
    if (BODY2 === document.querySelector("#da-cancellare-pt2")) {           //in questo modo vediamo se body2 esiste ancora
        document.body.removeChild(BODY2);
        ELEMENTO_DA_NON_CANCELLARE_titolo.innerHTML = "Accedere a più elementi";
        console.log("body2 eliminato");
    }
    else {
        console.log("body2 già eliminato");
    }
}
//per cancellare la console in modo più veloce ho messo anche un bottone in alto a destra nella pagina
//la funzione che lo fa attivare è questa:
function removeConsoleDati() {
    console.clear();
}


//abbiamo visto come accedere a un elemento tramite i metodi getElementById() oppure querySelector()
//se invece vogliamo accedere a più elementi contemporaneamente possiamo usare i metodi:
    //getElementsByTagName(): per accedere a tutti gli elementi con il nome del tag specificato.
    //getElementsByClassName(): per accedere a tutti gli elementi con la classe specificata.
    //querySelectorAll(): per selezionare tutti gli elementi che soddisfano una determinata query CSS.

//querySelectorAll include sia il metodo getElementsByClassName() sia il metodo getElementsByTagName()
//i valore dei tre metodi però può essere diverso
    /*getElementByTagName() e getElementByClassName() restituisce HTMLCollection di tutti gli elementi con il nome del tag o della classse 
    specificata presenti nella pagina.*/
        //L'HTMLCollection è simile a un array ma, a differenza di un vero array, è dinamico e si adatta automaticamente ai cambiamenti nella pagina.
        //dunque il valore di un HTMLCollection cambia con il cambiamento della pagina.
        function displayParagrafiTagName() {
            const PARAGRAFI_TAG_NAME = document.getElementsByTagName('p');
            console.log(PARAGRAFI_TAG_NAME);       //output: HTMLCollection(3) [p, p, p, ...]
        }

        function displayClassexampleclass() {
            const elementiexampleclass = document.getElementsByClassName('example-class');
            console.log(elementiexampleclass);         //output: HTMLCollection(3) [div.example-class, p.example-class, span.example-class]
        }

    //querySelectorAll() restituisce una NodeList di tutti gli elementi che soddisfano la query CSS specificata.
        //La NodeList è simile a un array, ma non è un vero e proprio array e non ha tutti i metodi disponibili su un array normale.
        function displayAllParagraphs() {
           const PARAGRAFI_SELECTOR_ALL = document.querySelectorAll('p');
           console.log(PARAGRAFI_SELECTOR_ALL);
           // output: NodeList(numero degli elementi) [p#paragrafo-uno, p#paragrafo-due, p#paragrafo-tre, ...]
        }
        //Tuttavia, è possibile accedere agli elementi della NodeList come se fosse un array e utilizzare alcuni metodi
        //è un oggetto statico, ossia che non cambia. infatti al contrario dell'HTMLCollection, la Nodelist non cambia al cambiare della pagina

/*Ci sono alcune differenze e caratteristiche in comune tra un NodeList e un HTMLCollection:
    -Aggiornamento dinamico: un HTMLCollection è dinamico e si adatta automaticamente ai cambiamenti nella pagina, mentre un NodeList no.
    -Metodi: un NodeList non ha tutti i metodi disponibili su un array normale, mentre un HTMLCollection ha alcuni metodi simili
        a quelli di un array.
    -Indice: entrambi possono essere acceduti tramite indice.
    -Return value: entrambi restituiscono una lista di elementi che soddisfano i criteri di selezione,
        ma un NodeList contiene solo nodi del tipo Element, mentre un HTMLCollection può contenere anche altri tipi di nodi, come commenti o testo.

In generale, è consigliabile utilizzare querySelectorAll invece di getElementsByTagName o getElementsByClassName perché querySelectorAll restituisce
un NodeList più versatile e flessibile.
*/
//https://dev.to/jimajs/htmlcollection-vs-nodelist-in-javascript-4337

//per convertire una Nodelist o un HTMLCollection, ci basta dunque usare array.from() e vediamo ora come si usa
//come prima cosa creiamo una Nodelist o un HTMLCollection e salviamolo in una variabile, poi usiamo array.from(Nodelist oppure HTMLCollection), e infini stampiamo i valori
function NodelistToArraySpan() {
    var NodelistSpan = document.querySelectorAll("span");
    var arrayOfSpan = Array.from(NodelistSpan);
    console.log(`i tag span in Nodelist sono:`);
    console.log(NodelistSpan);
    console.log("");
    console.log(`i tag span in array sono:`);
    console.log(arrayOfSpan);
}
function HTMLCollectionToArraySpan() {
    var HTMLCollectionSpan = document.getElementsByTagName("span");
    var arrayOfSpan = Array.from(HTMLCollectionSpan);
    console.log(`i tag span in HTMLCollection sono:`);
    console.log(HTMLCollectionSpan);
    console.log("");
    console.log(`i tag span in array sono:`);
    console.log(arrayOfSpan);
}


//ora vediamo come cambiare una classe di un elemento, in modo di poter cambiare ad esempio anche lo stile.
//Potremmo farlo con il metodo setAttribute, ma ciò fa annullare o l'una o l'altra classe.
//infatti con setAttribute se voglio aggiungere una classe a un elemento, devo per forza settare anche le classi già presenti, altrimenti queste si annullano
function cambiaAGrassetto() {
    const paragrafo = document.querySelector("p#corsivograssetto");
    paragrafo.setAttribute("class", "grassetto");
}
   
function cambiaACorsivo() {
    const paragrafo = document.querySelector("p#corsivograssetto");
    paragrafo.setAttribute("class", "corsivo");
}
//con questo codice possiamo cambiare la classe da corsivo a grassetto e viceversa, ma non possiamo avere entrambi le classi
//per aggiungere una classe senza eliminare le altre, dobbiamo prima accedere alle classi un elemento
//per fare ciò usiamo la keyword classlist, che riporta un DOMTokenList
var paragrafoConClassi = document.querySelector("p#paragrafo-con-classi-a-caso");
function vediClassi() {
    console.log(paragrafoConClassi.classList);
    console.log(paragrafoConClassi.className); //className è un altra keyword che ci consente di vedere le classi come stringhe, dunque parole separate da spazi
}
/*La DOMTokenList è una classe che rappresenta una lista di stringhe che rappresentano i token associati a un singolo attributo di un elemento HTML.
Ad esempio, la proprietà classList di un elemento HTML è una DOMTokenList, che contiene i nomi delle classi assegnate a quell'elemento.

La DOMTokenList fornisce metodi per la gestione dei token, come ad esempio add, remove, toggle, contains, etc.
Questi metodi permettono di modificare e gestire facilmente la lista di token.
*/
//dunque nei DOMTokenList possiamo usare i metodi:
    //add(token) per aggingere un token senza eliminare gli altri,
    //remove(token) per togliere solo deteriminati token, 
    //toggle(token) per aggiungere un token se non è presente, e toglierlo se è presente
    //contains(token) Restituisce true se il token è presente nella lista, altrimenti false
    //replace(oldToken, newToken): Sostituisce oldToken con newToken.
    //item(index): Restituisce il token all'indice specificato.

//i metodi più usati nelle classList sono add() remove() e toggle(), ma possono essere usati tutti
function modificaClassi() {
    const element = document.querySelector('p#paragrafo-con-altre-classi');
    element.classList.add('new-class');
    console.log(element.className);
    // output: "old-class new-class"
    
    element.classList.remove('old-class');
    console.log(element.className);
    // output: "new-class"
    
    element.classList.toggle('new-class');  //siccome è già prensente, togli la classe new-class
    console.log(element.className);
    // output: ""
    
    console.log(element.classList.contains('new-class'));
    // output: false
    
    element.classList.add('new-class');
    element.classList.replace('new-class', 'replaced-class');
    console.log(element.className);
    // output: "replaced-class"
}

//ora facciamo degli esempi con le classi che cambiano lo stile
var paragrafoClassiDaModificare = document.querySelector("p#modifica-classi");
function aggiungiClasseGrassetto() {
    paragrafoClassiDaModificare.classList.add("grassetto")
}
function aggiungiClasseCorsivo() {
    paragrafoClassiDaModificare.classList.add("corsivo")
}
function rimuoviClasseGrassetto() {
    paragrafoClassiDaModificare.classList.remove("grassetto")
}
function rimuoviClasseCorsivo() {
    paragrafoClassiDaModificare.classList.remove("corsivo")
}
function toggleClasseGrassetto() {
    paragrafoClassiDaModificare.classList.toggle("grassetto")
}
function toggleClasseCorsivo() {
    paragrafoClassiDaModificare.classList.toggle("corsivo")
}
//possiamo anche aggiungere o togliere multiple classi, siccome add() e remove() accettano più argomenti
function aggiungiClassiGrassettoECorsivo() {
    paragrafoClassiDaModificare.classList.add("grassetto", "corsivo")
}
function rimuoviClassiGrassettoECorsivo() {
    paragrafoClassiDaModificare.classList.remove("grassetto", "corsivo")
}
//invece il metodo toggle() ammette solo un argomento al massimo, se si vuole gestire più token, si deve chiamare più volte il metodo toggle()


//ottimo, ora che abbiamo completato queste lezioni sulla modifica dei vari valori di HTML, possiamo vedere le pagine di esercitazione per poi andare alla lezione successiva
//vedi dunque il footer