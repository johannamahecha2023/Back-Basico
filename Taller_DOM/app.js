/* VARIABLES Y CONSTANTES Ejercicios
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
     let nom=prompt("como te llamas")
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
/* OPERADORES Ejercicios
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

/* ESTRUCTURAS DE CONTROL Genera un número aleatorio entre 1 y 100 con el metodo Math.random() y permite al
usuario adivinarlo. Proporciona pistas (mayor o menor) y muestra cuántos intentos le llevó
al usuario adivinarlo.*/
let botonenviar=document.getElementById("Generar")

    botonenviar.addEventListener("click", function(){
        let numeroaleatorio= Math.floor(Math.random() * 100) + 1;
        console.log(numeroaleatorio)

        let ingrese=document.getElementById("ingrese")
        ingrese.textContent=`ingrese el numero que cree que se genero entre 1 a 100`
        
        let i=0;
        let enviar=document.getElementById("envia")
       
        enviar.addEventListener("click", function(){
            let num=parseInt((document.getElementById("numero").value))
            i++;
    
            if (num === numeroaleatorio) {
                console.log("adivinaste")
                let intento=document.getElementById("intento")
                intento.textContent=`adivinaste!!! el numero ${num} es igual al numero
                secreto ${numeroaleatorio}, el numero de intentos fue ${i}`
                console.log(`el numero de intentos fue ${i}`)
                
                } else {
                if (num>numeroaleatorio) {
                    intento.textContent=`pista... el numero secreto es menor que ${num}` 
                    console.log(`pista... el numero secreto es menor que ${num}`)
                } else {
                    intento.textContent=`pista... el numero secreto es mayor que ${num}`
                    console.log(`pista... el numero secreto es mayor que ${num}`)
                }
                intento.textContent=`siga intentando, numero de intentos ${i}` 
                console.log("siga intentando") 

                }
        })
    })
     /* Pide al usuario un número y muestra la tabla de multiplicar de ese número del 1 al 10 */
       
    let tabla= document.getElementById("Tabla")

    tabla.addEventListener("click", function(){
        let numTabla=parseInt(document.getElementById("numTabla").value)
        let tablaMultiplicar;
        let i=1
        let resul;
        let resultado=""
        for (i;  i<11; i++) {
           resul= ((numTabla)*(i))
           tablaMultiplicar=resul
           console.log(`${numTabla}*${i} = ${tablaMultiplicar}`)
           resultado+=(`${numTabla}*${i} = ${tablaMultiplicar}<br>`) 
 

        } 
        let tab=document.getElementById("tab")
        tab.innerHTML = resultado ;
    })
    /* FUNCIONES Crea una función que reciba el año de nacimiento del usuario como argumento y calcule
    su edad. Muestra la edad.*/
     let calcular=document.getElementById("calcular")
     let fecha
     calcular.addEventListener("click", function(){
          let anoNacimiento=parseInt(document.getElementById("anoNacimiento").value)
          const actual=2024
          fecha =actual-anoNacimiento
        let eda= document.getElementById("eda")
        eda.textContent=`su edad es: ${fecha}`
        console.log(`su edad es: ${fecha}`)
     }
    )
    /* Escribe una función que tome un número como argumento y devuelva la suma de todos
    los números desde 1 hasta ese número. Por ejemplo, si el usuario ingresa 5, la función
    debería devolver 1+2+3+4+5=15 */
  
    let sumr=document.getElementById("sumr")
    
    sumr.addEventListener("click",function(){
        let numFin=parseInt(document.getElementById("numFin").value)
        function sum(numFin) {
            let sumi=0;
            let cont=""
            for (let i = 1; i<=numFin; i++) {
                sumi+=i;
                cont+=`${i} + `
            }
            
            return `${cont} es = ${sumi}`
        } 
        let total=document.getElementById("total")
        total.textContent=sum(numFin);
    })
/* ARREGLOS 
1. Crea una lista de tareas utilizando un array. Permite al usuario agregar, eliminar y listar
tareas.*/

