var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/5', function(req, res, next) {
  res.send("Correct.  Next question: How old is Drake's girlfriend? Hint: guess high ");
});

module.exports = router;