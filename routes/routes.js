const { Router } = require("express");
const express = require("express");
const MessageRoute = require("../controller/message");

const router = express.Router();

router.get("/", MessageRoute.getMessage);
router.post("/", MessageRoute.postMessage);

module.exports = router
