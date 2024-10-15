class Mascota { //Definicion de una clase 
    //el constructor no es mas que el molde o la plantilla para los atributos de mis objetos que cree con la clase 
    //instanciar no es mas que crear un nuevo objeto por medio de la clase
    constructor(nombre,edad,adoptada){
    //this hace referencia a la misma clase
    //estos son los atributos o propiedades que van a compartir todas las mascotas que cree con la clase mascota
    this.nombre=nombre
    this.edad=edad
    this.adoptada=adoptada
    }
    //vamos a crear/definir un metodo y esto se hace por fuera del constructor
    comer(){
        return "estoy comiendo"
    }
    moverse(){
        return "estoy en movimiento"
    }
    saludar(){
        return "hola, soy una mascota"
    }

}
const chula =new Mascota("chula",5)
console.log(chula)
const simba =new Mascota("Simba",3)
console.log(simba)

//asignar nueva informacion a la clase
chula.adoptada=true

//acceder a informacion de las propiedades 
console.log(`chula es adoptada ${chula.adoptada} `)

//herencia: me va a heredar tanto como los atributos como los metodos de mi clase padre
class Perro extends Mascota{
   constructor(nombre,edad,adoptada,tamanio){
    //super es el metodo que va a llamar el contructor de la clase padre
    super(nombre,edad,adoptada)
    this.tamanio=tamanio
   }
   ladrar(){
    return "guf guf"
   }
   //sobreescritura del metodo saludar
   saludar(){
    return `hola soy un perro y mi nombre es ${this.nombre}`
   }
}
const Chula =new Perro("chula",4,true,"mediana")
const Tinny = new Perro("Tinny",5,false,"mediano")
console.log(Tinny)
//accediendo a metodos de su clase padre
console.log(Tinny.comer())
//accediendo a los metodos de la clase hijo
console.log(Tinny.ladrar())
console.log(Chula.saludar())



//actividad crear dos clases a partir de la clase padre mascota 
 class gato extends Mascota{
    constructor(nombre,edad,adoptada,reflejos,cambiojos){
        super(nombre,edad,adoptada)
        this.reflejos=reflejos
        this.cambiojos=cambiojos
    }
    ronronear(){
        return "gurr gurr"
    }
    //sobreecribir un metodo
    saludar(){
        return `hola soy un gato y mi nombre es ${this.nombre}`
    }
    
 }
  
 const DonGuevon= new gato("DonGuevon",6,true,true,true)
 console.log(DonGuevon.ronronear())
 console.log(DonGuevon)
 console.log(DonGuevon.saludar())

class ave extends Mascota{
    constructor(nombre,edad,adoptada,canta,vuela){
    super(nombre,edad,adoptada)
    this.canta=canta
    this.vuela=vuela
    //plumas inicialmente esta vacio
    this.plumas=null
    }
    volar(){
        return "estoy volando"
    }
    cantar(){
        return " lalalala estoy cantando"
    }
    //Setters y Getters 
    //Get obtiene algun valor de la clase
    get getvolar(){
        return this.volar
    }

    //set es el metodo que permite modificar el valor de alguna propiedad de la clase
    set setplumas(plumas){
        this.plumas=plumas
    }
    get getplumas(){
        return this.plumas
    }
    
}

const Chipi = new ave("chipi",9,false,true,true)
const fluit = new ave("fluit",3,true,true,true)
console.log(Chipi)
console.log(fluit)
console.log(Chipi.cantar())
console.log(fluit.getvolar())

Chipi.setplumas="Largas"
console.log(Chipi.getplumas)

/*taller de objetos 
1. Tenga un objeto carro con las siguientes propiedades:
1. Marca.
2. Modelo.
3. Año.
4. Color.
2. Agregue al objeto carro la función de descripción en la cual imprima lo siguiente:
“Hola! Mi marca es marca, soy modelo modelo año y mi color es color”
3. Imprima por consola cada una de las propiedades y funciones.*/
const carro={
    marca: "mazda",
    modelo: 2023,
    ano: 2024,
    color: "rojo",

    descripcion:function() {
        return `Hola! Mi marca es ${carro.marca}, soy modelo ${carro.modelo} , año ${carro.ano} y mi color es ${carro.color}`
    }
}
console.log(carro)
console.log(carro.color)
console.log(carro.marca)
console.log(carro.modelo)
console.log(carro.ano)
console.log(carro.descripcion())

