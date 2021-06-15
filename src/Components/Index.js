import { useSelector } from 'react-redux';
import styles from './Index.module.css';

const Index = () => {
    const totalAmount = useSelector(state => state.meal.totalSum);

    return (
        <div className={styles.index}>{totalAmount}</div>
    );
}

export default Index;