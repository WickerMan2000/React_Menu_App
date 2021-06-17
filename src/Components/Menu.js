import { useSelector } from "react-redux";
import Meal from "./Meal";
import styles from "./Menu.module.css";

const Menu = ({ meals }) => {
  const listOfCounters = useSelector(state => state.counter.allTheCounts);

  const getTheCounter = title => {
    const [counter] = listOfCounters
      .map(object => object.title === title && object.counter)
      .filter(element => element !== false);
    return counter;
  };

  return (
    <div className={styles.menu}>
      <ul>
        {meals.map(meal => {
          return (
            <Meal
              key={meal.id}
              title={meal.mealTitle}
              description={meal.description}
              price={meal.price}
              counter={getTheCounter(meal.mealTitle)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
