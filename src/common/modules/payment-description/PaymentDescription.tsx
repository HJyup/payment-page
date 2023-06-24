import styles from "./PaymentDescription.module.scss";
const PaymentDescription = () => (
  <div className={styles.container}>
    <p className="text-secondary overline">
      You&apos;ll have your <b>Plan Pro during 1 year</b>. After this period of
      time, your plan will be <b>automatically renewed</b> with its original
      price without any discounts applied.
    </p>
  </div>
);

export default PaymentDescription;
