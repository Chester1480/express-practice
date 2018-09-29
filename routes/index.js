var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { 
    title: 'Express' , 
    content: '這很實用',
    body: req.body
  });
});

module.exports = router;