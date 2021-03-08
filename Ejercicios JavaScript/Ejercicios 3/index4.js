// Ejercicio 4
/* Supongamos que se desea invertir una cantidad X de pesos en un sistema de ahorro que 
otorga el 33.5% Anual de interés efectivo, realice un programa que informe ¿cuál es el interés en pesos 
que se va a ganar por mes? y ¿cuál es el total que debe recibirse por 3 meses? */

plazoFijo();

function plazoFijo() {

    let inversion = parseInt(prompt("Ingrese el monto de inversión:"))
    let interesMen = calcularInteres(inversion, 33.5, 30);
    let interesTrim = calcularInteres(inversion, 33.5, 90);

    document.write("Usted al invertir $" + inversion + " va a ganar estos intereses: ")
    document.write(`Interés en pesos generado por mes: $${interesMen}` + " ");
    document.write(`Interés en pesos generados en tres meses: $${interesTrim}`);
}


function calcularInteres(capital, razon, tiempo) {
    return ((capital * razon * tiempo) / (365 * 100)).toFixed(2);
}