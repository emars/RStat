var express = require('express');
var app = express();
var multer  = require('multer')
app.use(multer({ dest: './uploads/'}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rstat');
var RStat = require('./models/rstat.js');


app.get('/', function(req, res){
  res.send('Not implemented.<br>This will redirect you to the github page');
});

app.post('/me', function(req, res){
  var username = req.body.username;
  if (! username){
    res.send(400);
  } else {
    RStat.findOne({name: username}, function(err, rstat){
      if (err){
        console.log(err);
        res.send(500);
      } else {
        res.json(rstat);
      }
    });
  }
  //res.send('Not implemented.<br>This will display your data in neat ways.')
});

app.post('/link', function(req, res){
  var data = req.body.data;
  var username = req.body.username;
  if (! username || ! data){
    res.send(400);
  }

  RStat.findOne({name: username}, function(err, rstat){
    if (err){
      console.log(err);
      res.send(500);
    } else {
      rstat.links++;
      rstat.save(function(err){
        if (err){
          console.log(err);
          res.send(500);
        } else {
          res.send(200);
        }
      });
    }
  });
  //res.send('Not implemented.<br>This will take your data and parse it');
});

app.post('/new', function(req, res){
  var username = req.body.username;
  console.log(username);
  if (! username){
    res.send(400);
  }
  RStat.create({ name:username }, function(err, rstat){
    if (err){
      console.log(err);
      res.send(500);
    } else {
      res.send(200);
    }
  });
});

app.listen(1337, function(){
  console.log("RStat Listening on 1337");
});
