//importamos el archivo fs, que permite gestionar archivo
 const fs=require('fs')

//para ultilizarlo
fs.readFile('prueba.txt','utf-8',(error,data)=>{
    if (error) {
        console.log(error)
    }
    console.log(data)
  
})