import { useContext, useState } from "react";
import "./checkbox.css";
import { TodoStore } from "../store/TodoStore";
const Checkbox = ({ name, date, id }) => {
  const { doneItems, todoItems } = useContext(TodoStore);
  const [check, setCheck] = useState(false);
  function handleChange(check, name) {
    setCheck(!check);

    doneItems(!check, name, date, id);
  }
  return (
    <div className="checkbox-wrapper-11">
      <input
        id="02-11"
        type="checkbox"
        checked={todoItems[id - 1] && todoItems[id - 1].checked}
        onChange={() => handleChange(check, name)}
      />
      <label for="">{" "}{name}</label>
    </div>
  );
};
export default Checkbox;
