import { TodoStore } from "../store/TodoStore";
import { useContext } from "react";
function TaskFinished(){
  const contextobj =useContext(TodoStore);
  const todoItems=contextobj.todoItems;
  return(
   todoItems.length==0 && <h1> all task Finshed</h1>
   );
}
export default TaskFinished;