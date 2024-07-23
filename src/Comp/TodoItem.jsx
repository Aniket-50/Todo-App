import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { TodoStore } from "../store/TodoStore";
import { MdDelete } from "react-icons/md";

function TodoItem({ todoItem, todoDate }) {
  const { DeleteItem } = useContext(TodoStore);
  return (
    <>
      <div key={todoItem} className="items-container ">
        <div className={`${styles.row} row`}>
          <div className={`${styles.col} col-4`}> {todoItem}</div>
          <div className={`${styles.col} col-2`}>{todoDate}</div>
          <div className={`${styles.col} col-2`}>
            Done<input type="checkbox"></input>
          </div>
          <div className={`${styles.col} col-2`}>
            {" "}
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => DeleteItem(todoItem)}
            >
              <MdDelete />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
