import React from 'react';

const InputContext = React.createContext({
    totalAmount: 0,
    updatedItem: 0,
    listOfMeals: [],
    dispatch: () => { }
});

export default InputContext;