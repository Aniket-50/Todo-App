import { useContext, useRef, useState } from "react";
import styles from "./TodoItem.module.css";
import { TodoStore } from "../store/TodoStore";
import { MdDelete } from "react-icons/md";

function TodoItem({ todoItem, todoDate ,id}) {
const {editItem}=useContext(TodoStore);
  const [edit, setEdit] = useState(false);
  const [TodoName, setTodoName] = useState(todoItem);
  const [done, setDone] = useState(false);
  const { DeleteItem } = useContext(TodoStore);
  const inputRef = useRef();
  function handleEdit() {
    setEdit(!edit);
  }
  function handleChange(e) {
    inputRef.current = e.target.value;
  }
  function handleSave() {
    setTodoName(inputRef.current);
    editItem(inputRef.current,todoItem,todoDate,id)
    setEdit(false);
  }
  return (
    <>
      <div key={todoItem} className="items-container ">
        <div className={`${styles.row} row`}>
          
          <div className={`${styles.col} col-3`}>{TodoName}</div>
          <div className={`${styles.col} col-2`}>{todoDate}</div>
          <button
            className={`${styles.add}  btn btn-dark`}
            onClick={handleEdit}
          >
            🛠️
          </button>
          <button
            className={` ${styles.add} btn ${done?"btn-success":"btn-danger"}`}
            onClick={() => {
              setDone(!done);
            }}
          >
            {done ? "Done" : "Pending"}
          </button>
          <button className={` ${styles.add} btn btn-danger`}
              type="button"

              onClick={() => DeleteItem(id)}
            >{"Delete"}
              <MdDelete />
            </button>
          
          <div
            className={`${styles.col} col-2`}
            style={edit ? { display:"flex" } : { display: "none" }}
          >
            <input type="text" onChange={handleChange} ref={inputRef} placeholder="edit task"></input>
            <button className="btn btn-success edit" onClick={handleSave}>
              save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
