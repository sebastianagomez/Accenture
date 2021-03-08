// Ejercicio 1

var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2){
    console.log(numero1 + " No es mayor que " + numero2);
}

if (numero2 > 0){
    console.log(numero2 + " es positivo");
}

if (numero1 < 0 || numero1 !== 0){
    console.log(numero1 + " es negativo o distinto a cero");
}

if (++numero1 < numero2){
    console.log("Incrementar en 1 unidad el valor de " + numero1 + " no lo hace mayor o igual que " + numero2);
}

// Ejercicio 2

var valores = [true, 5, false, "hola", "adios", 2];

var textoMayor = valores[3] > valores[4];
    console.log(textoMayor);

var num1 = valores[1];
var num2 = valores[5];
    
var suma = num1 + num2;
console.log(suma);
    
var resta = num1 - num2;
console.log(resta);
    
var multiplicacion = num1 * num2;
console.log(multiplicacion);
    
var division = num1 / num2;
console.log(division);
   
var modulo = num1 % num2;
console.log(modulo);

// Ejercicio 3

function CadenaDeTexto(cadena) {

    var result = "La cadena \""+cadena+"\" ";
  
    if(cadena == cadena.toUpperCase()) {
      result += " está formada por mayusculas";
    } else if(cadena == cadena.toLowerCase()) {
      result += " está formada por minusculas";
    } else { 
      result += " está formada por mayusculas y minusculas";
    } 
    return result;
  }
  
console.log(CadenaDeTexto("ACCENTURE LIMITED"));
console.log(CadenaDeTexto("accenture limited"));
console.log(CadenaDeTexto("Accenture Limited"));