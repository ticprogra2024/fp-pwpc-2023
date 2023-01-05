var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Render invoca al template engine HBS
  // se le proporcionan 2 argumentos
  // res.render vista view model
  // res.render plantilla datos
  res.render('index', { 
    title: 'Rodrigo', 
    welcomeMessage: 'Bienvenidos'
  });
});

module.exports = router;
