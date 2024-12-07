var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respuesta de usuarios');
});
router.get('/pruebaUsuarios',(req,res)=>{
  res.status(200).send('enrutamiemto de prueba en usuarios')
})
module.exports = router;