const tareas=["caminar","bañarse","vestirse","comer"];

tareas.forEach(dato => {
    console.log(`${dato}`)
});

let agregar=document.getElementById("agregar")
agregar.addEventListener("click", function(){
    let tarea=document.getElementById("tarea").value
    tareas.push(tarea)

    let lista=document.getElementById("lista")
    lista.textContent=tareas
})
let eliminar=document.getElementById("eliminar")
    eliminar.addEventListener("click", function(){
    let tarea=document.getElementById("tarea").value
    tareas.pop(tarea)

    let lista=document.getElementById("lista")
    lista.textContent=tareas
})

/*2. Crea un programa que calcule el promedio de calificaciones ingresadas por el usuario en
un array.*/

let promAlgebra=[];

let mas=document.getElementById("mas")
mas.addEventListener("click", function(){
    let nota=parseInt(document.getElementById("nota").value)
    promAlgebra.push(nota);
    console.log(promAlgebra)
    let listanotas=document.getElementById("listanotas")
    listanotas.innerHTML = promAlgebra.map(nota => `Nota: ${nota}`).join("<br>");
})


let menos=document.getElementById("menos")
menos.addEventListener("click", function(){
    let nota=parseInt(document.getElementById("nota").value)
    promAlgebra.pop(nota);
    console.log(promAlgebra)
    let listanotas=document.getElementById("listanotas")
    listanotas.innerHTML = promAlgebra.map(nota => `Nota: ${nota}`).join("<br>");
})

let promedio=document.getElementById("promedio")
promedio.addEventListener("click",function(){
    let prom=0;
    let totl;
    for (let i = 0; i<promAlgebra.length; i++) {
        prom+=(promAlgebra[i])
        }
        totl=prom/promAlgebra.length;
        console.log(`el promedio de algebra quedo en: ${totl}`) 
        let notapromedio=document.getElementById("notapromedio")
        notapromedio.textContent=`el promedio de algebra quedo en: ${totl}`
    });
/*1. Crea un objeto llamado estudiante con propiedades como nombre, edad y curso. Muestra
estas propiedades en la consola.*/
const estudiante={
    nombre: "Johanna",
    apellido:"Mahecha",
    edad: 28,
    curso:{
       Materia:"Backend-Basico",
       creditos:4,
       Profesora:"liliana herrera"
    }
}
console.log(`hola soy ${estudiante.nombre} ${estudiante.apellido}, tengo ${estudiante.edad}, aprendi mucho en el
    curso de ${estudiante.curso.Materia} con la profe ${estudiante.curso.Profesora}
    me fue bien en la materia, gracias a Dios , por que es de ${estudiante.curso.creditos}
    creditos`)
/*2. Define una clase llamada Producto que tenga propiedades como nombre, precio y
cantidad. Crea instancias de la clase y muestra los detalles de los productos. */
//clase
class Producto {
    constructor(nombre,precio,cantidad) {
        this.nombre=nombre
        this.precio=precio
        this.cantidad=cantidad
    }
    vender(){
        return `Bienvenido le ofrezco ${this.nombre}
        a tan solo $ ${this.precio} pesos colombianos, y 
        solo me quedan ${this.cantidad} unidades `
    }
    comer(){
        return `Ventaaa venta!! de ${this.nombre},
        a $${this.precio}, aproveche tan solo quedan ${this.cantidad} unidades`
    }
    jugar(){
        return `estoy jugando con el ${this.nombre}
        valio $ ${this.precio} pesos y tengo solo ${this.cantidad},controles`
    }
}
//instancias
const TiendanLaChula= new Producto("helados",5000,3)
console.log(TiendanLaChula.vender())
const TiendaExito= new Producto("Croassants",3500,5)
console.log(TiendaExito.comer())
const tecnology = new Producto("X-BOX",1030000,2)
console.log(tecnology.jugar())
const tv = new Producto("televisor",600000,1)
console.log(tv.jugar())
/* JSON Y API FETCH 
1. Crea un objeto JSON con información de tu top 10 de películas que te gusten. Puedes en el
JSON poner propiedades como:
NombrePelicula
Descripcion
Genero
Año
Reparto*/ 

