
import './App.css';
import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Button from './components/Button';

function App() {
  
   const [tasks, setTasks] = useState([
     {
       id: 1,
       text: "Study React Pre-Class Notes",
       day: "Dec 12th at 2:30pm",
       isDone: false,
     },
     {
       id: 2,
       text: "Feed the Dog",
       day: "Dec 13th at 1:30pm",
       isDone: true,
     },
     {
       id: 3,
       text: "Attend In-Class",
       day: "Dec 14th at 3:00pm",
       isDone: false,
     },
   ]);
   const [showAddTaskBar, setShowAddTaskBar] = useState(false);
  const addTask = (newTask)=>{
    const id = Math.floor(Math.random() * 1000)
    const addedNweTask = {id,...newTask};
    setTasks([...tasks, addedNweTask ] );
  }
       
  const deleteTask =(deletedTaskId)=>{ 
    console.log(deletedTaskId);
    setTasks(tasks.filter((task)=> task.id !== deletedTaskId))
  }
 const handleDoneTask = (doneTaskId) => {
   setTasks(
     tasks.map((task) =>
       task.id === doneTaskId ? { ...task, isDone: !task.isDone } : task
     )
   );
 };

 const showTaskBar =()=>{
   setShowAddTaskBar(!showAddTaskBar)
 }
  return (
    <div className="container">
      <Header showTaskBar={showTaskBar} showAddTaskBar={showAddTaskBar}/>
      {showAddTaskBar && <AddTask addTask={addTask} tasks={tasks} />}
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        handleDoneTask={handleDoneTask}
      />
    </div>
  );
}

export default App;
