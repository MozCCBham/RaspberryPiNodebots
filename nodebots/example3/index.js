var wpi = require("wiringpi-node")
var express = require("express")
var app = express()

//  Set up pins for output
wpi.wiringPiSetupGpio()

var leftPin1 = 7
var leftPin2 = 8
var rightPin1 = 9
var rightPin2 = 10

wpi.pinMode(leftPin1, wpi.OUTPUT)
wpi.pinMode(leftPin2, wpi.OUTPUT)
wpi.pinMode(rightPin1, wpi.OUTPUT)
wpi.pinMode(rightPin2, wpi.OUTPUT)

//  Turn all motors off
wpi.digitalWrite(leftPin1, wpi.LOW)
wpi.digitalWrite(leftPin2, wpi.LOW)
wpi.digitalWrite(rightPin1, wpi.LOW)
wpi.digitalWrite(rightPin2, wpi.LOW)

app.get('/forwards', function(req, res) {
	wpi.digitalWrite(leftPin1, wpi.LOW)
	wpi.digitalWrite(leftPin2, wpi.HIGH)
	wpi.digitalWrite(rightPin1, wpi.LOW)
	wpi.digitalWrite(rightPin2, wpi.HIGH)
})

app.get('/backwards', function(req, res) {
 // Add code here to move the robot backwards

})

app.get('/left', function(req, res) {
	wpi.digitalWrite(leftPin1, wpi.HIGH)
	wpi.digitalWrite(leftPin2, wpi.LOW)
	wpi.digitalWrite(rightPin1, wpi.LOW)
	wpi.digitalWrite(rightPin2, wpi.HIGH)
})

// add route to move robot right

app.get('/stop', function(req, res) {
	wpi.digitalWrite(leftPin1, wpi.LOW)
	wpi.digitalWrite(leftPin2, wpi.LOW)
	wpi.digitalWrite(rightPin1, wpi.LOW)
	wpi.digitalWrite(rightPin2, wpi.LOW)
})

app.listen(3000)
console.log("Listening on port 3000!")
