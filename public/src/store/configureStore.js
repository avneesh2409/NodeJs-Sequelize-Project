import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import TodoReducer from "./reducers/apiDataReducer";
import NavigationBarReducer from "./reducers/navigationBarReducer";
import toggleSpinnerReducer from "./reducers/toggleSpinnerReducer";
import {ExamReducer} from './reducers/examReducers';

const reducers = {
    TodoReducer,
    NavigationBarReducer,
    toggleSpinnerReducer,
    ExamReducer
}
const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ...reducers
})
export default createRootReducer