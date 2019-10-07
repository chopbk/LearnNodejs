var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var links = [
    { href: 'https://www.facebook.com/ChopBK', text: 'Facebook Nguyễn Đình Tâm' },
    { href: 'https://www.linkedin.com/in/dinhtam94/', text: 'Linkedin Nguyễn Đình Tâm' },
  ];
  var headline = 'Nguyễn Đình Tâm';
  var tagline = "Tôi là một lập trình viên đang học Nodejs và Express"

  res.render('index', {links: links, headline: headline, tagline: tagline, title: 'Express' });
});

module.exports = router;
