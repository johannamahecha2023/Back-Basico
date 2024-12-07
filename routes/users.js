var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respuesta');
});
router.get('/subruta',(req,res)=>{
  res.send('subruta usuario');
})

module.exports = router;
