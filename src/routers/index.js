const router = require("express").Router()

const auth = require("../app/auth/router")
const user = require("../app/users/router")
router.use(auth)
router.use(user)

module.exports= router