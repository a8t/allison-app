import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../ducks/actions';
import './TodoInput.css';

class TodoInputComponent extends Component {
  state = { time: '', temperature: '', task: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo({ ...this.state });
    this.setState({ time: '', temperature: '', task: '' });
  };

  handleTimeChange = e => this.handleChange('time')(e);
  handleTempChange = e => this.handleChange('temperature')(e);
  handleTaskChange = e => this.handleChange('task')(e);

  handleChange = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todoinput--form">
        <div className="todoinput--item">
          Task
          <input type="text" value={this.state.task} onChange={this.handleTaskChange} />
        </div>
        <div className="todoinput--item">
          Temperature
          <input type="number" value={this.state.temperature} onChange={this.handleTempChange} />
        </div>

        <div className="todoinput--item">
          Time
          <input type="number" step="15" value={this.state.time} onChange={this.handleTimeChange} />
        </div>
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

const TodoInput = connect(
  null,
  { addTodo }
)(TodoInputComponent);

export default TodoInput;
