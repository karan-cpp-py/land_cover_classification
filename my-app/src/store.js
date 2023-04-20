import { legacy_createStore as createStore } from "redux";

const initialState = { 
    selected_coordinates : {},
    sat_img_url: ''
 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "set_coordinates":
      return { 
        ...state,
        selected_coordinates: action.payload,
     };
     case "set_sat_img_url":
      return {
        ...state,
        sat_img_url: action.payload,
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

export default store;
