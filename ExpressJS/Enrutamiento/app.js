
const express=require('express')

const app=express()

//enrutamiento de nuestra pagina
app.get('/home', (req,res) =>{
    res.send(`estoy en la pagina de inicio`)
})
app.get('/iniciosesion', (req,res) =>{
    res.send(`estas en inicio de sesion`)
})
app.listen(3000, ()=>{
   console.log(`se inicio por http://localhost:3000/`)
})

//para manejar rutas no definidas aplicamos el siguiente comodin
app.get('*',(req,res)=>{
    res.send(`pagina no encontrada`)
})