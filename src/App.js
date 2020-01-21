import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {moveToRemaining, moveToCompleted} from './redux/tasks/task-actions'

function App(props) {
  const {tasks, moveToCompleted, moveToRemaining} = props
  console.log(tasks);
  return (
    <div className="App">
      <h1>Todo list</h1>

      <h2>Tasks to do:</h2>
      <ul className="tasksRemaining">
        {tasks.remainingTasks.map((task, index) => {
          return <li key={task.id}><input type="checkbox" value={index} onClick={() => moveToCompleted(task.id)} />Task #{index+1}: {task.task}</li>
        })}
      </ul>

      <h2>Tasks to do:</h2>
      <ul className="tasksFinished">
      {tasks.completedTasks.map((task, index) => {
          return <li key={task.id}><input type="checkbox" value={index} onClick={() => moveToRemaining(task.id)} />Task #{index+1}: {task.task}</li>
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
  moveToCompleted: (id) => dispatch(moveToCompleted(id)),
  moveToRemaining: (id) => dispatch(moveToRemaining(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
