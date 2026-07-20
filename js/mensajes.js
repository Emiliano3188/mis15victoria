const formulario = document.getElementById("formMensaje");

const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");

const errorNombre = document.getElementById("errorNombre");
const errorMensaje = document.getElementById("errorMensaje");

const contador = document.getElementById("contadorCaracteres");

/*
=============================================
CAMBIAR ESTA URL
=============================================
*/

const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbz4moqIo5w0-xb6b3jVLV8RwHJtLy93PQwBH-gik4AFYXGQ-DDWgxUj46vUncI31MR3AQ/exec";



mensaje.addEventListener("input", () => {

    contador.textContent = mensaje.value.length + " / 500";

});



formulario.addEventListener("submit", async (e) => {

    e.preventDefault();

    errorNombre.textContent = "";
    errorMensaje.textContent = "";

    const nom = nombre.value.trim();
    const men = mensaje.value.trim();

    let valido = true;

    if (nom.length < 3) {

        errorNombre.textContent = "Ingresá un nombre válido.";

        valido = false;

    }

    if (/^\d+$/.test(nom)) {

        errorNombre.textContent = "El nombre no puede contener solamente números.";

        valido = false;

    }

    if (men.length < 15) {

        errorMensaje.textContent = "Escribí un mensaje de al menos 15 caracteres.";

        valido = false;

    }

    if (men.length > 500) {

        errorMensaje.textContent = "El mensaje supera el máximo permitido.";

        valido = false;

    }

    if (!valido) return;

    try {

        const respuesta = await fetch(URL_SCRIPT, {

            method: "POST",

            body: JSON.stringify({

                nombre: nom,

                mensaje: men

            })

        });

        const resultado = await respuesta.json();

        if (resultado.ok) {

            alert("❤️ Gracias por dejarle un hermoso recuerdo a Victoria.");

            formulario.reset();

            contador.textContent = "0 / 500";

        }
        else {

            alert(resultado.error);

        }

    }
    catch (error) {

        alert("No fue posible enviar el mensaje.");

    }

});