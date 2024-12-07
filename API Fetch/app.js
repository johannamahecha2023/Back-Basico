//una api es un intermediario que puede ayudar en la comunicacion de dos aplicaciones y asi puedan compartir informacion

//se realiza la solicitud con fetch a la pagina de JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/users")

//una vez se hace la solicitud a JSONPlaceholder tenemos una respuesta
//esa respuesta se guarda automaticamente
.then (responsive => responsive.json())
//cuando ya tenemos esos datos en formato json podemos 
//acceder por medio de data
 .then (data => {
    data.forEach(nombres => {
        console.log(`el nombre de cada usuario es ${nombres.name} y el cel es : ${nombres.phone}`)
    });
  
 })


/*si ocurre algun error utilizamos 
catch*/
.catch(error => console.log(`el error es :${error}`))

/*ejercicio hacer un API Fetch que traiga los
elementos de comments de APIPlaceholder e imprimir el siguiente 
mensaje por cada uno de los elementos de json :
correo ${email} dejo el sigueinte mensaje ${body}*/

fetch("https://jsonplaceholder.typicode.com/comments")

.then(response => response.json())

.then(data=>{
    data.forEach(mensajeria => {
        console.log(`el correo ${mensajeria.email}, dejo el siguiente mensaje: ${mensajeria.body}`)
    });
})

//llamamos el json que acabamos de crear
fetch("datos.json")

.then(response=>response.json())
.then(data=>{
    data.forEach(jsonquecree => {
        console.log(`${jsonquecree.nombre} ${jsonquecree.apellido} tiene ${jsonquecree.edad} años, y su correo es ${jsonquecree.contacto.correo} `)
    });

})