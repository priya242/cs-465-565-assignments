var express = require('express');
var app = express();
console.log('express..');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
console.log('bodyParser..');

app.get('/', function (req, res) {
    res.sendFile('/Users/priyankapandey/Desktop/git-workspace/cs-465-565-assignments/Assignment_5/index.html');
});
console.log('index.html..');

app.post('/submit', function (req,res) {
    var firstname = 'First Name: '+ req.body.firstname;
    var lastname = 'Last Name: '+ req.body.lastname;
    var email = 'Email: '+ req.body.email;

    res.write(firstname + '\r\n');  
    res.write(lastname + '\r\n');
    res.write(email + '\r\n'); 
    res.end();
});

var server = app.listen(8000, function () {
    console.log('Node server is running..');
});