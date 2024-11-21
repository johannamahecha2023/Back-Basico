const express=require('express')
const app=express()
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
  res.status(200).send(`estado correcto, esta es la pagina de inicio`)
})

app.get('/error',(req,res)=>{
  res.status(500).send(`error 500 del desarrollo del servidor`)
})


app.get('/registrarme',(req,res)=>{
    res.status(200).sendFile(__dirname + `/index.html`)
})

app.post('/registro-exitoso',(req,res)=>{
  const Nombres = req.body.Nombres
  const Apellidos = req.body.Apellidos
  const email= req.body.email
  res.status(200).send(`hola ${Nombres},${Apellidos} el registro de tus datos fue
    exitoso, revisa en tu correo ${email} la confirmacion del regitro`)
})

app.get('*',(req,res)=>{
  res.status(404).send(`pagina no encontrada`)
})

app.listen(3000, () =>{
    console.log(`el servidor esta arriba en este puerto http://localhost:3000`)
})