// arreglos: variable que guarda diferentes tipos de datos, como elementos en un orden que comienza desde el numero 0, ejemplo:

const verduras =["abichuela","arbeja","zanahoria","lechuga","cebolla"]

console.log(`la verdura que mas me gusta es : ${verduras[2]}`)


// puede ser construido un arreglo con booleanos, carateres o numeros 

const conjunto =["desarrolladora","leidy",28,"ingeniera de software",true]

console.log(conjunto)
console.log(`mi nombre es ${conjunto[0]}, tengo ${conjunto[1]} años y soy ${conjunto[2]} y soy la mujer mas inteligente del mundo esto es ${conjunto[3]}`)

//push sirve para agregar un nuevo elemento al arreglo

conjunto.push("chula sombra cocoa olivos mahecha")
conjunto.push("B+")
conjunto.push(true)

//sirve para eliminar el ultimo elemento de un arreglo 
conjunto.pop()

//definimos un arreglo con numero de elementos 100 y lo lleno con lo que yo quiero en fill

const numeros=Array(100).fill("chula")

console.log(numeros)

numeros.push("sombra")
console.log(numeros)

numeros.pop()
console.log(numeros)

//propiedad length visualiza la cantidad de elementos de una arreglo
console.log(conjunto.length)

// como eliminar un elemento en especifico del arreglo
conjunto.splice(0,2)
console.log(conjunto)

//recorremos un arreglo con ciclo for
let localidades=["suba","barrios unidos","tunjuelito","barrios unidos","usaquen","usme","sumapaz","engativa"]
for (let i=0; i<localidades.length; i++){
     console.log(`esta es la localidad numero ${i} y es ${localidades[i]}`)
}

//recorremos un arreglo de colores con un ciclo for 
let  colores=["verde","blanco","amarillo","morado","naranja","amarillo","azul","negro","rojo","gris"]

for (let i=0; i<colores.length; i++){
    console.log(`el color ${i} corresponde al color ${colores[i]}`)
}

//foreach es una estructura de control especialmente util para tipo de datos compuestos como los arreglos
conjunto.forEach(dato => {
    console.log(dato)
});

//foreach con el arreglo colores

colores.forEach(dato=>
 console.log(`color: ${dato}`)
)

//conaciones favoritas en arreglos

const cancionesFavoritas=["ai wanna be yours","dia tras dia","november rain","you were here","corazonada"
]

console.log(cancionesFavoritas.length)

cancionesFavoritas.forEach(dato=>
    console.log(`${dato}`)
)

//objetos 
const carro={
// propiedades son caracteristicas propias del objeto
//propiedades del carro:
marca: "suzuki",
color:"negro",
modelo:2024,
propietarios:["giovanny","leidy","alex","johanna"],//los metodos son comportamientos oacciones propias del objeto
//metodos del carro:
acelerar:function(){
    return "estoy acelerando"
},

frenar: function(){
    return "estoy des-acelerando"
}
}
 console.log(carro)

//acceder a las propiedades de un objeto 
console.log(`el vehiculo ${carro.marca} color ${carro.color},modelo ${carro.modelo} y los dueños del vehiculo han sido: `)
carro.propietarios.forEach(dato=>{
    console.log(dato)
}
)

//acceder a los metodos de un objeto
console.log(carro.acelerar())
console.log(carro.frenar())

//modificar las propiedades de un objeto
carro.marca="subaru"
console.log(carro.marca)

//borrar el ultimo dueño de un objeto que es un arreglo
carro.propietarios.pop()
console.log(carro.propietarios)

//para modificar un elemento del objeto que se encuentra definido en un arreglo
console.log(carro.propietarios)
carro.propietarios[2]="claudia"
console.log(carro.propietarios)

const mascota={
//propiedades 
nombre: "Mi chulita",
edad:3,
propietario:{
    nombre: "giovanny",
    apellido: "olivos",
    edad:28,
    contacto:{
        celular:3243326731,
        correo: "leidymahecha901@gmail.com",
        direccion: "carrera 27# 63a-42"
    }
},
raza:"criolla",
hermano:["yang"],
amigos:["lukas","kaizer","fercho","enzo","dante"],
vacunas: true,

//metodos
correr: function () {
    return "estoy corriendo"
},
ladrar: function () {
    return "guau guau"
},
morder: function () {
    return "mordi a un animal"
}
}

console.log(`mi perrita se llama ${mascota.nombre}, tiene ${mascota.edad} años y la propietaria de ella soy yo ${mascota.propietario.nombre} en caso de algun comentario me pueden comunicar al cel ${mascota.propietario.contacto.celular} mi perra cuando esta feliz hace ${mascota.ladrar()}`)

