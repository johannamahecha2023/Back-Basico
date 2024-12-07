const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    const docente={
        nombre:'leidy johanna',
        apellidos:'mahecha ospina',
        materia:'algebra lineal'
    }
    res.render('docente',docente)
})

module.exports=router;