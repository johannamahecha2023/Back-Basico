var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //el metodo render, renderiza la plantilla
  //en este caso la plantilla es index.hbs
  //la plantilla index se le manda una informacion que en este caso es curso
  //res.render('index', { curso: 'Curso Backend' });

  const curso ={
    nombre:'Desarrollo Web Basico',
    docente:'liliana herrera',
    correo:'docentelherrera@udistrital.edu.co',
    horario:'L-V de 7:00 a 9:00',
    institucion:'Universidad Distrital Francisco Jose de Caldas'

  }
  res.render('index', curso)
});

module.exports = router;
