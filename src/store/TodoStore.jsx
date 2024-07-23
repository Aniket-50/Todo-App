import { createContext } from "react";

export const TodoStore = createContext({
  todoItems: [],
  addNewItem: () => {},
  DeleteItem: () => {},
}); // context initiliazed
