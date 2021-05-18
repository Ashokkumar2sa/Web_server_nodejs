var fs = require('fs');
var data = fs.readFileSync('coin_Data.json');
var additional = JSON.parse(data);
// console.log(additional);
//console.log('server is starting');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var server = app.listen(8080, listening);

function listening() {
  console.log('listening. . . ');
}

app.use(express.static('website'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use( bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.post('/coins', analyzeThis);

function analyzeThis(request, response) {
  var rollno = request.body.text;
  console.log(rollno);
  //console.log(additional);
  if(additional[rollno]){
    reply = {
        "coins" : additional[rollno]
    }
}else { 
    reply = {
        "coins" : "not found" 
    };
}
  console.log(reply);
  response.send(reply);
}

