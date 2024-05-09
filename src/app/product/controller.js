const APIError = require("../../utils/errors");
const Response = require("../../utils/response");
const product = require("./model");

const addProduct = async (req, res) => {
  try {
    const productSave = new product(req.body);
    const addProduct_response = await productSave.save();
    return new Response(addProduct_response, "Kayıt başarılı").created(res);
  } catch (error) {
    console.log(error);
    throw new APIError("Ürün Ekleme İşlemi Başarısız",400)
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await product.find();
    return new Response(products, "Ürünler başarıyla alındı").send(res);
  } catch (error) {
    console.error(error);
    throw new APIError("Ürünleri Alma İşlemi Başarısız", 500);
  }
};

module.exports = {addProduct,getProduct}
