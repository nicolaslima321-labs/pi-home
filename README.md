# Pi-Home
 
Pi-Home is a semiannual project in the discipline of Computer Engineering Projects II, developed with JavaScript.

PI-Home is an IoT product, it disposes an web interface that allow to control the ligthning of your own house.

The web interface comunicate with an Raspberry PI 4, through an real time database of Google (Firebase/Firestore), that will allow us to send the control to Raspberry PI promoves eletric signals to the switchs of the ligths of the house.

---
## Raspberry Setup

The S.O addopted to Raspberry was a UNIX, Raspbian, first you must update the repos of system with

```
sudo apt-get update -y && sudo apt-get upgrade -y
```

After you must install proftpd, with follow command

```
sudo apt install proftpd
```

After instalation, verify if **python3** is already installed at system with `python3 -V`, it must output **Python 3.x.y** or something like, now you must install pip for python 3, with

```
sudo apt-get install python3-pip -y
```

You also will need to install firebase package with pip, running `pip3 install --upgrade firebase_admin`

To comunicate with Raspberry PINs through Python, you must install RPi.GPIO with

```
sudo apt install RPi.GPIO -y
```

With RPi.GPIO installed, copy the file **pi-home.py** located at root folder of the repository, and paste into Raspberry. After that, run `python3 pi-home.py` and the Raspberry will be able to set the outputs to make the switchs of the lights

---
## Web Setup
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
