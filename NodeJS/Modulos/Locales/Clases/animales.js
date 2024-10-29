//clases a exportar

class animal{
    constructor(nombre,edad){
    this.nombre=nombre,
    this.edad=edad
    }
    saludar(){
        return `mi nombre es ${this.nombre} y tengo ${this.edad} años de edad`
    }
}
class gato extends animal{
 constructor(nombre,edad,vidas){
   super(nombre,edad)
   this.vidas=vidas
 }
 saludar(){
    return `miauuu miauuu`
 }
}

module.exports={
    animal,
    gato
}