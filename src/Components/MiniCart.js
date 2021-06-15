import React, { Fragment, useReducer } from "react";
import { useDispatch } from "react-redux";
import { counterActions, mealActions } from './store/index';
import Button from '../UI/Button';
import styles from './MiniCart.module.css';

const reducer = (state, action) => {
    if (action.type === 'INCREAMENT') {
        return { count: state.count + 1 }
    }
    if (action.type === 'DECREAMENT') {
        return { count: state.count - 1 }
    }
    return { count: 0 }
}

const MiniCart = ({ updateChange, item, title, description, price }) => {
    const [change, dispatchChange] = useReducer(reducer, { count: item });
    const dispatch = useDispatch();

    const changeUpdater = (type, counter) => {
        dispatchChange({ type: type });
        dispatch(counterActions.changeCounter({ counter: counter, title: title }));
        updateChange({ newQuantity: change.count + counter });
        dispatch(mealActions.change({
            meal: {
                title: title,
                description: description,
                price: price,
                item: counter
            }
        }))
    }

    return (
        <Fragment>
            <div className={styles.miniCart}>
                <h1 className={styles.first}>{title}</h1>
                <h2 className={styles.second}>{`$${price}`}</h2>
                <h3 className={styles.third}>{`X${change.count}`}</h3>
            </div>
            <Button onClick={change.count < 5 && changeUpdater.bind(null, 'INCREAMENT', 1)}>+</Button>
            <Button onClick={change.count > 0 && changeUpdater.bind(null, 'DECREAMENT', -1)}>-</Button>
            <hr></hr>
        </Fragment>
    );
}

export default MiniCart;