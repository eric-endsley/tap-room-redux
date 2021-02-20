import kegListReducer from '../../reducers/keg-list-reducer';
import * as a from '../../actions/index'


describe('kegListReducer', () => {

  const preLoadStateObj = {
    "1": {
      name: "Normal Beer",
      brand: "Normal Beer Brewing",
      price: 5,
      abv: 5.0,
      pints: 124,
      id: "1"
    },
  }
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer(undefined, {type: null})).toEqual(preLoadStateObj);
  });

  test('Should add the keg passed as an argument if addKeg action is passed', () => {
    const newKeg = {
      name: "AbNormal Beer",
      brand: "AbNormal Beer Brewing",
      price: 5,
      abv: 5.0,
      pints: 124,
      id: 2
    }
  
    const changedState = {
      "1": {
        name: "Normal Beer",
        brand: "Normal Beer Brewing",
        price: 5,
        abv: 5.0,
        pints: 124,
        id: "1"
      },
      2: {
        name: "AbNormal Beer",
        brand: "AbNormal Beer Brewing",
        price: 5,
        abv: 5.0,
        pints: 124,
        id: 2
      }  
    }

    expect(kegListReducer(undefined, a.addKeg(newKeg))).toEqual(changedState)
  });
});