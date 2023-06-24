import valid from "card-validator";
import * as yup from "yup";

const cardSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .test(
      "CreditCard",
      "Credit Card number is invalid",
      (value) => valid.number(value).isValid
    ),
  date: yup
    .string()
    .test(
      "date",
      "Expiration Date is invalid",
      (value) => valid.expirationDate(value).isValid
    ),
  cvc: yup
    .string()
    .test(
      "cvc",
      "Card Verification Code is invalid",
      (value) => valid.cvv(value).isValid
    ),
});

export default cardSchema;
