import {uuid} from 'uuidv4';

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
  let {tasks} = state;
  let newTasks = tasks.map(task => task).filter(task => task.id !== payload);
  return newTasks;

}

export const addTask = (state, payload) => {
  let {tasks} = state;
  let newTasks = tasks.map(task => task);
  let newTask = {id: uuid(), task: payload, completed: false};
  newTasks.push(newTask);
  return newTasks;
}

export const editTask = (state, payload) => {
  let {tasks} = state;
  let newTasks = tasks.map(task => task);
  let found = newTasks.findIndex(task => task.id === payload.id);
  newTasks[found] = {id: payload.id, task: payload.task, completed: payload.completed}
  return newTasks;
}