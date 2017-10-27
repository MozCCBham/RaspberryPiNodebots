var wpi = require("wiringpi-node")
var sleep = require('sleep')

//  Set up pins for output
wpi.wiringPiSetupGpio()

var ledPin = 3 // GPIO pin 3
wpi.pinMode(ledPin, wpi.OUTPUT)

// See if you can change the blinking pattern
while(true) {
	wpi.digitalWrite(ledPin, wpi.LOW)
	sleep.msleep(1000)
	wpi.digitalWrite(ledPin, wpi.HIGH)
	sleep.msleep(1000)
}

