/*como obtener un elemnto en el documento en el 
html por medio de los selectores */

/*para obtener un elemento por medio de una
etiqueta utilizamos la siguiente 
estructura
document hace referencia al documento HTML*/
/*este selector me sirve para obtener algun elemento por medio
de la etiqueta*/
console.log(document.getElementsByTagName("h1"))
/*obtener algun elemento html por medio de las clases*/
console.log(document.getElementsByClassName("elemento-selector"))
/*obtener algun elemento html por medio de los ids*/
console.log(document.getElementById("principal-title"))
/*para acceder a un elemento en especifico ya sea 
por etiquetas o clases podemos utilizar nuestra sintaxis de arreglos */
console.log(document.getElementsByTagName("li")[0].innerText)

let parrafo=document.getElementById("parrafo")
/*agregar contenido al parrafo*/
parrafo.textContent="hola este es mi parrafo por medio del DOM"
console.log(parrafo)
let subtitulo=document.getElementById("subtitulo")
subtitulo.textContent="este es un subtitulo agregado por medio del DOM"
console.log(subtitulo)

/*como puedo cambiar en la varible el
contenido*/
let num1=23,num2=45
parrafo.textContent=`la suma de dos numeros ingresados
manipulando el DOM es: ${num1+num2}`
console.log(subtitulo)

/*voy agregar contenido y atributos a
la etiqueta agregada*/
let parrafo2=document.createElement("p")
parrafo2.setAttribute("class","segundo_parrafo")

document.getElementsByClassName("segundo_parrafo")

/* formulario que muestra 
*/
let boton_formulario = document.getElementById("boton-formulario")
/*addEventListener podemos crearle eventos a nuestros botones*/
boton_formulario.addEventListener("click",function (){
    let nombreFormulario=document.getElementById("nombre")
    /*value permite obtener el valor que ingresa
    en una entrada de un formulario*/
    console.log(nombreFormulario.value)
    /*ahora si yo quiero imnprimir la informacion anterior
    en el html*/
    let parraforesultado=document.getElementById("resultadoFormulario")
    parraforesultado.textContent=nombreFormulario.value

})

/* ejercicio calculadora con DOM */
//obtengo por medio del DOMy el ID el elemento boton_sumar
let boton_sumar = document.getElementById("sumar")

/*cuando se le da click al boton_sumar
el ejecuta la siguiente funcion:*/
boton_sumar.addEventListener("click", function (){
    //obtenemos ID de los numeros y obtenemos con value el valor de la entrada
    let numeroUno=document.getElementById("num1").value
    let numeroDos=document.getElementById("num2").value
    /*tambien se puede imprimir los valores en la consola asi:
    console.log(numeroUno.value)
    console.log(numeroDos.value) */
    /*una vez tengo los datos realizamos la operacion suma
    y lo pasamos de string a numero con parseInt */
    resultadoSuma=parseInt(numeroUno)+parseInt(numeroDos)
    console.log(`la suma de los numero es ${resultadoSuma}`)
    alert(resultadoSuma)
    let impresionResultado=document.getElementById("resultadoCalculadora")
    impresionResultado.textContent=`el resultado de la suma es: ${resultadoSuma}`
} )

/*obtenemos el ID  del boton sumar del HTML*/
let boton_restar=document.getElementById("restar")
/*cuando se le da click en el boton restar
se ejecuta la siguiente accion*/
boton_restar.addEventListener("click", function(){
    let numeroUno=document.getElementById("num1").value
    let numeroDos=document.getElementById("num2").value
    resultadoResta=parseInt(numeroUno)-parseInt(numeroDos)
    //muestro el resultado por consola
    console.log(`el resultado de la resta es: ${resultadoResta}`)
    //muestro el resultado por el DOM
    let impresionResultado=document.getElementById("resultadoCalculadora")
    impresionResultado.textContent=(resultadoResta)
}) 

/*traemos el ID del html boton multiplicacion y lo guardamos
en una variable */
let boton_multi=document.getElementById("multiplicar")
/*creamos una funcion addEventlistener que cuando haga click en el boton multiplicacion
ejecute una accion*/
boton_multi.addEventListener("click", function(){
    let numeroUno=document.getElementById("num1").value
    let numeroDos=document.getElementById("num2").value
    //guardamos en una variable la operacion y pasamos de string a numerico los valores
    resultadoMulti=parseInt(numeroUno)*parseInt(numeroDos)
    //imprimimos en consola
    console.log(`el resultado de la multiplicacion es:${resultadoMulti}`)
    //resultado por medio de una alerta
    alert("el resultado de la multiplicacion es: " + resultadoMulti)
    //resultado en el html de forma dinamica
    let impresionRestultadoMulti=document.getElementById("resultadoCalculadora")
    impresionRestultadoMulti.textContent=(resultadoMulti)

})

/* creamos una variable donde traemosdel html el ID del boton dividir*/
let boton_dividir=document.getElementById("dividir")
//hacemos la funcion cuando escuche el click
 boton_dividir.addEventListener("click", function(){
    //llamamos del html el id de los numeros(el valor) que va a ingresar
    let numero1=document.getElementById("num1").value
    let numero2=document.getElementById("num2").value
    //hacemos la operacion de los valores ingresados
    resultadoDivision=parseInt(numero1)/parseInt(numero2)
    //resultado por consola
    console.log(`el resultado de la division es ${resultadoDivision}`)
    //resultado por alerta 
    alert("el resultado de la division es: " + resultadoDivision)
    //resultado dinamico por el DOM o html

    let impresionDOMDivision=document.getElementById("resultadoCalculadora")
    impresionDOMDivision.textContent=(`la division de los numeros ${numero1} entre ${numero2} es: ${resultadoDivision}`)
 })