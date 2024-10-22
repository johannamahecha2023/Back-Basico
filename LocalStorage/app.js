/*con setItem podemos guardar 
informacion en el LocalStorage
*/
let nombreUsuario="Johanna"
/*siempre que queramos guardar 
info en el LosalStorage,
agregamos una llave y un valor (key: string,)
*/
localStorage.setItem("nombre", nombreUsuario)

const verduras=["lechuga","tomate","zanahoria",5]
localStorage.setItem("comidaFavorita",verduras)

const Materia={
    nombre:"Algebra Lineal",
    Creditos:4,
    Profesora:"leidy Mahecha",
    Horas_de_intencidad:100
}
localStorage.setItem("nombre",Materia)
//para obtener informacion del LocalStorage getItem

let datoGuardado=localStorage.getItem("comidaFavorita")
console.log(datoGuardado)

let parrafo=document.getElementById("comida")
parrafo.textContent=`la comida favorita de johanna es: ${datoGuardado}`

// ejercicio con DOM LocalStorage y JSON''
let nombre=document.getElementById("nombre")
let apellido=document.getElementById("apellido")
let fechaDeNacimiento=document.getElementById("fecha")
let enviar=document.getElementById("Enviar")

//creamos una plantilla class
class usuarios{
    constructor(nombre,apellido,fechaDeNacimiento){
        this.nombre=nombre
        this.apellido=apellido
        this.fechaDeNacimiento=fechaDeNacimiento 
    }

}
enviar.addEventListener("click", function(){
    let valorNombre=nombre.value
    let valorApellido=apellido.value
    let valorfecha=fechaDeNacimiento.value
    const users=new usuarios(valorNombre,valorApellido,valorfecha)
    let usuario=[]

    let localUsuario=localStorage.getItem("usuario")
   /*el if de acontinuacion significa
   si (localUsuario no esta vacio, el cumple el if) (if(localUsuario!=null))*/
    if (localUsuario) {
        usuario=JSON.parse(localUsuario)
    }
    usuario.push(users)
    localStorage.setItem("usuario",JSON.stringify(usuario))
    alert("usuario registardo")
} )

const mostrarUsuario = function(){
    let usuarios=[]
    let localusuarios=localStorage.getItem("usuario")
    if (localusuarios) {
        usuarios=JSON.parse(localusuarios)
    }
    let lista=document.getElementById("lista")
        usuarios.forEach (usuario=>{
        let datoUsuario=document.createElement("li")
        datoUsuario.textContent=`Nombre: ${usuario.nombre} -Apellido: ${usuario.apellido} -Fecha de Nacimiento: ${usuario.fechaDeNacimiento}`
        lista.appendChild(datoUsuario)
    })
     
}
mostrarUsuario()