# Reflexion CI/CD Pipeline Shopping List


## Aufbau der Pipeline

Die Pipeline läuft bei jedem Push auf main. Bei CI-1 wird nur der Code ausgecheckt. Bei CI-2 kommen Node, npm ci, Linting und die Tests dazu, alles nacheinander in einem Job. Bei CI-3 haben wir das in drei Jobs aufgeteilt: lint und test laufen parallel und deploy wartet mit needs, bis beide durch sind.
## Warum diese Schritte

Ohne checkout hat der Runner keinen Code, deshalb kommt das zuerst. Mit npm ci werden genau die Versionen aus der package-lock.json installiert.
--legacy-peer-deps brauchten wir, weil die Installation sonst fehlschlägt:
Das Projekt nutzt eine Vorabversion von React 19, und die passt nicht zur Testing Library. Der Deploy-Job hat needs, damit nur deployt wird, wenn Lint und Test grün sind.
## Was man besser machen könnte

Jeder Job macht nochmal npm ci. Mit cache: npm wäre es schneller.

Das Deployment ist nur ein echo. Als nächstes könnte man richtig deployen, zum Beispiel auf Vercel.

Es gibt nur einen Test für den Header. Der Rest ist nicht getestet.


## KI Nutzung

**Aufgabe 1:** Keine KI.

**Aufgabe 2:** Claude, Sie hat und die Tests und lint erstellt und war auch der Helfer und Fehlerbeheber
** Markus fix **
PS C:\projekte\m324-shopping-list> npm test

> shared-shopping-list@0.1.0 test
> jest

FAIL  src/app/components/__tests__/Header.test.js
● Test suite failed to run

    Cannot find module '@testing-library/jest-dom' from 'jest.setup.js'

    

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/index.js:1031:11)
      at Object.<anonymous> (jest.setup.js:5:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        3.578 s
Ran all test suites.


lösung ->

Peer-dependency Konflikt wegen der React 19 RC-Version. Ich nutze --legacy-peer-deps, wie es hier auch schon für die anderen testing-library Pakete nötig gewesen sein muss.
Run Command
cd C:\projekte\m324-shopping-list; npm.cmd install --save-dev @testing-library/jest-dom --legacy-peer-deps


**Aufgabe 3:** Die KI hat mir drei Ideen vorgeschlagen, daher war sie der Ideen Entwickler. Ich habe B genommen, weil klare Reihenfolge, deployt wird genau das getestete Build..

## Wo die KI nicht gut war

Die KI war oft mals sehr verwirrend und hat sachen hinzugefügt die es nicht gebraucht hötte laut Aufgabe.

## Mini Reflexion

**Wie haben wir die KI genutzt?** Als ideen Entwickler und als Lehrer Figur

**Warum war das sinnvoll?** Damit man die Kontrolle hat und nicht blind machen lässt

**Was haben wir selbst verstanden und gemacht?** Wir haben die Antworten gefiltert und selbst alles zusammengebaut

**Was würden wir nächstes Mal besser fragen?** Strukturiertere Antworten

## Philipp

Ich habe die Reflexion aufgebaut und die ganze Pipeline beschrieben. Zudem habe ich den Kontakt mit der Ki gepflegt.
Markus hat meinen Input von der Ki verwendet und ich habe vorausgearbeitet und den Ablauf der Aufgaben weitergeleitet.
Das war sehr produktiv

## Markus

Die Partner Arbeit ist gut verlaufen, Anfangs nicht ganz weil ich einfach begonnen habe und nicht gesagt habe wie viel ich wusste und konnte. 
Philipp hat gut mit Aufgabe 2 vorgearbeitet und ich konnte es ziemlich einfach ergänzen, ich musste einfach die Vorlage von der Aufgabe 1 nehmen. 
Ich habe die Aufgabe 1 gemacht, Philipp hat mir den code für Aufgabe 2 gegeben und ich habe es ausgeführt und kleinen Fehler repariert. 
Aufgabe 3 haben wir zusammen gemacht und die Reflexion hat Philipp gemacht und ich die Dokumentation der Aufgaben. 