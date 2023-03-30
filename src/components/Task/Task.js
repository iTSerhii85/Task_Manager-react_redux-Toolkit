import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "redux/tasksSlice"

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete =()=> dispatch(deleteTask(task.id));
  const handleToggle =()=> dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} type='button' onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
