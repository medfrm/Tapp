var express = require('express');
var router = express.Router();
var control = require('../controllers/control');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/app', control.action);

module.exports = router;
