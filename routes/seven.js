var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/7', function(req, res, next) {
  res.send('Correct. \n Next question: How many horns does a cow have? ');
});

module.exports = router;