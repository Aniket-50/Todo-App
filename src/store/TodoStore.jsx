import { createContext } from "react";

export const TodoStore = createContext({
  todoItems: [],
  editItem:()=>{},
  addNewItem: () => {},
  DeleteItem: () => {},
}); // context initiliazed
