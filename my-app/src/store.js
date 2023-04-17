import { legacy_createStore as createStore } from "redux";

const initialState = { 
    selected_coordinates : {}
 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "set_coordinates":
      return { 
        ...state,
        selected_coordinates: action.payload,
     };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

export default store;
