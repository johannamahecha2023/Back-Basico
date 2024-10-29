//creamos la funcion que deseamos exportar
const saludo = function(nombre) {
    return `hola ${nombre}, este es mi primer modulo`
}

//exportar la funcion 
module.exports={
 saludo:saludo
}