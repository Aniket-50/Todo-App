import { useState, useRef, useContext } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAdd } from "react-icons/io";

import { TodoStore } from "../store/TodoStore";
function AddTodo() {
  const { addNewItem } = useContext(TodoStore);
  const [TodoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const TodoNameRef = useRef();
  const TodoDateRef = useRef();

  const HandleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const HandleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const HandleButtonClicked = (event) => {
    event.preventDefault();
    setTodoName(TodoNameRef.current.value);
    setTodoDate(TodoDateRef.current.value);
    addNewItem(TodoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };
  return (
    <>
      <div className="items-container">
        <form className={`${styles.row}`} onSubmit={HandleButtonClicked}>
          <div className={`${styles.col} col-4`}>
            {" "}
            <input
              type="text"
              placeholder="Enter your task here"
              onChange={HandleNameChange}
              ref={TodoNameRef}
              value={TodoName}
              required
            ></input>
          </div>
          <div className={`${styles.col} col-3`}>
            <input
              type="date"
              onChange={HandleDateChange}
              ref={TodoDateRef}
            ></input>
          </div>
          <button className={`${styles.add} btn btn-success`}>
            <IoMdAdd />
          </button>
        </form>
      </div>
    </>
  );
}
export default AddTodo;
