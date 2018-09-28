import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO } from '../constants/actionTypes';

const initialState = [
  {
    task: 'Praise Andy',
    time: 30,
    temperature: 2,
    completed: false,
    id: 0,
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          task: action.task,
          time: action.time,
          temperature: action.temperature,
          completed: false,
        },
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case EDIT_TODO:
      return state.map(todo => (todo.id === action.id ? { ...todo, text: action.text } : todo));

    case COMPLETE_TODO:
      return state.map(
        todo => (todo.id === action.id ? { ...todo, completed: !todo.completed, time: '👌🏽' } : todo)
      );

    default:
      return state;
  }
}
