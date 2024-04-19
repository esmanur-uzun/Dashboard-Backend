const joi = require("joi");
const APIError = require("../../utils/errors");

class authValidation {
  constructor() {}

  static register = async (req, res, next) => {
    try {
      await joi
        .object({
          fullName: joi.string().trim().min(3).max(30).required().messages({
            "string.base": "Bu Alan Sadece Alfabetik Karakterden Oluşmalıdır",
            "string.empty": "İsim Alanı Boş Geçilemez",
            "string.min": "İsim Alanı En Az 3 Karakter Olmalıdır",
            "string.max": "İsim Alanı En Fazla 30 Karakterden Olışabilir",
            "string.required": "İsim Alanı Zorunludur",
          }),
          email: joi
            .string()
            .email()
            .trim()
            .min(3)
            .max(30)
            .required()
            .messages({
              "string.base": "Bu Alan Normal Metin Olmalıdır",
              "string.empty": "Email Alanı Boş Geçilemez",
              "string.email": "Lütfen Geçerli Bir Email Adresi Giriniz",
              "string.min": "Email Alanı En Az 3 Karakter Olmalıdır",
              "string.max": "Email Alanı En Fazla 30 Karakterden Olışabilir",
              "string.required": "Email Alanı Zorunludur",
            }),
          password: joi.string().trim().min(8).max(13).required().messages({
            "string.base": "Bu Alan Normal Metin Olmalıdır",
            "string.empty": "Şifre Alanı Boş Geçilemez",
            "string.min": "Şifre Alanı En Az 8 Karakter Olmalıdır",
            "string.max": "Şifre Alanı En Fazla 13 Karakterden Olışabilir",
            "string.required": "Şifre Alanı Zorunludur",
          }),
        })
        .validateAsync(req.body);
    } catch (error) {
      if (error.details && error?.details[0].message) {
        throw new APIError(error.details[0].message, 400);
      } else {
        throw new APIError("Lütfen Validasyon Kurallarına Uyun", 400);
      }
    }
    next();
  };

  static login = async (req, res, next) => {
    try {
      await joi.object({
        email: joi.string().email().trim().min(3).max(30).required().messages({
          "string.base": "Bu Alan Normal Metin Olmalıdır",
          "string.empty": "Email Alanı Boş Geçilemez",
          "string.email": "Lütfen Geçerli Bir Email Adresi Giriniz",
          "string.min": "Email Alanı En Az 3 Karakter Olmalıdır",
          "string.max": "Email Alanı En Fazla 30 Karakterden Olışabilir",
          "string.required": "Email Alanı Zorunludur",
        }),
        password: joi.string().trim().min(8).max(13).required().messages({
          "string.base": "Bu Alan Normal Metin Olmalıdır",
          "string.empty": "Şifre Alanı Boş Geçilemez",
          "string.min": "Şifre Alanı En Az 8 Karakter Olmalıdır",
          "string.max": "Şifre Alanı En Fazla 13 Karakterden Olışabilir",
          "string.required": "Şifre Alanı Zorunludur",
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

module.exports = authValidation;
