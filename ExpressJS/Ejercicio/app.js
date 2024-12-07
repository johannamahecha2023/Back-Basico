const express=require('express')
const app=express()
app.use(express.urlencoded({extended: true}))

const desarrolladora = 'desarrolladora'
const backend1234 = 'backend1234'

app.get('/inicio',(req,res)=>{
    res.status(200).sendFile(__dirname + `/index.html`)
})

app.get('/ingresar',(req,res)=>{
    res.status(200).sendFile(__dirname + `/index.html`)
})

app.post('/ingreso',(req,res)=>{
    const usuario= req.body.usuario
    const contraseña=req.body.contraseña
    if (usuario===desarrolladora && contraseña===backend1234) {
        res.status(200).send(`Bienvenida ${usuario}`)
    } else {
        res.status(200).send(`Bienvenida a la app no tienes permisos de desarrollador`)
    }
})
app.get('*',(req,res)=>{
    res.status(404).send(`pagina no encontrada`)
  })
app.listen(3000, () =>{
    console.log(`el servidor esta arriba en este puerto http://localhost:3000`)
})