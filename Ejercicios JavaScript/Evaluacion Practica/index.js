const nombreTienda = "Fraluxs";
const producto1 = "Monster";
const producto2 = "Red Bull";
const productoPrecio1 = 150;
const productoPrecio2 = 120;
const codigoDesc = 1905;

function bienvenido () {
    alert (`${nombreTienda}:\n !Bienvenido a la mejor tienda!`);
    let nombre = nombreCliente ();
    let email = emailCliente ();
    let DNI = dniCliente();
    let fechaNac = fechaNacCliente();
    let greeting = "Hola, " + nombre + ". Espero que puedas encontrar lo que necesites.";
    alert(greeting);

// Nombre del Cliente:

function nombreCliente() {
    let nombre = prompt("Ingresá tu nombre");
    let validar = esNombreValido(nombre);

    while (!validar) {
        nombre = prompt("Ingresá tu nombre");
        validar = esNombreValido(nombre);
    }
    return nombre;
}
function esNombreValido(nombre) {
    if (nombre.length > 30) {
        alert("El nombre no puede superar los 30 caracteres.");
        return false;
    }
    return true;
}

// Email del Cliente

function emailCliente() {
    let email = prompt("Ingresá tu email");
    let validar = emailValido(email);

    while (!validar) {
        email = prompt("Ingresá tu email");
        validar = emailValido(email);
    }
}
function emailValido(email) {
    if (!formatoEmailValido(email)) {
        alert("La dirección de email es incorrecta.");
        return false;
    }
    return true;
}
function formatoEmailValido(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}

// DNI del Cliente

function dniCliente() {
    let DNI = parseInt(prompt("Ingresá tu DNI: "));
    while (isNaN(DNI) || DNI < 10000000 || DNI > 99999999) {
        DNI = parseInt(prompt("DNI invalido. Ingresá tu DNI: "));
    }
    return DNI;
}

// Fecha Nacimiento del Cliente

function fechaNacCliente() {
    let dia = Dia();
    let mes = Mes();
    let year = Year();
    let fecha = mes + "/" + dia + "/" + year;
    let edad = calcularEdad(fecha);

    while (edad < 18) {
        alert("Debés ser mayor de 18 años para poder comprar.");
        dia = Dia();
        mes = Mes();
        year = Year();
        fecha = mes + "/" + dia + "/" + year;
        edad = calcularEdad(fecha);
    }
    return fecha;
}

function Dia() {
    let dia = parseInt(prompt("Ingresá tu día de nacimiento"));
    while (dia < 1 || dia > 31 || isNaN(dia)) {
        dia = parseInt(prompt("Día inválido. Ingresá tu día de nacimiento"));
    }
    return dia;
}

function Mes() {
    let mes = parseInt(prompt("Ingresá tu mes de nacimiento"));
    while (mes < 1 || mes > 12 || isNaN(mes)) {
        mes = parseInt(prompt("Mes inválido. Ingresá tu mes de nacimiento"));
    }
    return mes;
}

function Year() {
    let year = parseInt(prompt("Ingresá tu año de nacimiento"));
    while (year < 1900 || year > 2020 || isNaN(year)) {
        year = parseInt(prompt("Año inválido. Ingresá tu año de nacimiento"));
    }
    return year;
}

function calcularEdad(fechaString) {
    var cumpleanos = +new Date(fechaString);
    return Math.floor(((Date.now() - cumpleanos) / (31557600000)));
}

// Mostrar  el Producto

function mostrarProducto(producto) {
    alert(`Nuestros productos en promoción:\n\nProducto ${producto.id}\nNombre: ${producto.nombre}\nDescripción: ${producto.descripcion}\nPrecio x unidad: $${producto.precio}\n\n`);
}

let promos = [new Producto(1, producto1, "Monster Energy Drink (Yellow)", 0, productoPrecio1), 
              new Producto(2, producto2, "Red Bull Energy Drink", 0, productoPrecio2)];

mostrarProductos(promos);
for (let i = 0; i < promos.length; i++) {
    const element = promos[i];
    comprarArticulo(promos, promos[i], promos[i].id);
}

function Producto(id, nombre, descripcion, unidades, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.unidades = unidades;
    this.precio = precio;
    this.subtotal = function () {
        return this.unidades * this.precio;
    }
}

function mostrarProductos(productos) {
    for (let i = 0; i < productos.length; i++) {
        mostrarProducto(productos[i]);
    }
}

// Vender los Productos

function comprarArticulo(articulos, articulo, id) {
    let deseaComprar = confirm(`¿Deseás comprar la bebida ${articulo.nombre}?`);
    let cantidad;

    if (!deseaComprar) {
        return false;
    }

    cantidad = parseInt(prompt("Ingresá la cantidad de unidades que querés comprar"));
    while (cantidad < 1 || isNaN(cantidad)) {
        cantidad = parseInt(prompt("Dato invalido. Ingresá la cantidad de unidades que querés comprar"));
    }

    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].id === id) {
            articulos[i].unidades = cantidad;
            return true;
        }
    }
}

