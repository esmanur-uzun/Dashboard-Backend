const APIError = require("../../utils/errors");
const Response = require("../../utils/response");
const product = require("./model");
const mongoose = require("mongoose");

const addProduct = async (req, res) => {
  try {
    const productSave = new product(req.body);
    const addProduct_response = await productSave.save();
    return new Response(addProduct_response, "Kayıt başarılı").created(res);
  } catch (error) {
    console.log(error);
    throw new APIError("Ürün Ekleme İşlemi Başarısız", 400);
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await product.find();
    return new Response(products, "Ürünler başarıyla alındı").success(res);
  } catch (error) {
    console.error(error);
    throw new APIError("Ürünleri Alma İşlemi Başarısız", 500);
  }
};

const deleteProduct = async (req, res) => {
  try {
    // Doğru ObjectId oluşturulması için req.params.id değerini bir dizeye çevirin
    const productId = new mongoose.Types.ObjectId(req.params.id);

    const deletedProduct = await product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return new Response(null, "Ürün bulunamadı").error404(res);
    }

    return new Response(deletedProduct, "Ürün başarıyla silindi").success(res);
  } catch (error) {
    console.error(error);
    throw new APIError("Ürün Silme İşlemi Başarısız", 500);
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedFields = req.body; // Güncellenecek alanları istek gövdesinden alın

    // Ürünü güncellemek için findByIdAndUpdate() metodunu kullanın
    const updatedProduct = await product.findByIdAndUpdate(
      productId,
      updatedFields,
      { new: true }
    );

    if (!updatedProduct) {
      return new Response(null, "Ürün bulunamadı").error404(res);
    }

    return new Response(updatedProduct, "Ürün başarıyla güncellendi").success(
      res
    );
  } catch (error) {
    console.error(error);
    throw new APIError("Ürün Güncelleme İşlemi Başarısız", 500);
  }
};
module.exports = { addProduct, getProduct, deleteProduct,updateProduct };
