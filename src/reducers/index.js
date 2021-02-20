import toggleFormReducer from './toggle-form-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: toggleFormReducer,
  masterKegList: kegListReducer
})

export default rootReducer;