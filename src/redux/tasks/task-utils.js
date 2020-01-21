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