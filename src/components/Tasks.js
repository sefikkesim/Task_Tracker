import React from 'react'
import Task from "./Task"

function Tasks({ tasks,deleteTask,handleDoneTask }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
          task={task}
          deleteTask={deleteTask}
          handleDoneTask={handleDoneTask}
        /> )
        
      })}
    </div>
  );
}

export default Tasks
