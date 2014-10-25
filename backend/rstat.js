var express = require('express')
  , cors = require('cors')
  , app = express();


app.use(express.static(__dirname+'/assets'));

app.get('/', function(req, res){

});

app.get('/me', function(req, res){

});

app.post('/link',cors(),function(req, res){

});

app.listen(9210, function(){
  console.log("RStat listening on port 9210");
});
