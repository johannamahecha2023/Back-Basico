
const animal=require('./animales')

const perro = new animal.animal("chula",3)
console.log(perro)

const gato = new animal.gato("dexter",2,7)
console.log(gato)
console.log(gato.saludar())