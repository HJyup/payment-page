import { Form, Formik, FormikHelpers } from "formik";

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
          }, 5000);
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
              <Input
                id="date"
                name="date"
                placeholder="MM/YY"
                label="Expiration Date"
                error={errors.date}
              />
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
            <Button
              type="submit"
              text="Start Trial"
              isSubmit={isSubmitting}
              isValid={isValid}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentForm;
