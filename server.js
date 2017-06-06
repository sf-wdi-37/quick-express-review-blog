// REQUIREMENTS
var express = require('express');
var app = express();


app.use(logger);
function logger(req, res, next){
  console.log(req.method + " " + req.path);
  next();
}

// ROUTES
// app.VERB(PATH, CALLBACK/CONTROLLER)
// says what to do when we get a request matching VERB PATH
app.get('/', function(req, res){
  res.send('Start blogging!');
})

// LISTEN
app.listen(3000, function(){
  console.log("app listening!")
})