/*4. Según lo anterior haga un código que tenga la clase figura la cual:
1. Tenga un constructor con el atributo de color.*/
class Figura {
    constructor(color){
        this.color=color
    }
    /*2. Tenga un método saludar e imprima en consola:
    “Hola! Soy una figura y mi color es color”*/
    saluda(){
        return `Hola! Soy una figura y mi color es ${this.color}`
    }

}
 //instanciar
 /*Cree una o mas instancias de la clase e imprímala por consola.*/
const Hello1 = new Figura("azul")
console.log(Hello1.saluda())
const Hello2 = new Figura("verde")
console.log(Hello2.saluda())
const Hello3 = new Figura("morado")
console.log(Hello3.saluda())

/*5. Cree una clase cuadrado que herede de la clase figura la cual tenga los atributos de alto y ancho.*/
class cuadrado extends Figura {
      constructor(color,alto,ancho){
        super(color)
        this.alto=alto
        this.ancho=ancho  
      }
      /*Sobreescriba el método saludar con el siguiente mensaje:
      “Hola! Soy un cuadrado. Mi color es color y mis medidas son altoxancho”*/
      saluda(){
        return `Hola! Soy un cuadrado Mi color es ${this.color} y mis medidas son ${this.alto}x${this.ancho}`
      }
}

//Cree una instancia de la clase cuadrado e imprímala por consola.*/ 
const ventana = new cuadrado("dorado",3,6)
console.log(ventana.saluda())
//otra instancia de la clase cuadrado
const puerta = new cuadrado("blanco",4,9)
console.log(puerta.saluda())

/* Cree una clase circulo que herede de la clase figura la cual tenga el atributo de radio. Sobreescriba 
el método saludar con el siguiente mensaje:
“Hola! Soy un ciculo. Mi color es color y mi radio es radio”*/

class circulo extends Figura{
    constructor(color,radio) {
        super(color)
        this.radio=radio
    }
    saluda(){
        return `Hola! Soy un circulo. Mi color es ${this.color} y mi radio es ${this.radio}`
    }
}

/*Cree una instancia de la clase circulo e imprímala por consola.*/
const pelota=new circulo("cafe",3.65)
console.log(pelota.saluda())

/*Según lo anterior haga un código que realice una clase Persona la cual tenga un constructor con 
los atributos nombre, apellido, edad y nacionalidad, inicializarlos todos en null.*/

class Persona {
    constructor(nombre,apellido,edad,nacionalidad) {
        this.nombre=null
        this.apellido=null
        this.edad=null
        this.nacionalidad=null
    }
    /*Por medio de setter asignarle valor a los atributos y obtenerlos con getter e imprimirlos por consola.*/
set setnombre(nombre){
    this.nombre=nombre
}
get getnombre(){
    return this.nombre
}
set setapellido(apellido){
    this.apellido=apellido
}
get getapellido(){
    return this.apellido
}
set setedad(edad){
    this.edad=edad
}
get getedad(){
    return this.edad
}
set setnacionalidad(nacionalidad){
    this.nacionalidad=nacionalidad
}
get getnacionalidad(){
    return this.nacionalidad
}
/*Cree un método estático que imprima por consola el siguiente mensaje:
“Hay 8.010.359.063 personas en el mundo” */
PersonasMundo(){
    return `Hay 8.010.359.063 personas en el mundo`
}
}
//instanciar
const yo = new Persona()
yo.setnombre="Johanna"
yo.setapellido="Mahecha"
yo.setedad=28
yo.setnacionalidad="Colombiana"

console.log(`Mi nombre completo es ${yo.getnombre} ${yo.apellido}, tengo ${yo.edad} años y soy de nacionalidad ${yo.nacionalidad} `)

console.log(yo.PersonasMundo())