import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, editTodo, completeTodo } from '../../ducks/actions';
import TodoItem from '../TodoItem/TodoItem';

const TodoItemListComponent = props => {
  const getDeleteTodo = id => () => props.deleteTodo(id);
  const getCompleteTodo = id => () => props.completeTodo(id);

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Temp</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.todos
          .slice()
          .sort((a, b) => {
            if (a.time > b.time) {
              return 1;
            } else if (a.time < b.time) {
              return -1;
            }

            // Else go to the 2nd item
            if (a.temperature < b.temperature) {
              return -1;
            } else if (a.temperature > b.temperature) {
              return 1;
            } else {
              // nothing to split them
              return 0;
            }
          })
          .map(todo => {
            return <TodoItem {...todo} completeTodo={getCompleteTodo(todo.id)} />;
          })}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

const TodoItemList = connect(
  mapStateToProps,
  { addTodo, deleteTodo, editTodo, completeTodo }
)(TodoItemListComponent);
export default TodoItemList;
