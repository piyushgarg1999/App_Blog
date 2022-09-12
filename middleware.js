const express = require("express");
const server = express();
exports.set_Engine = (req, res, next) => {
  console.log(req.session.user);
  if (req.session.user) {
    next();
  } else {
    return res.send({ message: "unauthorized user" });
  }
  //   server.use(express.json());
  //   server.use(express.urlencoded({ extended: false }));
  //   //express.urlencoded({ extended: true });
};
