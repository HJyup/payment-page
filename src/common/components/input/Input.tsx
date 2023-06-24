import { ComponentPropsWithoutRef, FC } from "react";
import { Field } from "formik";

import styles from "./Input.module.scss";

export interface InputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  placeholder: string;
  type?: "text" | "password";
  id: string;
  name: string;
  label: string;
  error: string | undefined;
  isSVC?: boolean;
}

const Input: FC<InputProps> = ({
  placeholder,
  type = "text",
  id,
  name,
  label,
  error,
  isSVC,
  ...rest
}: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Field
        placeholder={placeholder}
        className={styles.input}
        type={type}
        name={name}
        id={id}
        {...rest}
      />
      {isSVC && <i className={styles.hint} />}
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default Input;
