const { app } = require("../firebase/connections");
const { auth } = require("firebase-admin");
//const { getAuth } = require("firebase-admin/auth");
const { signInWithEmailAndPassword } = require("firebase/auth");
//const { firestore } = require("firebase-admin");

const otherApp = auth(app);
//const otherAuth = getAuth(app);
exports.signUp = (req, res) => {
  if (req.method == "GET") {
    res.status(200).render("userAuth/register.ejs");
  } else {
    otherApp
      .createUser({
        email: req.body.email,
        password: req.body.psw,
        displayName: req.body.email,
      })
      .then(() => {
        res.redirect(200, "login");
      })
      .catch((error) => {
        res.status(404).send({ msg: "sorry something went wrong" });
      });
  }
};

exports.signIn = async (req, res) => {
  if (req.method == "GET") {
    res.status(200).render("userAuth/signin.ejs");
  } else {
    const email = req.body.email;
    const user = await (await otherApp.getUserByEmail(email)).toJSON();
    const success = await otherApp.verifyIdToken(user.uid);
    console.log(user.success);
    // const user = await SignInMethod(otherApp, {
    //   email,
    //   password: req.body.psw,
    // });
    // const user = await signInWithEmailAndPassword(
    //   otherApp,
    //   email,
    //   (password = req.body.psw)
    // ).then((credential) => {
    //   const new_user = credential.user;
    //   console.log(new_user);
    // });
    // // const user = await (await otherApp.getUserByEmail(email)).toJSON();
    // console.log(user);

    req.session.user = true;
    res.redirect("orders");
  }
};

exports.signOut = (req, res) => {};
