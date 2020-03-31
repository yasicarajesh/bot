import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import EmployeeReducer from './components/reducers/employee';

// connect all reducers here
const createRootReducer = (history) => combineReducers({
  router          : connectRouter(history),
  EmployeeReducer : EmployeeReducer
})

export default createRootReducer;
