import kegListReducer from '../../reducers/keg-list-reducer';


describe('kegListReducer', () => {

  const preLoadStateObj = {
    1: {
      name: "Normal Beer",
      brand: "Normal Beer Brewing",
      price: 5,
      abv: 5.0,
      pints: 124,
      id: 1
    },
  }
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer(undefined, {type: null})).toEqual(preLoadStateObj);
  
  });
});