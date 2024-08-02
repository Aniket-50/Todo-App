import { useContext, useRef, useState } from "react";
import styles from "./TodoItem.module.css";
import { TodoStore } from "../store/TodoStore";
import { MdDelete } from "react-icons/md";
import Checkbox from "./Checkbox";

function TodoItem({ todoItem, todoDate ,id}) {
  const dateArr=todoDate.split("-")
  console.log(dateArr)
var year=dateArr[0];
var month=dateArr[1];
var date=dateArr[2];
 var newDate= date +"-"+month +"-"+year
console.log(newDate)
const {editItem}=useContext(TodoStore);
  const [edit, setEdit] = useState(false);
  const [TodoName, setTodoName] = useState(todoItem);
  const { DeleteItem } = useContext(TodoStore);
  const inputRef = useRef();
  function handleEdit() {
    setEdit(!edit);
  }
  function handleChange(e) {
    inputRef.current = e.target.value;
  }
  function handleSave() {
  
    if(inputRef.current.length>0){
         setTodoName(inputRef.current);
    editItem(inputRef.current,todoItem,todoDate,id)
    }
    setEdit(false);
  }
  return (
    <>
      <div key={id} className="items-container ">
        <div className={`${styles.row} row`}>
          <div className={`${styles.col} col-4`} > 
          <Checkbox name={TodoName} date={todoDate} id={id}/>
            </div>
          <div className={`${styles.col} col-2`}>{dateArr[0]!="" && newDate}</div>
          <button
            className={`${styles.add}  btn btn-summary`}
            onClick={handleEdit}
          >
            🛠️
          </button>
          <button className={` ${styles.add} btn btn-danger`}
              type="button"

              onClick={() => DeleteItem(id)}
            >
              <MdDelete />
            </button>
          <div
            className={`${styles.col} col-2`}
            style={edit ? { display:"flex" } : { display: "none" }}
          >
            <input type="text" onChange={handleChange} ref={inputRef} placeholder="edit task" required />
            <button className="btn btn-success edit" onClick={handleSave} >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
