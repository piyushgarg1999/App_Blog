const router = require("express").Router();
const { signUp, signIn } = require("../controllers/users_auth");

router.route("/user/register").get(signUp).post(signUp);
router.route("/user/login").get(signIn).post(signIn);

module.exports = router;
