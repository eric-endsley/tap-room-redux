import * as c from './../actions/ActionTypes'


const preLoadStateObj = {
  1 : {
    name: "Normal Beer",
    brand: "Normal Beer Brewing",
    price: 5,
    abv: 5.0,
    pints: 124,
    id: 1
  },
}

export default (state = preLoadStateObj, action) => {
  switch(action.type) {
    default:
      return state;
  }
}