import { combineReducers } from "@reduxjs/toolkit";

const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "contact/add":
      return [...state, payload];
    case "contact/delete":
      return [...state].filter(({ id }) => id !== payload);
    default:
      return state;
  }
};
const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "contact/filter":
      return (state = payload);
    default:
      return state;
  }
};

export const contactReducers = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
