// const { initializeApp } = require("firebase/app");
// const dotenv = require("dotenv").config();

// const firebaseConfig = {
//   apiKey: "AIzaSyAgA3q6CskJ95Ew5QZqtf2aGR3ZRQ7OFeQ",
//   authDomain: "blognodejs-12c4c.firebaseapp.com",
//   databaseURL: "https://blognodejs-12c4c-default-rtdb.firebaseio.com",
//   projectId: "blognodejs-12c4c",
//   storageBucket: "blognodejs-12c4c.appspot.com",
//   messagingSenderId: "540749406738",
//   appId: "1:540749406738:web:6631db34ae33490317aecb",
//   measurementId: "G-60WW0TKNRS",
// };

// var admin = require("firebase-admin");

// var serviceAccount = require("./blognodejs-12c4c-firebase-adminsdk-riht1-4e0d8b587f.json");

// exports.app = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   //   databaseURL: "https://blognodejs-12c4c-default-rtdb.firebaseio.com"
// });

var admin = require("firebase-admin");

var serviceAccount = require("./mynodejsassignment-firebase-adminsdk-vwboj-d75a036c6f.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = { app };
// exports.firebaseapp = initializeApp(firebaseConfig);
