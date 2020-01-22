export const changeCompleted = (id) => ({
  type: 'CHANGE_COMPLETED',
  payload: id
})

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id
})

export const addTask = (id) => ({
  type: 'ADD_TASK',
  payload: id
})

export const editTask = (id, task, completed) => ({
  type: 'EDIT_TASK',
  payload: {id, task, completed}
})

export const addTaskAsync = (id, task, completed) => {
  return dispatch => {
    setTimeout(() => dispatch(addTask(id)) , 3000)
  }
};