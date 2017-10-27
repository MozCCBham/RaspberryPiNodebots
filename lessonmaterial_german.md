# Raspberry Pi Nodebots

des Mozilla Campus Club Birmingham (mozccbham.org)

![University of Birmingham](/images/uob_logo.png?raw=true)

*Diese Übungen dienen als Einblick in die Grundlagen von node.js und Raspberry Pi für Robotik und das Internet der Dinge*

Wir benutzen das Robotik-Set von Cambridge Raspberry Jam - ![CamJam EduKit 3](http://camjam.me/?page_id=618)

### Setup: Überprüfe, dass alles funktioniert

Benötigt werden: Roboter, Pi-Top, SD-Karte, Schalterplatte
Nimm einen Roboter und baue alles auf wie auf dem untenstehenden Foto gezeigt. Stelle sicher, dass der Rasberry Pi im Pi-Top ist mit einer SD-Karte ausgestattet ist, die die Lektionsbeispiele enthält. 

![Pi-top and robot setup](/images/CEEDsetup.jpg?raw=true)

Um den Pi-Top anzuschalten, drücke den grünen Anschaltknopf auf der Rückseite (unterhalb des Ladekabels) für 3 Sekunden. Wenn der pi-top hochgefahren ist solltest Du den Desktopschirm sehen (siehe untenstehendes Foto). 

![Pi-top desktop](/images/PiDesktop.jpg?raw=true)


## Beispiel 1: Einschalten einer LED Lampe mit Hilfe von GPIO-Pins

In Deinem Bausatz solltest Du eine Schalterplatte mit einer LED und einem Resistor vorfinden. 

![LED circuit](/images/Circuit.jpg?raw=true)

Verbinde zuerst die LED Lampe mit dem Pi indem Du die Kabel mit Stift 5 und 6 verbindest. Das Diagram könnte dabei hilfreich sein. 

![GPIO pin layout](/images/GPIO_PinLayout.png?raw=true)

Der Code fur das erste Beispiel ist im nodebots Ordner auf dem Desktop to finden. Öffne den Ordner und das erste Beispiel. Im Ordner findest Du die Datei `index.js`.

Um das Skripts auszuführen benutzen wir die node Laufzeitumgebung. Um das Programm auszuführen, öffne das Terminal indem Du auf das ![Terminalsymbol](/images/terminalIcon.png?raw=true) klickst und tippe

`cd Desktop/nodebots/`

Um das Programm auszuführen, gib 

`node index.js` 

ein. Die Lampe sollte blinken. Ist dies nicht der Fall, tausche die Kabelverbindungen aus.

### Aufgabe

Ändere den Code so, dass sich das Blinkverhalten der Lampe ändert. Der Code befindet sich in der `index.js` Datei die Du schon in einem früheren Schritt geöffnet hast.  

## Beispiel 2: Betreibe einen Webserver auf dem Raspberry Pi

In diesem Beispiel betreiben wir eine Website auf einem Server auf dem Raspberry Pi und greifen dann auf von einem anderen Gerät im gleichen Netzwerk auf die Webseite zu.

Ändere im Terminal das Verzeichnis indem Du Folgendes eingibst:

`cd /home/pi/Desktop/nodebots/example2`

Führe das Skript aus indem Du

`node index.js`

eingibst.

Das Skript started einen Webserver. Das Beispiel beinhaltet 2 Seiten:

- eine Startseite `/`
- eine Willkommensseite `/hello`

Öffne einen Internetbrowser auf dem Pi und navigiere zu

`localhost:3000/`

Du solltest die Nachricht "Hello World" sehen. Navigiere zur zweiten Seite

`localhost:3000/hello`

Du solltest die Nachricht "Hello there, how are you?" sehen.

Um mit Deinem Smartphone auf den Webserver im gleichen Netzwerk zuzugreifen, benötigst Du die IP-Adresse Deines Raspberry Pi. Zeige mit dem Mauszeiger auf das Netzwerksymbol in der oberen rechten Ecke des Bildschirms und die Adresse Deines Pis wird angezeigt.

![IP address](/images/IP_address.jpg?raw=true)

Navigiere im Browser Deines Smartphones zur Seite

`<-address->:3000/hello` wobei Du <-address-> mit der Adresse Deines Pis ersetzt.

Du solltest die Nachricht "Hello World" sehen. 

### Aufgabe

Kannst Du eine dritte Seite mit der URL `/goodbye` und einer lustigen Nachricht hinzufügen?

## Beispiel 3: Steuere einen Pi-Roboter von einer Webseite

In diesem Beispiel betreiben wir einen Webserver auf dem Raspberry Pi, der den Roboter steuern kann. Starte indem Du den Roboter mit dem Pi-Top verbindest und ihn erhöhst, so dass die Räder nicht den Tisch berühren (siehe folgendes Foto).

![Robot setup with wheels raised](/images/Robot.jpg?raw=true)

Navigiere zum Terminal und wechsle in das Verzeichnis

`cd /home/pi/Desktop/nodebots/example3` 

Führe das Skript aus indem Du

 `node index.js`

eingibst.

Das Skripts started einen Webserver und bietet Pfade um den Roboter vorwärts und nach links zu lenken und anzuhalten. Während das Skript läuft, öffne einen Webbrowser und navigiere zu

`localhost:3000/forwards`

Um den Roboter zu stoppen, navigiere zu 

`localhost:3000/stop`

Beide URLs sollten im Browser als Lesezeichen gespichert sein.

### Aufgabe

Versuche den Code mit den Pfaden `/backwards` und `/right` zu vervollständigen.


## Weitere Aufgaben an denen Du Dich versuchen kannst:

* Steuere den Roboter von Deinem Smartphone. Batterien sind vorhanden.
* Weitere Codebeispiele sind in unserem GitHub Repositorium zu finden: https://github.com/MozCCBham/
