import toggleFormReducer from '../../reducers/toggle-form-reducer';
import * as a from '../../actions/index'

describe("toggleFormReducer", () => {
  test('Should return initial state if no action type is recognized', () => {
    expect(toggleFormReducer(false, {type: null})).toEqual(false)
  });

  test('Should return opposite state if toggle form action is passed', () => {
    expect(toggleFormReducer(false, a.toggleForm())).toEqual(true)
  });
});