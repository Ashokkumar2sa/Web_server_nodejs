var express = require('express');
var app = express();
var fs = require('fs');

var data_raw = fs.readFileSync('coin_Data.json'); 
var coin_Data = JSON.parse(data_raw);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const http = require('http')

const server = http.createServer(function(request, response) {
  if (request.method == 'POST' && request.url == '/coins') {
    console.log('POST')
    var body = ''
    request.on('data', function(data) {
      body += data
      console.log('Partial body: ' + body)
    })
    request.on('end', function() {
      console.log('Body: ' + body)
      var data = JSON.parse(body);
      var roll  = data.rollno;
      console.log(data);
      console.log(roll);
      var count = coin_Data[roll];
      if(coin_Data[roll]){
        reply = {
            "coins" : coin_Data[roll]
        };
      } else{
       reply = {
           "coins" : "Not Found"
       }
      }
      var output = JSON.stringify(reply);
      console.log(count);
      console.log(output);
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(output);
    })
  } 
})

server.listen(8080)
console.log(`Listening .. `)

/*app.post('/coins', function (req, res) {
    var roll = req.body.rollno ;
    console.log(req.params.rollno);
    console.log(roll);
    if(coin_Data[roll]){
        reply = {
            "coins" : coin_Data[roll]
        }
    } else{
      reply = "Not Found the roll no in Dictionary" ;
    }
    res.send(reply);
});

var server = app.listen(8080, function () {
    console.log('Node server is running..');
});*/