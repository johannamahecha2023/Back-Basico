/*importamos el modulo interno http, este modulo no hay que instalarlo en el nodejs 
ya que viene por defecto en el por eso se le llama modulo interno*/

const http=require('http')

//creamos nuestro servidor
//req= solicitud res=respuesta
const servidor=http.createServer((req,res)=>{
    /*end es la respuesta final que da el servidor al cliente
    es la respuesta solicitada por el cliente*/
   res.end('hola este es mi servidor')
})

//ahora se define el puerto de salida del servidor
const puerto=3000;

//iniciamos servidor
servidor.listen(puerto,()=>{
    console.log(`el servidor se esta ejecutando por: http://localhost:${puerto}`)
})
