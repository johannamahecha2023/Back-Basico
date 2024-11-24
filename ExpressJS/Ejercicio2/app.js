const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname + '/index.html')
})

app.post('/Bienvenido',(req,res)=>{
    console.log(req.body)
    let usuario=req.body.usuario
    let password=req.body.password

    if(usuario==='leidy' && password==='1026586864'){
      res.sendFile(__dirname + '/public/blog.html')
    }
    else{
      res.redirect('/')
    }
})

app.get('*',(req,res)=>{
    res.status(400).send(`pagina no encontrada`)
})

app.listen(3000, ()=>{
    console.log('el servidor esta arriba http://localhost:3000')
})