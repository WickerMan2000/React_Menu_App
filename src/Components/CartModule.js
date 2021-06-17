import Index from "./Index";
import styles from "./CartModule.module.css";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <h1>Your Cart</h1>
      <Index />
    </div>
  );
};

export default Cart;
