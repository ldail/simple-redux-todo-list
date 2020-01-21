export const moveToCompleted = (state, payload) => {
  console.log(state);
  let {tasks} = state;
  let found = tasks.remainingTasks.find(task => task.id === payload);
  let remaining = tasks.remainingTasks.filter(task => task.id !== payload);

  tasks.completedTasks.push(found);
  tasks.remainingTasks = remaining;
  return tasks;


}

export const moveToRemaining = (state, payload) => {
  let {tasks} = state;
  let found = tasks.completedTasks.find(task => task.id === payload);
  let remaining = tasks.completedTasks.filter(task => task.id !== payload);

  tasks.remainingTasks.push(found);
  tasks.completedTasks = remaining;
  return tasks;
}