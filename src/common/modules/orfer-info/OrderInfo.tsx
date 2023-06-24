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
    <p className="text-primary subtitle1">{information}</p>
    <p>{description}</p>
    <div className={styles.divider} />
    <div className={styles.goods}>
      <p className="text-primary body2">{title}</p>
      <p className="text-outline overline">{name}</p>
    </div>
    <div className={styles.divider} />
    <div className={styles.costInfo}>
      <b>5 days free</b>
      <p className="text-primary body3">then {cost} UAH per 14 days</p>
    </div>
  </div>
);

export default OrderInfo;
