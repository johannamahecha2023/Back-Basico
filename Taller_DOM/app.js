/*Ejercicios
1. Declaración de variables:
a. Define una variable llamada nombre y pídele al usuario que ingrese su nombre..
b. Define una variable llamada edad y pídele al usuario que ingrese su edad.
c. Luego, muestra un mensaje de saludo en un alert usando esas variables.
Pista: Puedes utilizar alert y prompt para mostrar y pedir esta información.*/

//traiga el id del html y guardelo en esta variable nombre

let enviar=document.getElementById("enviar")

//escuche lo que esta en la variable nombre y cuando haga click en enviar,haga un saludo
enviar.addEventListener("click", function(){
    let nombre=document.getElementById("nombre").value
    let edad=document.getElementById("edad").value

    //impreso en consola
    console.log(`Hola ${nombre} tienes ${edad} años, edad perfecta para 
        ingresar a nuestro club de fans de JS`)
    //impreso en el browser
    
    let impresionSaludo=document.getElementById("saludo")
    impresionSaludo.textContent=`hola ${nombre} tienes ${edad} años, la edad perfeta para
    conocer el universo de JS vamos!!!`
}
)
    //impreso en prompt
     let nom=prompt("ingresa tu nombre")
     let ano=prompt("ingresa tu edad")
     alert(`hola ${nom} tienes ${ano} años, la edad perfeta para
    conocer el universo de JS vamos!!! `)
    
/* 2. Declara una constante llamada PI y asígnale el valor de 3.1416. Luego, calcula el área de un
círculo utilizando esta constante y muestra el resultado.*/
    

    let hallar=document.getElementById("hallar")
    
    hallar.addEventListener("click", function(){
        const PI = 3.141516;
        let radio=document.getElementById("radio").value
        operacion=PI*(radio*radio)
        let impresionResultado = document.getElementById("areaCirculo")
        impresionResultado.textContent=`el area del circulo es: ${operacion}`
    })
/*Ejercicios
1. Pide al usuario que ingrese dos números y realiza una operación matemática (suma, resta,
multiplicación o división) con ellos. Muestra el resultado.
2. Con los dos mismo números que pediste en el punto anterior, ¿como podrias realizar la
operacion de raiz cuadrada y de potencia?*/
let suma= document.getElementById("suma")
let resta= document.getElementById("resta")
let multiplicacion= document.getElementById("multiplicacion")
let division= document.getElementById("division")
let raiz= document.getElementById("raiz")
let potencia= document.getElementById("potencia")

suma.addEventListener("click",function(){
    let num1=prompt("ingrese el primer numero")
    let num2=prompt("ingrese el segundo numero")

    operacionSuma=parseFloat(num1)+parseFloat(num2)

    let imprimirSuma=document.getElementById("ResultadoOperacion")
    imprimirSuma.textContent=`la suma de los numeros ingresados es: ${operacionSuma}`
})
resta.addEventListener("click",function(){
    let num1=prompt("ingrese el primer numero")
    let num2=prompt("ingrese el segundo numero")

    operacionResta=parseFloat(num1)-parseFloat(num2)

    let imprimirResta=document.getElementById("ResultadoOperacion")
    imprimirResta.textContent=`la resta de los numeros ingresados es: ${operacionResta}`
})

multiplicacion.addEventListener("click",function(){
    let num1=prompt("ingrese el primer numero")
    let num2=prompt("ingrese el segundo numero")
    operacionMulti=parseFloat(num1)*parseFloat(num2)

    let impresionRestultadoMult=document.getElementById("ResultadoOperacion")
    impresionRestultadoMult.textContent=`el resultado de la multiplicacion es: ${operacionMulti}`
})

let divi=document.getElementById("division")

divi.addEventListener("click", function(){
    let num1=parseInt(prompt("ingrese el numero dividendo"))
    let num2=parseInt(prompt("ingrese el numero divisor"))
    operacionDivision=num1/num2
    
    let impresionDivi=document.getElementById("ResultadoOperacion")
    impresionDivi.textContent=`la division de los numeros es ${operacionDivision}`
})

let raix=document.getElementById("raiz")

raix.addEventListener("click", function(){
    let num1=parseInt(prompt("ingrese el numero"))
    operacionDivision=Math.sqrt(num1)
    
    let impresionDivi=document.getElementById("ResultadoOperacion")
    impresionDivi.textContent=`la division de los numeros es ${operacionDivision}`
})
potencia.addEventListener("click", function(){
    let num1=parseInt(prompt("ingrese el numero Base"))
    let num2=parseInt(prompt("ingrese el numero exponente"))
    potencia=Math.pow(num1,num2)
    
    let impresionpotencia=document.getElementById("ResultadoOperacion")
    impresionpotencia.textContent=`la division de los numeros es ${potencia}`
})

/*Genera un número aleatorio entre 1 y 100 con el metodo Math.random() y permite al
usuario adivinarlo. Proporciona pistas (mayor o menor) y muestra cuántos intentos le llevó
al usuario adivinarlo.
2. Pide al usuario un número y muestra la tabla de multiplicar de ese número del 1 al 10*/
let botonenviar=document.getElementById("Generar")

    botonenviar.addEventListener("click", function(){
        let numeroaleatorio= Math.floor(Math.random() * 100) + 1;

        let ingrese=document.getElementById("ingrese")
        ingrese.textContent=`ingrese el numero que cree que se genero entre 1 a 100`

        let num=parseInt(document.getElementById("numero"))
        
        for (let i = 0; i < 10; i++) {
                ;  
        }
        if (num===numeroaleatorio) {
        intento.textContent=`adivinaste el numero ${num} es igual al numero
        secreto ${numeroaleatorio} y el numero de instentos fue ${numerodeintentos}`
        } else {
            
        }

    
    })


   