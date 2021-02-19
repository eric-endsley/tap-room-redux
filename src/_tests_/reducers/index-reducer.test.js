import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import toggleFormReducer from '../../reducers/toggle-form-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      formVisibleOnPage: false
    });
  });
  
  test("check that initial state of toggleFormReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(toggleFormReducer(undefined, { type: null }));
  });
});