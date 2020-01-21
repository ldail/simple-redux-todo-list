import tasks from '../../tasks';
import {moveToCompleted, moveToRemaining} from './task-utils';

const INITIAL_STATE = {
  tasks
}

const taskReducer = (state=INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'MOVE_TO_COMPLETED':
      let newState = moveToCompleted(state, action.payload)
      return {
        ...state,
        ...newState
      }
    case 'MOVE_TO_REMAINING':
      let changeState = moveToRemaining(state, action.payload)
      return {
        ...state,
        ...changeState
      }
    default:
      return state
  }
}

export default taskReducer;