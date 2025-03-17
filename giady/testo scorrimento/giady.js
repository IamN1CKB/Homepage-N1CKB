function pausa(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let titolo = document.getElementById("h1");
let paragrafo = document.getElementById("p");


let frase = "Giada, non ti permettere di mandare questo sito agli altri"; //"Ti amo Giada";
let fraseStamp = "";
async function ciclo() {
    for (let i = 0; i < frase.length; i++) {
        let char = 32;
        while (String.fromCharCode(char) != frase[i]) {
                char++;
                titolo.textContent = fraseStamp + String.fromCharCode(char);
                await pausa(20);
            }
            
            await pausa(20);
            fraseStamp = fraseStamp + String.fromCharCode(char);
        }
        
    paragrafo.textContent = ""; //"più di tantissimo <3";
}
ciclo();
