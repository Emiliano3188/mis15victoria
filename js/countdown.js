//==========================================
// FECHA DEL EVENTO
//==========================================

const fechaEvento = new Date("September 05, 2026 21:00:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        document.getElementById("dias").textContent = "000";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;

    }

    const dias = Math.floor(diferencia / (1000*60*60*24));

    const horas = Math.floor((diferencia % (1000*60*60*24)) / (1000*60*60));

    const minutos = Math.floor((diferencia % (1000*60*60)) / (1000*60));

    const segundos = Math.floor((diferencia % (1000*60)) / 1000);

    document.getElementById("dias").textContent =
        String(dias).padStart(3,'0');

    document.getElementById("horas").textContent =
        String(horas).padStart(2,'0');

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2,'0');

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2,'0');

}

actualizarContador();

setInterval(actualizarContador,1000);