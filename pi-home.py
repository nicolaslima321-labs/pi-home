import RPi.GPIO as GPIO
import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore
from time import sleep

#Create the credentials based on the certificate
cred = credentials.Certificate("learning-fd3cc-firebase-adminsdk-vk2o6-09f32a27e6.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

#initialize PINS
GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)

status_ref=db.collection(u'pi-home').document(u'rpBFRAGWWrvkcHUK36L6')

while True:

    try:
        status=status_ref.get()
        print(format(status.to_dict()[u'principal_room']))
        GPIO.output(17, status.to_dict()[u'principal_room'])

    except google.cloud.exception.NotFound:
        print(u'No data was found')
    
    sleep(1)