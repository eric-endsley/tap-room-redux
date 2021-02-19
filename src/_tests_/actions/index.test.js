import * as c from './../../actions/ActionTypes'
import * as a from './../../actions/index';

describe ('taplist actions', () => {
  
  it('TOGGLE_FORM should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it("ADD_KEG should create an ADD_KEG action", () => {
    const keg = {
      name: "name",
      brand: "brand",
      price: 1,
      abv: 1,
      pints: 124,
      id: 1
    }

    expect(a.addKeg(keg)).toEqual({
      type: c.ADD_KEG,
      name: "name",
      brand: "brand",
      price: 1,
      abv: 1,
      pints: 124,
      id: 1
    });
  });
});
