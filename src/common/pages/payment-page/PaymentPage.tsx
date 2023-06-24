import { useState } from "react";

import BackLogo from "../../../logos/Back.svg";
import Solid from "../../../logos/Solid.svg";
import AppleButton from "../../components/appleButton";
import Divider from "../../components/divider";
import OrderInfo from "../../modules/orfer-info/OrderInfo";
import PaymentDescription from "../../modules/payment-description/PaymentDescription";
import PaymentForm from "../../modules/payment-form";

import styles from "./PaymentPage.module.scss";
const PaymentPage = () => {
  const [translate, setTranslate] = useState(false);
  const text = translate ? "Eng" : "Укр";
  return (
    <div className={styles.container}>
      <a href="https://solidgate.com/">
        <img src={BackLogo} height={24} width={24} alt="Back" />
      </a>
      <div className={styles.main}>
        <div className={styles.info}>
          <p className={styles.checkout}>Checkout</p>
          <p className={styles.infoMain}>5 days free</p>
          <p className={styles.infoSecond}>then 299.99 UAH per 14 days</p>
        </div>
        <AppleButton />
        <Divider text="or pay with card" />
        <div className={styles.form}>
          <PaymentForm />
        </div>
        <PaymentDescription />
        <OrderInfo
          information="Order info <= 100 char."
          description="Description <= 400 char."
          title="Lamel Professional Smart Skin Compact Powder"
          name="Пудра для лица"
          cost={299.99}
        />
        <div className={styles.footer}>
          <p>Powered by</p>{" "}
          <img src={Solid} height={20} width={36} alt="Solid Logo" />
        </div>
      </div>
      <button
        onClick={() => setTranslate(!translate)}
        className={styles.translateButton}
      >
        {text}
      </button>
    </div>
  );
};

export default PaymentPage;
