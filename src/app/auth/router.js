const router = require("express").Router()
const {login,register} = require("./contoller")
const authValidation = require("../../middlewares/validation/auth.validation")

router.post("/login",authValidation.login,login)
router.post("/register",authValidation.register,register)

module.exports = router
