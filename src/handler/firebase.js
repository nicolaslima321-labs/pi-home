// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require('firebase/app')

// Add the Firebase products that you want to use
require('firebase/auth')
require('firebase/firestore')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyA7swNjX3gr0-BT-H26r30IVEstmbGPiu0',
  authDomain: 'learning-fd3cc.firebaseapp.com',
  databaseURL: 'https://learning-fd3cc.firebaseio.com',
  projectId: 'learning-fd3cc',
  storageBucket: 'learning-fd3cc.appspot.com',
  messagingSenderId: '918478972375',
  appId: '1:918478972375:web:338a6af442bb65eae2d792'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var db = firebase.firestore()

export default db
