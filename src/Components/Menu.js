import Meal from './Meal';
import styles from './Menu.module.css';

const Menu = ({ meals }) => {
    return (
        <div className={styles.menu}>
            <ul>
                {meals.map(meal => {
                    return <Meal key={meal.id} title={meal.mealTitle} description={meal.description} price={meal.price} />
                })}
            </ul>
        </div>
    );
}

export default Menu;