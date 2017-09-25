var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/Tapp', (req, res, next) => {
	res.send('Hell is already here !')
});

module.exports = router;
