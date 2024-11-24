const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

/*Middleware morgan permite obtener informacion de las solicitudes y 
respuestas que se presentan en la app*/ 

app.get('/',(req,res)=>{
   res.status(200).send(`bienvenido`)
})

app.listen(3000, ()=>{
    console.log('el servidor esta arriba por http://localhost:3000')
})
