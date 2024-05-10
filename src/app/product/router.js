const router = require("express").Router()
const productValidation = require("../../middlewares/validation/product.validation")
const { addProduct, getProduct, deleteProduct, updateProduct } = require("./controller")

router.post("/product",productValidation.checkProduct,addProduct)
router.get("/product",getProduct)
router.delete("/product/:id",deleteProduct)
router.put("/product/:id",updateProduct)
module.exports = router