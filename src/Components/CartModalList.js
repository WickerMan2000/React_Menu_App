import React, { Fragment, useContext, useState } from 'react';
import InputContext from './store/InputContext';
import MiniCart from './MiniCart';
import Button from '../UI/Button';
import cartModalListStyles from './CartModalList.module.css';
import miniCartStyles from './MiniCart.module.css';

const CartModalList = ({ onClick }) => {
    const inputCtx = useContext(InputContext);
    const myMeals = Object.values(inputCtx.listOfMeals.reduce((accumulator, myOrder) => {
        if (myOrder.meal.title in accumulator) {
            accumulator[myOrder.meal.title].item += myOrder.meal.item
        } else {
            accumulator[myOrder.meal.title] = {
                title: myOrder.meal.title,
                description: myOrder.meal.description,
                price: myOrder.meal.price,
                item: myOrder.meal.item
            }
        }
        return accumulator
    }, []))

    const [quantity, setQuantity] = useState(myMeals);

    const updater = (meal, value) => setQuantity(quantity.map(object => {
        if (Object.values(object).includes(meal.title)) {
            Object.assign(object, { item: value.newQuantity })
        }
        return object;
    }));

    return (
        <Fragment>
            <div className={cartModalListStyles.mealList}>
                {quantity.map(meal => meal.item > 0 &&
                    <MiniCart
                        key={Math.random()}
                        title={meal.title}
                        price={meal.price}
                        item={meal.item}
                        description={meal.description}
                        updateChange={updater.bind(null, meal)}
                    />
                )}
                <div className={miniCartStyles.miniCart}>
                    <p className={miniCartStyles.p1}>Total Amount</p>
                    <p className={miniCartStyles.p2} >
                        ${quantity.reduce((accumulator, meal) => accumulator + Math.ceil(meal.item * meal.price), 0)}
                    </p>
                </div>
                <Button onClick={onClick}>Cancel</Button>
                <Button>Order</Button>
            </div>
        </Fragment>
    );
}

export default CartModalList;