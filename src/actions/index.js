import * as c from './ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { name, brand, price, abv, pints, id } = keg;
  return {
    type: c.ADD_KEG,
    name,
    brand,
    price,
    abv,
    pints,
    id
  }
}