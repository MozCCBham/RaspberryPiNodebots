var wpi = require("wiringpi-node")
var sleep = require('sleep')

//  Set up pins for output
wpi.wiringPiSetupGpio()

var ledPin = 3 // GPIO pin 3, Physical Pin 5
wpi.pinMode(ledPin, wpi.OUTPUT)

//  Turn LED off
wpi.digitalWrite(ledPin, wpi.LOW)


// See if you can change the blinking pattern
while(true) {
	wpi.digitalWrite(ledPin, wpi.LOW)
	sleep.sleep(1);
	wpi.digitalWrite(ledPin, wpi.HIGH)
	sleep.sleep(1);

}

