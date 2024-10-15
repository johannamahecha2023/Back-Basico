/*Funcion declarada.
Son funciones que forman parte del ámbito global del programa, que para que se ejecuten se debe hacer un llamado a la función, independientemente de donde se declaren se pueden ser llamadas desde cualquier parte del código.
*/

//Funcion declarada sin parametros y sin valor de retorno

console.log("-----------------------------------------------------")

function estoEsUnaFuncion(){
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

//Ivocacion de la funcion

estoEsUnaFuncion();

//Funcion declarada con parametros y valor de retorno

console.log("-----------------------------------------------------")

function saludar(nombre, edad){
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`
}

console.log(saludar("Amparo", 39));

//Asignación de valores por defecto a una funciones

console.log("-----------------------------------------------------")

function carrera(nombre="desconocido", carrera="desconocido"){
    return console.log(`Hola, mi nombre es ${nombre} y estudié ${carrera}`)
}

carrera("Juan", "desarrollo de web")
carrera(); //Cuando no se agrega parametro muestra el valor asignado en la funcion

//-------------------------------------------------------------------------------
/*Funciones expresadas o anonimas.
Las funciones expresadas hacen parte del ámbito concreto del programa, es decir, estas funciones no existen hasta que la expresión que las genera es ejecutada. Se consideran una buena practica de programación para tener el código ordenado*/

console.log("--------------------Función Expresada-----------------------");
const funcionExpresada = function(){
    return console.log("Esta es una función expresada!");
}

funcionExpresada();

/*Funciones anonimas autoejecutables (IIFE).
Son funciones que se ejecutan al momento de crearlas. Su sintaxis es la siguiente:
(function (parametros){//contenido de la funcion})(parametros);
*/

console.log("----------Funciones anonimas autoejecutables (IIFE)-------------");

(function (){
    console.log("Mi primera funcion anonima autoejecutable (IIFE)");
})();

(function (c){
    c.log("Mi segunda funcion anonima autoejecutable (IIFE) con parametros");
})(console);