// Calcular el precio de los Productos por vender

let total = calcularTotal(promos);
mostrarSubtotales(promos);
alert(`Total x compra final $${total}`);

function mostrarSubtotales(productos) {
    for (let i = 0; i < productos.length; i++) {
        alert(`Subtotal x ${productos[i].nombre} = $${productos[i].subtotal()}`);
    }
}

function calcularTotal(productos) {
    let acumTotal = 0;
    for (let i = 0; i < productos.length; i++) {
        acumTotal += productos[i].subtotal();
    }
    return acumTotal;
}

// Pagos en cuotos por Tarjeta de Credito

let cuotas = 1;
let pagos = 0;
let abonaCredito = confirm("¿Deseás abonar con tarjeta de credito?");
if (abonaCredito) {
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas, maximo 6."));
    while (isNaN(cuotas) || cuotas < 1 || cuotas > 6) {
        cuotas = parseInt(prompt("Dato invalido. Ingrese la cantidad de cuotas, máximo 6."));
    }
    pagos = total / cuotas;
    alert(`Aboná en ${cuotas} pagos sin interés de $${pagos}`);
} else {
    alert(`Aboná en un solo pago de $${total}`);
}

// Cupon de Descuento

let descuento;
let confirmacion = confirm("¿Deseás agregar un cupón de descuento? (Pista: Año que se fundó Boca Juniors)");
if (confirmacion) {
    descuento = validarCodigo(codigoDesc);

    if (descuento) {
        total = total - (total * 0.25);
        alert(`Total x compra final con descuento del 25% = $${total}`);
    }
}

function validarCodigo(codigo) {
    let intento = parseInt(prompt("Ingresá el codigo de descuento"));

    if (codigo === intento) {
        alert("!Bien ahí! tenes un codigo de descuento del 25%");
        return true;
    } else {
        alert("Cupón invalido");
        return false;
    }
}

// Ticket de la Compra

imprimirDetalle(promos, descuento, abonaCredito, cuotas, pagos);

function imprimirDetalle(productos, desc, confirmacionCred, cuotas, pagos) {
    let total = calcularTotal(productos);
    alert("A continuación vas a poder ver el resumen:");
    document.write("Detalle de compra\nSubtotales: ");
    for (let i = 0; i < productos.length; i++) {
        document.write("<br/>" + `${productos[i].nombre}: $${productos[i].subtotal()}\n`);
    }
        document.write("<br/>" + `Total: $${total}\n`);

    if (desc) {
        total = total - (total * 0.25);
        document.write("<br/>" + `Tiene un descuento del 25%, abonando un total de $${total}\n`);
    }

    if (confirmacionCred) {
        document.write("<br/>" + `Abona en ${cuotas} pagos sin interés de $${total}\n`);
    } else {
        document.write("<br/>" + `Abona en efectivo un total de $${total}\n`);
    }
}

alert("Gracias por comprar en el mejor lugar, " + nombre + ", nos vemos!.");

}
