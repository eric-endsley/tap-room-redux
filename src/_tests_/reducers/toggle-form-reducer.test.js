import toggleFormReducer from '../../reducers/toggle-form-reducer';
import * as a from '../../actions/index'

describe("toggleFormReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(toggleFormReducer("", {type: null})).toEqual(false)
  });


});