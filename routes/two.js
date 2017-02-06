var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Correct.  Next question: How many rings does Tom Brady have? ');
});

module.exports = router;