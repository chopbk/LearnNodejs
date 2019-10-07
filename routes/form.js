var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('form');
});
router.post('/submit',  function(req, res){
    var username = req.body.username;
    res.send(username);
  });
module.exports = router;
