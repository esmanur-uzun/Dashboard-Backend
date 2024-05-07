const joi = require("joi");
const APIError = require("../../utils/errors");

class productValidation {
  static product = async (req, res, next) => {
    try {
      await joi.object({
        productName: joi.string().trim().min(3).max(30).required().messages({
          "string.base": "Bu Alan Sadece Alfabetik Karakterden Oluşmalıdır",
          "string.empty": "Ürün İsmi Boş Geçilemez",
          "string.min": "Ürün İsmi En Az 3 Karakter Olmalıdır",
          "string.max": "Ürün İsmi En Fazla 30 Karakterden Olışabilir",
          "string.required": "Ürün İsim Alanı Zorunludur",
        }),
      });
    } catch (error) {}
  };
}

module.exports = productValidation;
