let etàBoss = 15

while (etàBoss < 20) {
    console.log("Emanuela ha " + etàBoss  + " anni")

    if (etàBoss < 18) {
        console.log("la boss è ancora minorenne")
    } else if (etàBoss == 18) {
        console.log("LA BOSS HA FATTO DICIOTTO ANNI")
    }
    etàBoss++
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
haLaPatente(true, "D'Aniello")


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