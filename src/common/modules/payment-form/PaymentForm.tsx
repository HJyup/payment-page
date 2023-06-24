import { useState } from "react";
import Lottie from "react-lottie";
import { Form, Formik, FormikHelpers } from "formik";

import { defaultOptions } from "../../../lottie/options/CheckOption";
import cardSchema from "../../../schema";
import Button from "../../components/button";
import Input from "../../components/input";

import styles from "./PaymentForm.module.scss";

interface Values {
  cardNumber: string;
  date: string;
  cvc: string;
}

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{
          cardNumber: "",
          date: "",
          cvc: "",
        }}
        validationSchema={cardSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setSubmitting(true);
          setTimeout(() => {
            console.log("Trying to buy something. (Pls buy me Macbook Pro 16)");
            setSubmitting(false);
            setSuccess(true);
          }, 2000);
        }}
      >
        {({ isSubmitting, errors, isValid }) => (
          <Form className={styles.form}>
            <Input
              placeholder="1234 1234 1234 1234"
              id="cardNumber"
              name="cardNumber"
              label="Card Number"
              error={errors.cardNumber}
            />
            <div className={styles.additional}>
              <div className={styles.additionalBlock}>
                <Input
                  id="date"
                  name="date"
                  placeholder="MM/YY"
                  label="Expiration Date"
                  error={errors.date}
                />
              </div>
              <div className={styles.additionalBlock}>
                <Input
                  id="cvc"
                  name="cvc"
                  placeholder="&#9679;&#9679;&#9679;"
                  type="password"
                  label="CVC"
                  error={errors.cvc}
                  isSVC
                />
              </div>
            </div>
            <Button
              type="submit"
              text="Start Trial"
              isSubmit={isSubmitting}
              isValid={isValid}
            />
            {success && (
              <div className={styles.success}>
                <Lottie options={defaultOptions} height={25} width={25} />
                <p className="overline">Payment was successful</p>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentForm;
