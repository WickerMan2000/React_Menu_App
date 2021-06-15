import { Fragment } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';

const MEALS = [
  {
    mealTitle: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    id: 1
  },
  {
    mealTitle: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    id: 2
  },
  {
    mealTitle: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    id: 3
  },
  {
    mealTitle: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    id: 4
  }
];

const App = () => {

  return (
    <Fragment>
      <Header />
      <Menu meals={MEALS} />
    </Fragment>
  );
}

export default App;