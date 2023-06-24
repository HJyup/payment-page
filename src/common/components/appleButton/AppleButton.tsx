import AppleLogo from "../../../logos/Apple_Pay.svg";

import styles from "./AppleButton.module.scss";
const AppleButton = () => (
  <button className={styles.button}>
    <img src={AppleLogo} alt="Apple Logo" />
  </button>
);

export default AppleButton;
