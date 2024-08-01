import { createContext } from "react";

export const TodoStore = createContext({
  todoItems: [],
  editItem:()=>{},
  doneItems:()=>{},
  addNewItem: () => {},
  DeleteItem: () => {},
}); // context initiliazed
