const express = require('express')
const app= express()
/*para configurar los archivos estaticos vamos a 
utilizar un metodo de express llamado static*/
/*los archivos estaticos se ultilizan cuando estos no 
cambian, o son informativos, y para formularios o informacion que 
cambian dinamicamente y tienen relacion con la BD se utilizan 
los enrutamientos*/

app.use(express.static('Public'))

//los enrutamientos consumen recursos 
app.get('/',(req,res)=>{
    res.status(200).send(`Bienvenido a la aplicacion`)
})
app.get('/iniciosesion',(req,res)=>{
    res.status(200).sendFile(__dirname + '/index.html')
})

app.listen(3000,()=> {
   console.log('la aplicacion se lanzo en http://localhost:3000')
})