# Raspberry Pi Nodebots

des Mozilla Campus Club Birmingham (mozccbham.org)

*Diese Übungen dienen als Einblick in die Grundlagen von node.js und Raspberry Pi für Robotik*

### Setup: Überprüfe, dass alles funktioniert

Benötigt werden: Roboter, Pi-Top, SD-Karte, Schalterplatte
Baue alles auf wie auf dem untenstehenden Foto gezeigt und stelle sicher, dass der Rasberry Pi im Pi-Top ist mit einer SD-Karte ausgestattet ist, die die Lektionsbeispiele enthält. 

[insert image]

Um den Pi-Top anzuschalten, drücke den grünen Anschaltknopf auf der Rückseite für 3 Sekunden.

[power button image]

Wenn der pi-top hochgefahren ist solltest Du den Desktopschirm sehen (siehe untenstehendes Foto). 

## Beispiel 1: Einschalten einer LED Lampe mit Hilfe von GPIO-Pins

In Deinem Bausatz solltest Du eine Schalterplatte mit einer LED und einem Resistor vorfinden. Verbinde zuerst die LED Lampe mit dem Pi indem Du die Kabel mit Stift 5 und 6 verbindest. Das Foto könnte dabei hilfreich sein. 

Der Code fur das erste Beispiel ist im nodebots Ordner auf dem Desktop to finden. Öffne den Ordner und das erste Beispiel. Im Ordner findest Du die Datei index.js

Um das Skripts auszuführen benutzen wir die node Laufzeitumgebung. Um das Programm auszufuehren, öffne das Terminal indem Du auf das Terminalsymbol klickst und tippe

cd Desktop/nodebots/example1

Um das Programm auszuführen, gib 

node index.js 

ein. Die Lampe sollte blinken. Ist dies nicht der Fall, tausche die Kabelverbindungen aus.

### Aufgabe

Ändere den Code so, dass sich das Blinkverhalten der Lampe ändert. Der Code befindet sich in der index.js Datei die Du schon in einem früheren Schritt geöffnet hast.  

## Beispiel 2: Betreibe einen Webserver auf dem Raspberry Pi
