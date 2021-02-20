import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import * as a from '../../actions/index';
import kegListReducer from '../../reducers/keg-list-reducer';
import toggleFormReducer from '../../reducers/toggle-form-reducer';
let store = createStore(rootReducer);

describe("rootReducer", () => {
  test('Should return default state if no action type is recognized', () => {
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
    expect(rootReducer({}, { type: null })).toEqual({
      formVisibleOnPage: false,
      masterKegList: preLoadStateObj
    });
  });
  
  test("check that initial state of toggleFormReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(toggleFormReducer(undefined, { type: null }));
  });

  test('check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, {type: null}));
  })

  test('check that TOGGLE_FORM action works for rootReducer', () => {
    const action = a.toggleForm();
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(toggleFormReducer(undefined, action));
  });
});