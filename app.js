var express = require('express');
var app = express();
app.enable('trust proxy');

app.get('/item/1', function(req, res){
  var body = '{"id": 1, "name": "Item 1", "description": "Lorem ipsum ...", "done": false}';
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.get('/items', function(req, res){
  var body = '{"items":[{ "id":1 ,"name": "Item 1", "description": "Lorem ipsum ...", "done": false, "priority": 2 },{ "id":2 ,"name": "Item 2", "description": "Lorem Ipsum ...", "done": false, "priority": 1}]}';
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});