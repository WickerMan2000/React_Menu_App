import Button from '../UI/Button';
import { useContext, useReducer } from 'react';
import InputContext from './store/InputContext';
import styles from './Meal.module.css';

const defaultState = { amount: 1, allowedNumberOfItems: 0 }

const inputReducer = (state, action) => {
    if (action.type === 'INPUT_QUANTITY') {
        return { amount: action.payload, allowedNumberOfItems: state.allowedNumberOfItems }
    }
    if (action.type === 'CHECK_NUMBER_OF_ITEMS') {
        return { amount: state.amount, allowedNumberOfItems: state.allowedNumberOfItems + state.amount }
    }
    return defaultState;
}

const Meal = ({ title, description, price }) => {
    const [input, dispatchInput] = useReducer(inputReducer, defaultState);
    const inputCtx = useContext(InputContext);

    const numberChangeHandler = event => {
        const { value } = event.target;
        if (value < 1 || value > 5) {
            return;
        }
        dispatchInput({ type: 'INPUT_QUANTITY', payload: parseInt(value) });
    }

    const click = () => {
        dispatchInput({ type: 'CHECK_NUMBER_OF_ITEMS' });
        inputCtx.dispatch({
            type: 'TOTAL_SUM',
            meal: {
                title: title,
                description: description,
                price: price,
                item: input.amount
            }
        });
    }

    return (
        <div className={styles.meal}>
            <ul>
                <li>{title}</li>
                <li>{description}</li>
                <li>{price}</li>
            </ul>
            <div>
                <h1>Amount</h1>
            </div>
            <input type="number" value={input.amount} onChange={numberChangeHandler} />
            <Button disabled={input.allowedNumberOfItems + input.amount > 5} onClick={click}>+Add</Button>
            <hr></hr>
        </div>
    );
}

export default Meal;