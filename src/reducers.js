// Reducer - function that is used to update store
import { combineReducers } from 'redux';
import navData from './components/molecules/Navigation/reducer/reducer';

const reducers = combineReducers({
  navData,
});

export default reducers;