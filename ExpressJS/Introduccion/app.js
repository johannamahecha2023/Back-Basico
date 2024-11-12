 const express=require('express')

 const app=express()

 app.get('/', (req,res)=>{
    res.send('holaa, esta es mi app en express')
 })

 app.get('/Matriculas', (req,res)=>{
    res.send(`hola, aqui esta el formulario para que te matricules`)
 })

 app.get('*',(req,res)=>{
    res.send(`error 400, ruta No encontrada`)
 })

 app.listen(3000, ()=>{
    console.log(`el servidor esta corriendo por el siguiente enlace http://localhost:3000`)
 })

 