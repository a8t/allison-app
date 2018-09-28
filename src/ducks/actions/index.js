import * as types from '../constants/actionTypes';

export const addTodo = todo => ({ type: types.ADD_TODO, ...todo });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
