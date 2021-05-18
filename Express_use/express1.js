var express = require('express');
var app = express();
var fs = require('fs');

var data_raw = fs.readFileSync('coin_Data.json'); 
var coin_Data = JSON.parse(data_raw);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.post('/coins', function (req, res) {
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
});