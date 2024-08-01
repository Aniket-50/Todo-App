import { useContext } from "react";
import { TodoStore } from "../store/TodoStore";
import TodoItem from "./TodoItem";
function TodoItems({}){
 const {todoItems} =useContext(TodoStore);
 
  return <>
  <div >
    {todoItems.map(item=> 
      <TodoItem key={item.id} todoItem={item.name} todoItems={todoItems} todoDate={item.todoDate} id={item.id} />
      
    )}

</div>
</>
}
export default TodoItems;