// Ejercicio 3
/* Un alumno desea saber ¿cuál será su calificación final en una materia específica?, dicha calificación se compone de los siguientes porcentajes:
•	55% del promedio de las tres calificaciones parciales.
•	30% de la calificación del examen final.
•	15% de la calificación de un trabajo final.  */

const button = document.getElementById('button').addEventListener("click", (e) => {
    promParciales();
    porcTrabajo();
    porcPromedio();
    calFinal();
    porcExamen();
    e.preventDefault();
})
    const promParciales = () => {
        total = (parseInt(parcial1.value) + parseInt(parcial2.value) + parseInt(parcial3.value)) / 3;
        document.getElementById('tPro').value = total;
    }
    const porcTrabajo = () => {
        total = parseInt(trabajoFinal.value) * 1.5;
        document.getElementById('tPTF').value = total;
    }
    const porcPromedio = () => {
        prom = (parseInt(parcial1.value) + parseInt(parcial2.value) + parseInt(parcial3.value)) / 3;
        total = prom * 5.5;
        document.getElementById('tPar').value = total;
    }
    const calFinal = () => {
        parciales = ((parseInt(parcial1.value) + parseInt(parcial2.value)
                         + parseInt(parcial3.value)) / 3) * 0.55;
        exFinal= parseInt(examenFinal.value) * 0.30;
        tFinal = parseInt(trabajoFinal.value) * 0.15;
        total = parciales + exFinal + tFinal;
        document.getElementById('tCF').value = total;
    }
    const porcExamen = () => {
        total = 55/3;
        document.getElementById('tPEF').value = Math.round(total);
    }