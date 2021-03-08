// Ejercicio 1

var num1 = prompt("Type a number: ");
var nuevoArray = Array.from(String(num), Number);

function Incrementar (array) {

  for (var i = 0 ; i < nuevoArray.length ; i++){
    nuevoArray[i] = array[i] + 1;
  }
  return nuevoArray;
}

// Ejercico 2

var num2 = prompt("Type a number: ");
var nuevoArray2 = Array.from(String(num2), Number);

    for ( let i = 0; i <= nuevoArray2.length; i++) {
        if (i % 2 === 0) 
            nuevoArray2.push(0);
        else 
            nuevoArray2.push(i);
    }

// Ejercicio 3

function ValorMaximo () {

var x = [10 , 24, 36, 7, 98, 11, 14, 20];

return Math.max.apply(null, x);

}

// Ejercicio 4

var array1 = [10 , 24, 36, 7, 98, 11, 14, 20];

function Posicion() {
    
    for ( let i = 0; i < array1.length; i++){
        if (Math.max.apply(null, array1)) 
            return array1;
    }

}

// Ejercicio 5

x = [10,24,36,7,98,11,14,20,98,14,10],


// Ejercicio 6


x = ["a", "l", "f", "a"]
y = ["a", "l", "f", "a", "j", "o", "r"]

function SonIguales () {
    
    if (x !== y){
        return "No son iguales";
    }   else {
        return "Son iguales";
    }
}

function ArrayMasLargo (){

    if (x.length > y.length){
        return "Array X es mas largo";
    }   else {
        return "Array Y es mas largo";
    }
}

function LetrasEnComun (){

}

// Ejercicio 7

datos1 = ["Fido","Gomez",26, 1500078,true];
datos2 = ["Gervasio","Fernandez",32, 28550,false]

function Edad () {

    if ( datos1[2] < datos2[2]){
        return "Fido Gomez es mas viejo";
    } else {
        return "Gervasio Fernandez es mas viejo";
    }
}

function Casado (){

    if (datos1[datos1.length -1] === true || datos2[datos2.length -1] === true){
        return "Está casado";
    } else {
        return "No está casado";
    }
}

function AumentoDeFido (){

    var a = datos2[3];
    var formula = a * 0.125;
    var result =  datos1[3] + formula;

    return "Fido va a cobrar " + result;
}


