import { useContext } from "react";
import { TodoStore } from "../store/TodoStore";
import TodoItem from "./TodoItem";
function TodoItems({}){
 const {todoItems,DeleteItem} =useContext(TodoStore);
  return <>
  <div className="items-container">
    {todoItems.map(item=> 
      <TodoItem key={item.name} todoItem={item.name} todoDate={item.todoDate} />
    )}

</div>
</>
}
export default TodoItems;