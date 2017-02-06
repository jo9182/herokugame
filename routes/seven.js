var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Correct.  Next question: How many horns does a cow have? ');
});

module.exports = router;