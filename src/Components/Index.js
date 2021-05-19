import { useContext } from 'react';
import InputContext from './store/InputContext';
import styles from './Index.module.css';

const Index = () => {
    const context = useContext(InputContext);
    
    return (
        <div className={styles.index}>{context.totalAmount}</div>
    );
}

export default Index;