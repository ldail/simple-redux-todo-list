export const moveToCompleted = (id) => ({
  type: 'MOVE_TO_COMPLETED',
  payload: id

})

export const moveToRemaining = (id) => ({
  type: 'MOVE_TO_REMAINING',
  payload: id
})