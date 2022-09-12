const express = require("express");
const server = express();
//const { set_Engine } = require("./middleware");
const session = require("express-session");

server.use(
  session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: false,

    resave: false,
  })
);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api/v1", require("./routers/userAuthRouter"));
server.use("/api/v1", require("./routers/orderRouter"));
server.use("/api/v1", require("./routers/itemRouter"));

server.listen(4400, () => {
  console.log("server is running on 4400");
});