const pelicula1={
    NombrePelicula: "Milagro en la celda 7",
    Descripcion: "Memo",
    Genero:"Amor",
    año:"2020",
    reparto:"accidente"
}
const pelicula2={
    NombrePelicula: "Hasta el ultimo hombre",
    Descripcion: "fel",
    Genero:"accion",
    año:"2007",
    reparto:"accidente"
 }
const pelicula3={ 
    NombrePelicula: "la milla verde",
    Descripcion: "cor",
    Genero:"Melodrama",
    año:"2012",
    reparto:"guerra"
 }
const pelicula4=  {
    NombrePelicula: "Sueños de Libertad",
    Descripcion: "axi",
    Genero:"Melodrama",
    año:"1958",
    reparto:"accidente"
 }
const pelicula5= {
    NombrePelicula: "jumping",
    Descripcion: "amor",
    Genero:"Amor",
    año:"2008",
    reparto:"concursos"
 }
const pelicula6=    
 {
    NombrePelicula: "el drepredador",
    Descripcion: "hum",
    Genero:"accion",
    año:"2010",
    reparto:"salvador"
 }
const pelicula7=
{
    NombrePelicula: "Milagro en la celda 7",
    Descripcion: "Memo",
    Genero:"Amor",
    año:"2020",
    reparto:"accidente"
 }
const pelicula8= {
    NombrePelicula: "Milagro en la celda 7",
    Descripcion: "Memo",
    Genero:"Amor",
    año:"2020",
    reparto:"accidente"
 }

const pelicula9={
  NombrePelicula: "Milagro en la celda 7",
  Descripcion: "Memo",
  Genero:"Amor",
  año:"2020",
  reparto:"accidente"
 }
const pelicula10=  {
    NombrePelicula: "Milagro en la celda 7",
    Descripcion: "Memo",
    Genero:"Amor",
    año:"2020",
    reparto:"accidente"
 }


/*2. Realiza una solicitud HTTP utilizando la función fetch() al JSON que creaste de peliculas y
muestra la informacion del JSON en consola.*/
let objetoPasaAJson1=JSON.stringify(pelicula1)
console.log(objetoPasaAJson1)
let pasaDeJsonAobjeto1=JSON.parse(objetoPasaAJson1)
console.log(pasaDeJsonAobjeto1)
let objetoPasaAJson2=JSON.stringify(pelicula2)
console.log(objetoPasaAJson2)
let pasaDeJsonAobjeto2=JSON.parse(objetoPasaAJson2)
console.log(pasaDeJsonAobjeto2)
let pasaDeObjetoAJson3=JSON.stringify(pelicula3)
console.log(pasaDeObjetoAJson3)
let pasaDeJsonaObjeto3=JSON.parse(pasaDeObjetoAJson3)
console.log(pasaDeJsonaObjeto3)

//paso todos los objetos faltantes a JSON
let pasaDeObjetoAJson4=JSON.stringify(pelicula4)
console.log(pasaDeObjetoAJson4)
let pasaDeObjetoAJson5=JSON.stringify(pelicula5)
console.log(pasaDeObjetoAJson5)
let pasaDeObjetoAJson6=JSON.stringify(pelicula6)
console.log(pasaDeObjetoAJson6)
let pasaDeObjetoAJson7=JSON.stringify(pelicula7)
console.log(pasaDeObjetoAJson7)
let pasaDeObjetoAJson8=JSON.stringify(pelicula8)
console.log(pasaDeObjetoAJson8)
let pasaDeObjetoAJson9=JSON.stringify(pelicula9)
console.log(pasaDeObjetoAJson9)
let pasaDeObjetoAJson10=JSON.stringify(pelicula10)
console.log(pasaDeObjetoAJson10)