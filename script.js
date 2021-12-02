let palabras = ["caballero", "juego", "pescado", "morado", "camion", "genial", "sombrilla", "abandono", "esternocleidomastoideo", "ahorcado", "hogar", "traicion", "arbol", "otorrinoringolo", "salchipapas", "cundicoders", "javascript", "guitarra", "react", "programate"]
let palabraAdivinar = escogerPalabra()
let palabraOculta = [] 
let contador = 6

function escogerPalabra() {
    let numeroRandom = Math.floor(Math.random() * 20)
    let palabraEscogida = palabras[numeroRandom]
    return palabraEscogida
}
function pintarGuiones() {
    for (i = 0;i < palabraAdivinar.length ; i++) {
        let guiones = document.getElementById("guiones")
        guiones.innerHTML += "☐"
    }
}
pintarGuiones()
function validarIntento(){
    let inputUsuario = document.getElementById("letraUsuario").value
    // Obtenemos el valor que hay en el parrafo, en este caso los guiones
    parrafo = document.getElementById("guiones").textContent
    
    let opParrafo = ""
    if (palabraAdivinar.includes(inputUsuario)) {
        for (i = 0; i < palabraAdivinar.length; i++){
            if (palabraAdivinar[i] === inputUsuario) {
                opParrafo += inputUsuario
            }
            else{
               opParrafo += parrafo[i]
           }
        }
        document.getElementById("guiones").innerHTML = opParrafo
    }else{
        // el usuario fallo
        contador = contador - 1
        document.getElementById("numVidas").innerHTML=contador
        imgAhorcado(contador)
        if (contador == 0) {
            document.getElementById("resultado").innerHTML="Perdiste"
        }
    }
    if (opParrafo == palabraAdivinar){
        document.getElementById("resultado").innerHTML="Ganaste!!"
    }
    document.getElementById("letraUsuario").value=""
}

function imgAhorcado(numeroDeIntentos) {
    if (numeroDeIntentos == 5) {
        document.getElementById('ahorcado-img').src = "img/ahorcado_5.png"
    }
    else if (numeroDeIntentos == 4){
        document.getElementById('ahorcado-img').src = "img/ahorcado_4.png"
    }
    else if (numeroDeIntentos == 3) {
        document.getElementById('ahorcado-img').src = "img/ahorcado_3.png"
    }else if (numeroDeIntentos == 2) {
        document.getElementById('ahorcado-img').src = "img/ahorcado_2.png"
    }
    else if (numeroDeIntentos == 1) {
        document.getElementById('ahorcado-img').src = "img/ahorcado_1.png"
    }
    else{
        document.getElementById('ahorcado-img').src = "img/ahorcado_0.png"
    }
}