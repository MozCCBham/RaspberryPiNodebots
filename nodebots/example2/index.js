var express = require("express")
var app = express()

app.get('/', function(req, res) {
	res.send("Hello World")
})

app.get('/hello', function(req, res) {
	res.send("Hello there, how are you?")
})

// add a goodbye route here

app.listen(3000)
console.log("Listening on port 3000!")
