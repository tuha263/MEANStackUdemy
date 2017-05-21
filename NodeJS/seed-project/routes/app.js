var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/message', function(req, res, next) {
  res.render('node', {
    message: 'Hello!'
  });
});

router.post('/message', function(req, res, next) {

});

module.exports = router;
