const joi = require("joi");
const APIError = require("../../utils/errors");

class productValidation {
  static checkProduct = async (req, res, next) => {
    try {
      await joi.object({
        productName: joi.string().trim().min(3).max(30).required().messages({
          "string.base": "Bu Alan Sadece Alfabetik Karakterden Oluşmalıdır",
          "string.empty": "Ürün İsmi Boş Geçilemez",
          "string.min": "Ürün İsmi En Az 3 Karakter Olmalıdır",
          "string.max": "Ürün İsmi En Fazla 30 Karakterden Olışabilir",
          "string.required": "Ürün İsim Alanı Zorunludur",
        }),
        description: joi.string().trim().min(10).max(100).required().messages({
          "string.base": "Bu Alan Sadece Alfabetik Karakterden Oluşmalıdır",
          "string.empty": "Ürün Açıklaması Boş Geçilemez",
          "string.min": "Ürün Açıklaması En Az 10 Karakter Olmalıdır",
          "string.max": "Ürün Açıklaması En Fazla 100 Karakterden Olışabilir",
          "string.required": "Ürün Açıklama Alanı Zorunludur",
        }),
        price: joi.number().min(0).required().messages({
          "number.base": "Fiyat Alanı Sayısal Değerlerden Oluşmalıdır",
          "number.min": "Fiyat 0'dan Küçük Olamaz",
          "any.required": "Fiyat Alanı Zorunludur",
        }),
        stock: joi.number().min(1).required().messages({
          "number.base": "Stok Alanı Sayısal Değerlerden Oluşmalıdır",
          "number.min": "Stok 1'den Küçük Olamaz",
          "any.required": "Stok Alanı Zorunludur",
        }),
      }).validateAsync(req.body)
    } catch (error) {
      if (error.details && error?.details[0].message) {
        throw new APIError(error.details[0].message, 400);
      } else {
        throw new APIError("Lütfen Validasyon Kurallarına Uyun", 400);
      }
    }
    next();
  };
}

module.exports = productValidation;
