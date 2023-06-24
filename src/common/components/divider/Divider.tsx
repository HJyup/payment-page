import { FC } from "react";

import styles from "./Divider.module.scss";

export interface DividerProps {
  text: string;
}

const Divider: FC<DividerProps> = ({ text }: DividerProps) => (
  <div className={styles.divider}>
    <div className={styles.line} />
    <p className={styles.text}>{text}</p>
    <div className={styles.line} />
  </div>
);

export default Divider;
