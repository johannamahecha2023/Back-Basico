//importamos los modulos necesarios 
const mysql=require('mysql')
const config=require('./config')

// creando la conexion con el metodo CreateConnection
const conexion= mysql.createConnection({
    //establece los parametros para la conexion
    host:config.host,
    puerto:config.puerto,
    user:config.user,
    password:config.password,
    database:config.database
})
//connect permite conectar a la BD
conexion.connect((error)=>{
    if(error){
        console.log(`ha ocurrido un error en la BD${error}`)
        return;
    } else{
        console.log(`conexion exitosa en la BD`)
    }
 //me permite cerrar la conexion a la BD
conexion.end((error)=>{
    if(error){
      console.log(` no se pudo cerrar la conexion en la BD ${Error}`)
      return;
    }
    else{
        console.log(`conexion cerrada a la BD exitosa`)
    }
})

})
