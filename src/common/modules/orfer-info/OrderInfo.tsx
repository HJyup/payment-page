import { FC } from "react";

import styles from "./OrderInfo.module.scss";

export interface OrderInfoProps {
  information: string;
  description: string;
  title: string;
  name: string;
  cost: number;
}

const OrderInfo: FC<OrderInfoProps> = ({
  information,
  description,
  title,
  name,
  cost,
}: OrderInfoProps) => (
  <div className={styles.container}>
    <p className={styles.info}>{information}</p>
    <p>{description}</p>
    <div className={styles.divider} />
    <div className={styles.goods}>
      <p className={styles.title}>{title}</p>
      <p className={styles.name}>{name}</p>
    </div>
    <div className={styles.divider} />
    <div className={styles.costInfo}>
      <b>5 days free</b>
      <p className={styles.cost}>then {cost} UAH per 14 days</p>
    </div>
  </div>
);

export default OrderInfo;
