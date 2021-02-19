import * as c from './../../actions/ActionTypes'
import * as a from './../../actions/index';

describe ('taplist actions', () => {
  
  it('TOGGLE_FORM should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
});
