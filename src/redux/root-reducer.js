import {combineReducers} from 'redux'
import taskReducer from './tasks/task-reducer';


export default combineReducers({
  tasks: taskReducer
})