//adesso capiamo come funzionano le interazioni tra pagina HTML e file JavaScript
//dietro ogni pagina dinamica c'è sempre del codice JavaScript
//per aggiungere il codice a un pagina HTML si inserisce il tag <script></script>
//questo tag deve essere l'ultimo tag contenente in body
//il codice JavaScript funziona solo se situato all'interno del tag
//le istruzioni JavaScript vengono eseguite automaticamente quando la pagina viene visualizzata


//si può interagire con la pagina html grazie a vari modi
//ci sono i metodi che interagiscono tramite gli id dei vari tag, che devono essere unici per ogni elemento della pagina
//si può accedere all'id di un elemento tramite il metodo document.getElementById()
const output = document.getElementById("console");
console.log(document.getElementById("console"));
console.log(output);
//dunque document si riferisce a tutta la pagina in codice html, ma tramite il metodo getElementById() trova solo l'elemento voluto
console.log(document);

//come si vede l'output è il codice del file html
//per riportare il contenuto IN OGNI CASO di un tag bisogna usare l'istruzione alla fine .innerHTML
var output1 = document.getElementById("console").innerHTML;
console.log(output1);
console.log(output.innerHTML);   //possiamo anche scrivere innerHTML dopo la variabile, sono la stessa cosa
//se .innerHTML viene riferito a document, il valore riportato è undefined
console.log(document.innerHTML);

//per AGGIORNARE il contenuto di un tag si usa l'operatore di assegnamento =, anche dopo aver aggiunto il tutto in una variabile
let nuovoValore = document.getElementById("console").innerHTML = "valore aggiunto con JavaScript";
console.log(nuovoValore);
//è sempre meglio salvare tutto in delle variabili per potersi organizzare meglio con la gestione di tutto

//inoltre possiamo creare elementi con il metodo createElement()
//per usarlo creiamo prima una variabile (non è obbligatorio ma è buono salvarsi il contenuto)
const TITOLO = document.createElement("h1");
TITOLO.innerHTML = "questo è il titolo";
console.log(document); //come possiamo vedere, questo elemento non è ancora presente nella pagina HTML
//questo perché non abbiamo specificato dove inserirlo
//per fare ciò dobbiamo dare e trovare l'id del tag parent in cui vogliamo inserirlo
//salviamo il tag del parente in una variabile
const HEADER = document.getElementById("parent-titolo");
HEADER.appendChild(TITOLO);
//la sintassi è: parent.appendChild(child)
//per body possiamo anche non inserire un id siccome il suo rispettivo valore in JavaScript si trova con document.body
//stessa cosa per head: document.head
const BODY_ELEMENT = document.body;
const PARAGRAFO = document.createElement("p");
PARAGRAFO.innerHTML = "paragrafo aggiunto da JavaScript";
BODY_ELEMENT.appendChild(PARAGRAFO);
//come possiamo vedere appendChild porta l'elemento come ultimo figlio del tag parent

//possiamo anche rimuovere gli elementi tramite il metodo removeChild()
//per usare questo metodo dobbiamo dare l'accesso al tag parente del tag da voler rimuovere, e al tag da rimuovere stesso
//il tag parente è body, di cui già abbiamo la variabile con l'accesso
const ELEMENTO_DA_RIMUOVERE = document.getElementById("rimuovi");
//la sintassi di removeChild() è: parent.removeChild(elementoDaRimuovere)
BODY_ELEMENT.removeChild(ELEMENTO_DA_RIMUOVERE);

