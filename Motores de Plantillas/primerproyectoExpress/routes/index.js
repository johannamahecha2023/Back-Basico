var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Backend Basico' });
});
router.get('/ejemplo',(req,res)=>{
  res.send('enrutamiento de prueba en mi proyecto')
}
)
module.exports = router;
