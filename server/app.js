// require technologies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var path = require('path');
var php = require("node-php");
var port = process.env.PORT || 3000;

// spin up server
app.listen(port, function() {
  console.log('lisetning on pi server:', port);
});

app.get('/', function(req,res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
}); // end base url

app.use(express.static('public'));
