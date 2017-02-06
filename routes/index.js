var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to the game. Type answers to the questions posed in the url, like so: \n ...com/ANSWER. \n\n First question: How many colors are there in a rainbow? \n (Hint: type the number.) ");
});

module.exports = router;
