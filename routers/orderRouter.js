const router = require("express").Router();
const { set_Engine } = require("../middleware");
const {
  createOrder,
  deleteOrder,
  updateOrderById,
  readOrder,
  readOrderById,
} = require("../controllers/orderUser");
router.get("/user/orders", set_Engine, readOrder);
router.get("/user/order/:id", set_Engine, readOrderById);

module.exports = router;
