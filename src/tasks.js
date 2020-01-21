import {uuid} from 'uuidv4'

let tasks = [
  {id: uuid(), task: 'Abigail needs clothes', completed: false},
  {id: uuid(), task: 'Bring the clothes', completed: false},
  {id: uuid(), task: 'Clean the rooms', completed: false},
  {id: uuid(), task: 'Do the dishes', completed: false}
]

export default tasks;