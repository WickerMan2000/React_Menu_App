import styles from "./Button.module.css";

const Button = ({ onClick, children, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
