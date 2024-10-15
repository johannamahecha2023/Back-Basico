//creacion de un objeto persona
const persona={
//propiedades
nombre: "jennifer",
apellido:"martinez",
edad: 26,
estatura:1.78,
peso:"70kg",
sexo:"femenino",
fechaNacimiento:"23-septiembre-1999"
}
//accediendo a la informacion del objeto
/*para acceder a la informacion de un objeto lo hacemos de la siguiente manera
nombre del objeto . nombre de la propiedad*/
console.log(persona.apellido)


console.log(persona.peso)
//modificar una propiedad del objeto 

persona.peso="34kg"
console.log(persona.peso)

//agregando una nueva propiedad al objeto 
persona.ciudad="Bogota"
console.log(persona)
console.log(persona.ciudad)

//pasando de objeto en javascript a formato JSON
let objeto_json = JSON.stringify(persona)
console.log("el objeto persona se paso a formato json y se ve de la siguiente manera: ")
console.log(objeto_json)
//pasando de formato JSON a objeto 
let json_objeto= JSON.parse(objeto_json)
console.log("el formato json se pasa a objeto y se ve de la siguiente manera")
console.log(json_objeto)