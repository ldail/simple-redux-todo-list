import {combineReducers} from 'redux'
import taskReducer from './tasks/task-reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  }


const reducers = combineReducers({
  tasks: taskReducer
})

export default persistReducer(persistConfig, reducers)