const express = require("express");
const router = express.Router();

const productRoute = require("./products");
const categoryRoute = require("./categories");
const authRoute = require("./auth");
const couponRoute = require("./coupons");
const userRoute = require("./users");
const paymentRoute = require("./payment");

router.use("/products", productRoute);
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/coupons", couponRoute);
router.use("/users", userRoute);
router.use("/payment", paymentRoute);

module.exports = router;
