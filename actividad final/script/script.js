

function actualizarReloj() {
    let ahora = new Date();


    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();


    if (horas < 10) { horas = "0" + horas; }
    if (minutos < 10) { minutos = "0" + minutos; }
    if (segundos < 10) { segundos = "0" + segundos; }



    let textoReloj = horas + " : " + minutos + " : " + segundos;
    document.getElementById("reloj").textContent = textoReloj;

    setTimeout("actualizarReloj()", 1000);}



// slideshow

let imagenActual = 0; 

function pasarImagenes() {

    let imagenes = document.getElementsByClassName("foto-slide");

    if (imagenes.length === 0) {
        return;
    }

    imagenes[imagenActual].classList.remove("visible");

    imagenActual = imagenActual + 1;

    if (imagenActual >= imagenes.length) { 
        imagenActual = 0;
    }

    imagenes[imagenActual].classList.add("visible");

    let contador = document.getElementById("slide-contador");
    if (contador) {
        contador.textContent = (imagenActual + 1) + " / " + imagenes.length;
    }

    setTimeout("pasarImagenes()", 3000);}







function enviarFormulario() {
    // Recogemos el valor de cada campo
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;


    if (nombre === "" || email === "" || mensaje === "") {
        alert("Rellena todos los campos obligatorios");
    } else {
        alert("Mensaje enviado, gracias " + nombre + ". te respondere pronto.");
    }}





actualizarReloj();  
pasarImagenes();    
