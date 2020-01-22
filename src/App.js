import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {changeCompleted, deleteTask, addTaskAsync as addTask, editTask} from './redux/tasks/task-actions'

class App extends React.Component {
  state = {
    editValue: '',
    activeEditId: ''
  }

  handleEdit = (id, task) => {
    let {activeEditId} = this.state;
    if (this.state.activeEditId) {
      document.querySelector(`[id='${activeEditId}'] > .editBox`).style.display = "none";
      document.querySelector(`[id='${activeEditId}'] > .editButton`).style.display = "none";
      this.setState({editValue: ''});
    }
    document.querySelector(`[id='${id}'] > .editBox`).style.display = "block";
    document.querySelector(`[id='${id}'] > .editButton`).style.display = "block";
    this.setState({activeEditId: id, editValue: task});
  }
  render() {
  const {tasks, changeCompleted, deleteTask, addTask, editTask} = this.props;
  return (
    <div className="App">
      <h1>Todo list</h1>

      <section className="addTask">
        <label htmlFor="addTaskInput">Add a task: </label>
        <input type="text" id="addTaskInput" name="addTaskInput" />
        <button type="button" onClick={() => addTask(document.querySelector('#addTaskInput').value)}>Add task</button>

        <p>*Note: Actions take three seconds to add (asynchronous)</p>
      </section>

      <section className="taskLists">
        <div className="taskList">
      <h2>Tasks to do:</h2>
        <ul>
          {tasks.filter(task => task.completed === false).map((task, index) => {
            return <li key={task.id} id={task.id}>
                <input type="checkbox" value={index} onClick={() => changeCompleted(task.id)} />Task #{index+1}: {task.task}

                <input type="text" className="editBox" value={this.state.editValue} onChange={(e) => this.setState({editValue: e.target.value})} />
                <button type="button" className="editButton" onClick={() => {
                  this.setState({activeEditId: '', editValue: ''})
                  document.querySelector(`[id='${task.id}'] > .editBox`).style.display = "none";
                  document.querySelector(`[id='${task.id}'] > .editButton`).style.display = "none";
                  editTask(task.id, this.state.editValue, task.completed);
                }}>Change task</button>

                <button type="button" onClick={() => deleteTask(task.id)}><span role="img" aria-label="delete">&#x274C;</span></button>
                <button type="button" onClick={() => this.handleEdit(task.id, task.task)}><span role="img" aria-label="edit">&#10847;</span></button>

              </li>
          })}
        </ul>
        </div>

        <div className="taskList">
        <h2>Tasks finished:</h2>
        <ul>
        {tasks.filter(task => task.completed === true).map((task, index) => {
            return <li key={task.id} id={task.id}>
                <input type="checkbox" value={index} onClick={() => changeCompleted(task.id)} />Task #{index+1}: {task.task} 

                <input type="text" className="editBox" value={this.state.editValue} onChange={(e) => this.setState({editValue: e.target.value})} />
                <button type="button" className="editButton" onClick={() => {
                  this.setState({activeEditId: '', editValue: ''})
                  document.querySelector(`[id='${task.id}'] > .editBox`).style.display = "none";
                  document.querySelector(`[id='${task.id}'] > .editButton`).style.display = "none";
                  editTask(task.id, this.state.editValue, task.completed);
                }}>Change task</button>

                <button type="button" onClick={() => deleteTask(task.id)}><span role="img" aria-label="delete">&#x274C;</span></button>
                <button type="button" onClick={() => this.handleEdit(task.id, task.task)}><span role="img" aria-label="edit">&#10847;</span></button>
              </li>
          })}
        </ul>
        </div>
      </section>

    </div>
  );
      }
}

const mapStateToProps = state => {
  console.log(state);
  const {tasks} = state;
  return tasks;
}

const mapDispatchToProps = dispatch => ({
  changeCompleted: (id) => dispatch(changeCompleted(id)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  addTask: (task) => dispatch(addTask(task)),
  editTask: (id, task, completed) => dispatch(editTask(id, task, completed))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
