const express=require('express')

const app=express()

app.get('/',(req,res)=>{
  res.status(200).send(`estado correcto, esta es la pagina de inicio`)
})

app.get('/error',(req,res)=>{
  res.status(500).send(`error 500 del desarrollo del servidor`)
})

app.get('*',(req,res)=>{
  res.status(404).send(`pagina no encontrada`)
})

app.listen(3000, () =>{
    console.log(`el servidor esta arriba en este puerto http://localhost:3000`)
})