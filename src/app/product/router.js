const router = require("express").Router()
const productValidation = require("../../middlewares/validation/product.validation")
const { addProduct, getProduct } = require("./controller")

router.post("/product",productValidation.checkProduct,addProduct)
router.get("/product",getProduct)

module.exports = router