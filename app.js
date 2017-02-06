var express = require('express');
var http = require('http');


var app = express();

app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get('/', function(req,res)
{
    res.end("Route path at base address");
});

app.get('/test', function(req, res) {
  res.end("Youre gay");
});

app.get("*", function(request, response) {
  response.end("404!");
});

http.createServer(app).listen(1337);




/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
*/