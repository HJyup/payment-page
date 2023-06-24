import { FC } from "react";

import Loader from "../loader";

import styles from "./Button.module.scss";

export interface ButtonProps {
  type?: "submit" | "button";
  text: string;
  isSubmit: boolean;
  isValid: boolean;
}
const Button: FC<ButtonProps> = ({
  type = "button",
  text,
  isSubmit,
  isValid,
}: ButtonProps) => {
  const isDisabled = !(!isSubmit && isValid);
  const content = isSubmit ? (
    <div className={styles.loading}>
      <Loader />
      <p className="button-text">Processing payment</p>
    </div>
  ) : (
    <p className={styles.text}>{text}</p>
  );
  return (
    <button className={styles.button} type={type} disabled={isDisabled}>
      {content}
    </button>
  );
};

export default Button;
