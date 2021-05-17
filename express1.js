var express = require('express');
var app = express();

//make a dictionary for few sample roll number inputs 

var coin_Data = {
    "100" : 6,
    "101" : 15,
    "102" : 8,
    "103" : 9,
    "104" : 13,
    "105" : 19,
    "106" : 8
}

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-student-data', function (req, res) {
    var roll = req.body.rollno ;
    //const data = await response.json();
    if(coin_Data[roll]){
        reply = {
            coins : coin_Data[roll]
        }
    }
    else{
      reply = "Not Found the roll no" ;
    }
    res.send(reply);
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});