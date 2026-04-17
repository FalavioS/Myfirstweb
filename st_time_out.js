let elementoSegundos = document.getElementById("tiempoElegido").value;
let elementotextoAlarma = document.getElementById("textoAlarma");
let elementoSonidoAlarma = document.getElementById("audioAlarma");

function comenzarTiempo(){
    let elementoSegundos = document.getElementById("tiempoElegido").value;
    setTimeout(tiempocumplido, elementoSegundos * 1000);

}
function tiempocumplido(){
    elementotextoAlarma.textContent = "ENCENDIDO";
    elementotextoAlarma.style.color = "green";
    elementoSonidoAlarma.play();

}