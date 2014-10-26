var express = require('express')
  , cors = require('cors')
  , multer = require('multer')
  , app = express()
  , r = require('rethinkdb')
  , q = require('q')
  , connection = null;


r.connect({host:'localhost', port:28015, db:'rstat'}, function(err, conn){
  if (err) throw err;
  connection = conn;
  console.log("RethinkDB Connection Established");
});

app.use(express.static(__dirname+'/assets'));
app.use(multer());

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
});

app.get('/me', function(req, res){
  res.sendFile(__dirname+'/me.html');
});

app.post('/link',cors(),function(req, res){
  if (! connection){
    res.send(500);
  } else {
    var uname = req.body.uname;
    //var subreddit = req.body.subreddit;
    if (! uname) {
      res.send(400);
    } else {
      r.table('stats')
        .get(uname)
        .run(connection, function(err, doc){
          if (! doc){
            r.table('stats')
              .insert({id:uname, links:0, timestamps:[]})
              .run(connection, function(err, doc){
                if (err) throw err;
                link(uname, res);
              })
          } else {
            link(uname, res);
          }
        })
    }
  }
});

app.listen(9210, function(){
  console.log("RStat listening on port 9210");
});

function link(uname, res){
    r.table('stats')
      .get(uname)
      .update({links: r.row('links').add(1),
      timestamps: r.row('timestamps').append(+new Date())})
      .run(connection, function(err, cb){
        if (err) throw err;
        res.send(200);
      });
}
