const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('enrutamiento del ejercicio. realizado por leidy mahecha')
})

module.exports= router