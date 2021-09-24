import { v4 as uuidv4 } from 'uuid';
import { createStore } from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text
  };
}

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id
  };
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action, id: uuidv4() }, ...state ]
    case DELETE:
      return state.filter(toDo => toDo !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe();

export default store;