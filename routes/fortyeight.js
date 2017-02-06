var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("Correct.  Congratulations, you are a wizard of knowing random trivia. ");
});

module.exports = router;