import { useState,useRef ,useContext} from "react";
import styles from "./AddTodo.module.css"
import { IoMdAdd } from "react-icons/io";
 
import { TodoStore } from "../store/TodoStore";
function AddTodo(){
  const {addNewItem}=useContext(TodoStore)
  const [TodoName,setTodoName]=useState("");
  const [todoDate,setTodoDate]=useState("");
  const TodoNameRef=useRef();
  const TodoDateRef=useRef();

  const HandleNameChange=(event)=>{
    setTodoName(event.target.value);
  }
  const HandleDateChange=(event)=>{
    setTodoDate(event.target.value);
  }
  const HandleButtonClicked=(event)=>{
    event.preventDefault();
    const TodoName=TodoNameRef.current.value;
    const todoDate=TodoDateRef.current.value;
    addNewItem(TodoName,todoDate);
 setTodoDate();
 setTodoName("");
  }
  return <>
  <div className="items-container">
  <form className={`${styles.row} row`}  onSubmit={HandleButtonClicked}>
    <div className={`${styles.col} col-4`}> <input type ="text" placeholder="kya karna h"
     onChange={HandleNameChange}
     ref={TodoNameRef}
      value={TodoName}>
        </input>
        </div>
  <div className={`${styles.col} col-4`}>
    <input type="date"
     onChange={HandleDateChange} 
     ref={TodoDateRef}></input>
     </div>
   <div className={`${styles.col} col-2`}> 
   <button className="btn btn-success">
    <IoMdAdd />
    </button>
    </div>
   </form>
    </div>
  </>
}
 export default AddTodo;