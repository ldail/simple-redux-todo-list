import tasks from '../../tasks';
import {changeCompleted, deleteTask} from './task-utils';

const INITIAL_STATE = {tasks}

const taskReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_COMPLETED':
      let newState = changeCompleted(state, action.payload)
      return {
        tasks: newState
      }
    case 'DELETE':
      let afterDeletedState = deleteTask(state, action.payload)
      return {
        ...state,
        ...afterDeletedState
      }
    default:
      return state
  }
}

export default taskReducer;