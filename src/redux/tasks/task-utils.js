export const changeCompleted = (state, payload) => {
  let {tasks} = state;
  console.log(tasks);
  let newTasks = tasks.map(item => item)
  let found = newTasks.find(task => task.id === payload);
  found.completed = !found.completed
  console.log(newTasks);
  return newTasks;
}


export const deleteTask = (state, payload) => {
  // let {tasks} = state;
  // let found = tasks.

}