import toggleFormReducer from './toggle-form-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: toggleFormReducer
})

export default rootReducer;