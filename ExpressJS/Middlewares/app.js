const express = require('express')
app=express()


/*los middlewares son intermediarios entre en request(solicitud)
y el response (respuesta)*/
/*este middlewares sera para que el registro de las solicitudes
que se realicen en la pagina SIEMPRE QUE SE UTILICE UN 
MIDDLEWARES COMIENZA CON APP.USE */
app.use((req,res, next)=>{
// con req.url obtenemos la url de la solicitud 
  console.log(`solicitud recibida con ${req.url} en la fecha ${new Date().toLocaleString()}\n`)
  //con next continuamos con el flujo de la solicitud
  next()
})
app.get('/',(req,res)=>{
    res.status(200).send(`bienvenidos`)
})

app.listen(3000, ()=>{
   console.log('el servidor esta levantado en http://localhost:3000')
})