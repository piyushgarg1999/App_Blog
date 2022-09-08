const { credential } = require("firebase-admin");
const { initializeApp } = require("firebase/app");
const {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyAgA3q6CskJ95Ew5QZqtf2aGR3ZRQ7OFeQ",
  authDomain: "blognodejs-12c4c.firebaseapp.com",
  projectId: "blognodejs-12c4c",
  storageBucket: "blognodejs-12c4c.appspot.com",
  messagingSenderId: "540749406738",
  appId: "1:540749406738:web:6631db34ae33490317aecb",
  measurementId: "G-60WW0TKNRS",
};
var newsesson;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const { getDatabase } = require("firebase/database");

exports.signUp = (req, res) => {
  console.log(req.method);
  if (req.method === "GET") res.render("register.ejs");
  else {
    console.log(req.body);
    createUserWithEmailAndPassword(auth, req.body.email, req.body.psw).then(
      (credential) => {
        const user = credential.user;
        console.log(user.uid);

        req.session.uid = user.uid;
        console.log(req.session.uid);
        res.redirect("/home");
      }
    );
  }
};
exports.signIn = (req, res) => {
  console.log(req.method);
  if (req.method === "GET") res.render("signin.ejs");
  else {
    console.log(req.body);
    res.redirect("/home");
  }
};
exports.myHome = (req, res) => {
  res.render("home.ejs");
};
