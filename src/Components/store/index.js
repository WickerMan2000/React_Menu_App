import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = { allTheCounts: [], title: '' };
const initialMealState = { totalSum: 0, allMyMeals: [], status: 0 };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        changeCounter: (state, action) => {
            state.allTheCounts = Object.values(state.allTheCounts.concat([{
                title: action.payload.title, counter: action.payload.counter
            }]).reduce((accumulator, object) => {
                if (object.title in accumulator) {
                    accumulator[object.title].counter += object.counter;
                } else {
                    accumulator[object.title] = {
                        title: object.title,
                        counter: object.counter
                    }
                }
                return accumulator;
            }, []));
        }
    }
});

const mealSlice = createSlice({
    name: "meal",
    initialState: initialMealState,
    reducers: {
        change: (state, action) => {
            state.totalSum += action.payload.meal.item;
            state.allMyMeals = state.allMyMeals.concat({ meal: action.payload.meal });
            state.status = action.payload.meal.item
        },
        addToTotal: (state, action) => {
            state.totalSum += action.payload.meal.item;
            state.allMyMeals = state.allMyMeals.concat({ meal: action.payload.meal });
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        meal: mealSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const mealActions = mealSlice.actions;
export default store;