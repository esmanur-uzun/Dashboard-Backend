const router = require("express").Router()

const auth = require("../app/auth/router")
const user = require("../app/users/router")
const product = require("../app/product/router")
router.use(auth)
router.use(user)
router.use(product)

module.exports= router