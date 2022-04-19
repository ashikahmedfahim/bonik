const express = require("express");
const orderController = require("../controllers/order");
const catchAsync = require("../utils/catchAsync");
const router = express.Router();

router.get("/:start_date/:end_date/:status", catchAsync(orderController.getOrderCountByDateAndStatus));

module.exports = router;
