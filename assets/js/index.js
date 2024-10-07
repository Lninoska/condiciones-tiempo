
function diadepicnic() {
    let grados = Number (prompt("¿Cuál es la temperatura actual en grados Celsius?"));

    let soleado = prompt("¿Está lloviendo (responde sí o no)")=== "no";

    let tiempo = Number(prompt("¿Cuántos minutos tienes disponibles para el picnic?"));

    let resultado = (grados >= 12 && grados <= 30)?
                !soleado ? "Esta lloviendo":
                (tiempo >= 90) ? "Es buen momento para hacer un picnic": "No tienes suficiente tiempo para hacer un picnic": "La temperatura no es adecuada para un picnic";
    alert (resultado)
} 

diadepicnic()


