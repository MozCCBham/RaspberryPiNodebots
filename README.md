# Raspberry Pi Nodebots

by the Mozilla Campus Club Birmingham (mozccbham.org).

![University of Birmingham](/images/uob_logo.png?raw=true)


This set of lessons will show you some of the basics on Node.js and Raspberry Pi for robotics.

## Setup: Checking everything works

Collect a robot and setup the pi-top and robot as shown below.  Make sure the Raspberry Pi in the pi-top has an SD card. You may find the SD card in the robot.

![Pi-top and robot setup](/images/CEEDsetup.jpg?raw=true)

To turn on the pi-top, press the green power button on the back (below the power cable) for 3 seconds.  After the pi powers up, you should see the desktop screen. It should look like the picture below.

![Pi-top desktop](/images/PiDesktop.jpg?raw=true)

## Example 1: Switching on an LED with the GPIO pins

In your kit, you will find a circuit board with an LED and a resistor.

![LED circuit](/images/Circuit.jpg?raw=true)

First, we need to connect an LED to the Pi. You need to connect the wires to pins 5 and 6. You might find the pin diagram below useful.

![GPIO pin layout](/images/GPIO_PinLayout.png?raw=true)

The starting code for the example is on the desktop in the nodebots folder. Open this folder and open example 1. In this folder, you will find a file called `index.js`.

To run the script, we use the node runtime environment. To run the program, open a terminal by clicking the terminal icon ![Terminal icon](/images/terminalIcon.png?raw=true) and type

`cd /home/pi/Desktop/nodebots/example1`

To run the program in this folder type

`node index.js`

You should see the LED flashing. If it doesn't, swap the wires around.

#### Challenge

See if you can modify the code to change the blinking pattern. The code is found in the `index.js` file in the folder you opened earlier.

## Example 2: Running a webserver on the Raspberry Pi

In this example, we are going to run a website server on the raspberry pi and then access the website from another machine on the network.

Go to the terminal and change the directory by typing

`cd /home/pi/Desktop/nodebots/example2`

Run the script by typing

`node index.js`

This script will run a webserver. This example contains two pages:

A home page     `/`
A hello page    `/hello`

Open the web browser on the Pi and navigate to

`localhost:3000/`                

You should see "Hello World". Now try the second page

`localhost:3000/hello`

You should now see "Hello there, how are you?".

To access the webserver from your smartphone on the same network you will need the address of your Pi. In the top right corner of the Pi screen, hover over the network icon and it will tell you the address of your Pi.

![IP address](/images/IP_address.jpg?raw=true)

On your phone's browser navigate to

`<address>:3000/hello` (where you have replaced <address> with the address of your Pi).

You should see "Hello World".

#### Challenge

See if you can add a third page at `/goodbye` that says something fun.

## Example 3: Controlling a Pi robot from a web page

In this example, we are going to run a web server on the raspberry pi that can control the robot.  Begin by plugging the robot into the pi-top and raising its wheels off the table, as shown below.

![Robot setup with wheels raised](/images/Robot.jpg?raw=true)

Go to the terminal and change the directory by typing

`cd /home/pi/Desktop/nodebots/example3`

Run the script by typing

`node index.js`

This script will run a webserver and has routes to make the robot move forwards, left and stop.

Now with the program running, open the browser and go to

`localhost:3000/forwards`

To stop the robot, go to

`localhost:3000/stop`

You should be able to see these links as bookmarks in the browser.

#### Challenge

See if you can complete the `/backwards` path and add the `/right` path.


Here are some other challenges you could try...


* Try to control the robot from your phone. There are battery packs available.
* Try a few of our other activities with the robot at `https://github.com/MozCCBham/RaspberryPiNodebots`
