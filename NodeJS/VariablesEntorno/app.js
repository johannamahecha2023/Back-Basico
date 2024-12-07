//importamos
const http=require('http')
const config=require('./config')
const fs=require('fs')

//guardo el servidor en una constante el cual tiene una peticion y una respuesta 
const servidor= http.createServer((req,res) => {
    fs.readFile('index.html','utf8',(error,data)=>{
        if (error) {
            res.writeHead(500,{'content-Type':'text/html'})
            res.end('<h1>Porfavor disculpenos por las molestias</h1>')
        }
        res.writeHead(200,{'content-Type':'text/html'})
        res.end(data)
    })
})

//llamamos al puerto 
servidor.listen(config.port, config.host, ()=>{
    console.log(`el puerto del servidor de variables de entorno es http://${config.host}:${config.port}`)
})