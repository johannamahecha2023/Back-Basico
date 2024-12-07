/*importar modulo lodash
busco en npmjs.com o en chatgpt cual es el modulo que me ordena los 
elementos de un arreglo y cual es el modulo que elimina los 
numeros repetidos*/

const {sortBy,uniq}=require('lodash')
const numeros=[1,5,8,12,4,1,3,6,2]

//simplemente llamamos al metodo
console.log(sortBy(numeros))
console.log(sortBy(uniq(numeros)))