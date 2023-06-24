let etàboss = 15

while (etàboss < 20) {
    console.log("Emanuela ha " + etàboss  + " anni")

    if (etàboss < 18) {
        console.log("la boss è ancora minorenne")
    } else if (etàboss == 18) {
        console.log("LA BOSS HA FATTO DICIOTTO ANNI")
    }
    etàboss++
}

console.log("boss")


function funzione_boss(){
    console.log("ti voglio tantissimo bene")
    console.log("boss mi abbraccia all'improvviso")
}
funzione_boss()
console.log("boss")
funzione_boss()

function gionnie() {
    console.log("gionny bello")
}
if (1!=1) {
    console.log("boh")
} else {
    console.log("bohh")
    gionnie()
}

function gymbro(nome) {
    console.log(nome + " è grosso")
}

function haLaPatente(patente, nome) {
    if (patente) {
        console.log(nome + "ha la patente")
    } else {
        console.log(nome + "non ha la patente")
    }
    gymbro("salvatore")
}
haLaPatente(true, "d'aniello")


function èPariODispari(numero) {
    if ((numero%2)==0) {
        console.log(numero + " è pari")
    } else if ((numero%2)==1) {
        console.log(numero + " è dispari")
    } else {
        console.log(numero + " non è un numero intero")
    }
}
èPariODispari(37)
èPariODispari(6)
èPariODispari(4.4)

console.log(4.4%2)