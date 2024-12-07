
const express=require('express')

const app=express()
/*urlencoded permite obtener la informacion que 
se envia en post por medio de la url o del cuerpo 
de la solicitud*/

app.use(express.urlencoded({extended: true}))

//enrutamiento de nuestra pagina
app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/iniciosesion', (req,res) =>{
    res.sendFile(__dirname + '/iniciosesion.html')
})
app.listen(3000, ()=>{
   console.log(`se inicio por http://localhost:3000/`)
})
/*con el metodo post enviamos informacion pero tambien el usuario hace 
una solicitud y adquiere una respuesta*/
app.post('/Bienvenido',(req,res)=>{
    res.send(`gracias por iniciar sesion`)
    const usuario=req.body.usuario
    const email=req.body.email
    const password=req.body.password
    res.send(`gracias por iniciar sesion`)
})
//para manejar rutas no definidas aplicamos el siguiente comodin
app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/error.html')
})