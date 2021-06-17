import Button from "../UI/Button";
import Index from "./Index";
import CartModalList from "./CartModalList";
import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Header.module.css";
import backDropStyles from "./BackDrop.module.css";

const BackDrop = ({ show, onClick }) => {
  return (
    <div className={show && backDropStyles.backdrop} onClick={onClick}></div>
  );
};

const Header = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Meals</h1>
        <Button
          onClick={() => {
            setClicked(prevState => !prevState);
          }}
        >
          <span>
            <h2>Your Cart</h2>
          </span>
          <span>
            <Index />
          </span>
        </Button>
      </header>
      {ReactDOM.createPortal(
        <BackDrop
          show={clicked}
          onClick={() => {
            setClicked(prevState => !prevState);
          }}
        />,
        document.getElementById("backdrop-root")
      )}
      {clicked && (
        <CartModalList
          onClick={() => {
            setClicked(prevState => !prevState);
          }}
        />
      )}
    </Fragment>
  );
};

export default Header;
