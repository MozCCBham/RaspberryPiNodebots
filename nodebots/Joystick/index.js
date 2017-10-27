var express = require("express")
var app = express()
var wpi = require("wiringpi-node")

wpi.wiringPiSetupGpio()
app.use(express.static(__dirname))


var forward_pin_R = 10
var forward_pin_L = 8
var backward_pin_R = 9
var backward_pin_L = 7

wpi.softPwmCreate(forward_pin_R, 0, 100)
wpi.softPwmCreate(forward_pin_L, 0, 100)
wpi.softPwmCreate(backward_pin_R, 0, 100)
wpi.softPwmCreate(backward_pin_L, 0, 100)

app.get("/", function(req, res) {
    res.sendFile("joystick.html", {root : __dirname})
})

app.get("/drive", function(req, res) {
    dx = req.query.dx
    dy = req.query.dy
    pin_high = Math.round(Math.sqrt(dx * dx + dy * dy))
    pin_low = Math.round(Math.abs(dy))
    pin_back = Math.round(Math.pow((pin_high - pin_low)/100, 2) * 100)
    if (dy > 0) {
        if (dx > 0) {
            wpi.softPwmWrite(forward_pin_R, pin_low)
            wpi.softPwmWrite(forward_pin_L, pin_high)
            wpi.softPwmWrite(backward_pin_R, pin_back)
            wpi.softPwmWrite(backward_pin_L, 0)
        } else { 
            wpi.softPwmWrite(forward_pin_R, pin_high)
            wpi.softPwmWrite(forward_pin_L, pin_low)
            wpi.softPwmWrite(backward_pin_R, 0)
            wpi.softPwmWrite(backward_pin_L, pin_back)
        }
    } else {
        if (dx > 0) {
            wpi.softPwmWrite(backward_pin_L, pin_low)
            wpi.softPwmWrite(backward_pin_R, pin_high)
            wpi.softPwmWrite(forward_pin_L, pin_back)
            wpi.softPwmWrite(forward_pin_R, 0)
        } else { 
            wpi.softPwmWrite(backward_pin_L, pin_high)
            wpi.softPwmWrite(backward_pin_R, pin_low)
            wpi.softPwmWrite(forward_pin_L, 0)
            wpi.softPwmWrite(forward_pin_R, pin_back)
        }
    }
})

app.listen(3000)
console.log("Listening on port 3000!")


