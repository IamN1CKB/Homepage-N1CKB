function pausa(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let titolo = document.getElementById("h1");
let paragrafo = document.getElementById("p");


let frase = "Gabby, come stai?";
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