//essenziale per una pagina dinamica sono le interazioni con i bottoni
//per poter far interagire un bottone della pagina HTML con il file JavaScript non solo bisogna dare un id, ma anche un attributo onclick
//l'attributo onclick permette di eseguire una funzione quando il bottone viene cliccato
//il valore dell'attributo onclick deve dunque essere il nome di una funzione
const DEDICA_PARENT = document.getElementById("dedica-parent");   //non creiamo questa variabile nella funzione per renderla globale
function diciHello(nome) {
    var dedica = document.createElement("p");      //è una variabile con scope locale, dunque non ha valenza al di fuori della funzione
    dedica.innerHTML = `${nome}, stu cor mi fa semp tututtuutututtu`;
    DEDICA_PARENT.appendChild(dedica);
}
//ogni volta che si clicca il bottone con onclick viene eseguita quella funzione
function diciCiao() {
    document.getElementById("prompt").innerHTML = "ciao";
}
//siccome prompt potrebbe servirci in futuro, salviamolo in una variabile
const PROMPT = document.getElementById("prompt")

//per rendere la pagina più pulita cancelliamo tutto tramite un bottone
function cancellaTutto() {
    BODY_ELEMENT.removeChild(output);
    BODY_ELEMENT.removeChild(document.getElementById("console1"));   //siccome successivamente questi elementi non ci servono più, non li salviamo manco in variabili
    BODY_ELEMENT.removeChild(document.getElementById("bottone-dedica"));
    BODY_ELEMENT.removeChild(document.getElementById("bottone-per-dire-ciao"));
    BODY_ELEMENT.removeChild(document.getElementById("bottone-inutile"));
    BODY_ELEMENT.removeChild(document.getElementById("span-tag"));
    BODY_ELEMENT.removeChild(PARAGRAFO);
    BODY_ELEMENT.removeChild(document.getElementById("bottone-gomma"));
    PROMPT.innerHTML = "";   //con il prompt non ho tolto il tag, ma solo cancellato il suo contenuto: ci può essere utile
    TITOLO.innerHTML = "Interazioni con JavaScript: input";    //titolo per il prossimo argomento
    //DEDICA_PARENT.removeChild(dedica);    //questo non funziona, perché dedica è una funzione con scope locale
    BODY_ELEMENT.removeChild(DEDICA_PARENT);   //per questo rimuoviamo il suo parent che ha una variabile con scope globale
}
//ok, in questo caso ho rimasto solo il titolo

//ora vediamo come verificare se un elemento salvato in una variabile è un certo tag
//Per verificare se un elemento di una collezione HTML è un certo tag in JavaScript, si può utilizzare il metodo element.tagName,
//per ottenere il nome del tag dell'elemento e quindi confrontarlo con la stringa del tag desiderato.
//Per esempio, per verificare se un elemento è una div:
console.log(document.getElementById("che-tag-e").tagName);              //output: DIV
console.log(document.getElementById("che-tag-e").tagName === "DIV");    //output: true

//In alternativa si può utilizzare il metodo element.matches(tagName) per verificare se l'elemento corrisponde al tagName desiderato.
console.log(document.getElementById("che-tag-e").matches("div"));    //output: true


//ora vediamo come interagire con i tag input
//i tag input permetto di scrivere caratteri o di selezionare un range di elementi  (date, colori, ecc)
//il valore che viene scritto inserito può essere gestito in JavaScript
//per ora gestiamo i valori in text, quindi con l'attributo type="text"
//se invece vogliamo un elemento input multiline, usiamo il textarea
//vedi il file html con anche gli attributi necessari per gestire la grandezza e il tipo

//per accedere al valore inserito in un input o textarea usiamo l'istruzione .value
function inputValue() {
    const VALUE_INPUT = document.getElementById("input-element").value;
    //questo se si trova fuori da una funzione viene eseguita non appena è visualizzata la pagina
    //invece deve essere eseguito tramite un bottone dopo aver scritto ciò che si voleva scrivere
    PROMPT.innerHTML = `"${VALUE_INPUT}" è ciò che hai scritto nell'input`;
}
function textareaValue() {
    const VALUE_TEXTAREA = document.getElementById("textarea-element").value;
    PROMPT.innerHTML = `"${VALUE_TEXTAREA}" è ciò che hai scritto nel textarea`;
}

//ora vedi gli esempi tramite i link sul footer per vedere le esercitazioni
//dopodiché vedi i nuovi file script1.js e index1.html (dal footer della pagina)