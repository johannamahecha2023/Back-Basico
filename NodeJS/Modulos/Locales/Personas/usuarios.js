class usuario{
    constructor(nombre,apellido,edad,carrera){
      this.nombre=nombre,
      this.apellido=apellido,
      this.edad=edad,
      this.carrera=carrera
    }
    saludar(){
        return `hola soy ${this.nombre}${this.apellido}, tengo ${this.edad} años y
        soy de la carrera de ${this.carrera}`
    } 
}

module.exports={
    usuario
}