const router = require("express").Router();
const ossToken = require("./ossToken")

//Article routes
router.use("/token", ossToken);

module.exports = router;