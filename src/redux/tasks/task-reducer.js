import tasks from '../../tasks';
import {changeCompleted, deleteTask, addTask} from './task-utils';

const INITIAL_STATE = {tasks}

const taskReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_COMPLETED':
      let newState = changeCompleted(state, action.payload);
      return {
        tasks: newState
      }
    case 'DELETE_TASK':
      let afterDeletedState = deleteTask(state, action.payload);
      return {
        tasks: afterDeletedState
      }
    case 'ADD_TASK':
      let afterAddTaskState = addTask(state, action.payload);
      return {
        tasks: afterAddTaskState
      }
    default:
      return state
  }
}

export default taskReducer;