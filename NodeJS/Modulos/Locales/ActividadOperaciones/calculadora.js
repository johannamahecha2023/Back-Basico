//acontinuacion importo el archivo app.js donde esta los modulos de las funciones 

const archivo=require('./factura')

console.log(archivo.suma(4,5))
console.log(archivo.resta(3,1))
console.log(archivo.multiplicacion(5,4))
console.log(archivo.division(64,8))
/* otra forma de hacer la suma de los resultados de las demas operaciones
let r1=archivo.suma(4,5)
let r2=archivo.resta(3,1)
let r3=archivo.multiplicacion(5,4)
let r4=archivo.division(64,8)
console.log(archivo.total(r1,r2,r3,r4))*/
console.log(archivo.total(archivo.suma(4,5),archivo.resta(3,1),archivo.multiplicacion(5,4),archivo.division(64,8)))