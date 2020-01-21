import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {changeCompleted, deleteTask} from './redux/tasks/task-actions'

function App(props) {
  const {tasks, changeCompleted, deleteTask} = props
  return (
    <div className="App">
      <h1>Todo list</h1>

      <h2>Tasks to do:</h2>
      <ul className="tasksRemaining">
        {tasks.filter(task => task.completed === false).map((task, index) => {
          return <li key={task.id}>
              <input type="checkbox" value={index} onClick={() => changeCompleted(task.id)} />Task #{index+1}: {task.task}
              <button type="button" onClick={() => deleteTask(task.id)}><span role="img" aria-label="delete">&#x274C;</span></button>

            </li>
        })}
      </ul>

      <h2>Tasks finished:</h2>
      <ul className="tasksFinished">
      {tasks.filter(task => task.completed === true).map((task, index) => {
          return <li key={task.id}>
              <input type="checkbox" value={index} onClick={() => changeCompleted(task.id)} />Task #{index+1}: {task.task} 
              <button type="button" onClick={() => deleteTask(task.id)}><span role="img" aria-label="delete">&#x274C;</span></button>
            </li>
        })}
      </ul>

    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  const {tasks} = state;
  return tasks;
}

const mapDispatchToProps = dispatch => ({
  changeCompleted: (id) => dispatch(changeCompleted(id)),
  deleteTask: (id) => dispatch(deleteTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
