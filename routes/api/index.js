const router = require("express").Router()
const thoughtRoutes = require("./thoughtroute")
const userRoutes = require("./userroute")

router.use("/thoughts",thoughtRoutes)
router.use("/users",userRoutes)

module.exports = router