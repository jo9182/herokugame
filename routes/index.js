var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.write("Welcome to the game. Type answers to the questions posed in the url, like so: " + "</br>");
	res.write("First question: How many colors are there in a rainbow? ");
	res.write("(Hint: type the number.) ");
    res.end();
});

module.exports = router;
