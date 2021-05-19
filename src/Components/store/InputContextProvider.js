import { useReducer } from 'react';
import InputContext from '../store/InputContext';

const defaultState = { totalSum: 0, allMyMeals: [], status: 0 }

const inputReducer = (state, action) => {
    if (action.type === 'TOTAL_SUM' || action.type === 'INCREAMENT' || action.type === 'DECREAMENT') {
        return {
            totalSum: state.totalSum + action.meal.item,
            allMyMeals: state.allMyMeals.concat({ meal: action.meal }),
            status: (action.type === 'INCREAMENT' || action.type === 'DECREAMENT') && action.meal.item
        }
    }
    return defaultState;
}

const InputContextProvider = ({ children }) => {
    const [inputState, dispatchInput] = useReducer(inputReducer, defaultState);

    const inputContext = {
        totalAmount: inputState.totalSum,
        updatedItem: inputState.status,
        listOfMeals: inputState.allMyMeals,
        dispatch: dispatchInput
    }

    return (
        <InputContext.Provider value={inputContext}>
            {children}
        </InputContext.Provider>
    )
}

export default InputContextProvider;