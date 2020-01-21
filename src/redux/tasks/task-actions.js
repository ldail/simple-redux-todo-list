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