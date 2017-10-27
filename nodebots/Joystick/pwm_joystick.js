console.log("touchscreen is", VirtualJoystick.touchScreenAvailable() ? "available" : "not available");

var joystick	= new VirtualJoystick({
        container	: document.getElementById('container'),
        mouseSupport	: true,
        limitStickTravel: true,
        stickRadius     : 100
});

var xhr = new XMLHttpRequest();

setInterval(function(){
       	xhr.open('GET', "drive?" + ("dx=" + joystick.deltaX() + "&dy=" + (-joystick.deltaY())), true);
	xhr.send(null)
}, 1/30 * 1000);
