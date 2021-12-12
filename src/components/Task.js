import React from "react";
import { BsTrashFill } from "react-icons/bs";

function Task({ task, deleteTask, handleDoneTask }) {
  return (
    <div className={`task ${task.isDone && "done"}`} onDoubleClick={() => handleDoneTask(task.id)}>
      <h3>
        {task.text}
        <BsTrashFill
          style={{ marginTop: "1.2rem", fontSize: "2rem", color: "red" }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>

      <p>{task.day}</p>
    </div>
  );
}
export default Task;
