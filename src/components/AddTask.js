import { useState } from "react";

const AddTask = ({ addTask, tasks }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text, day);
    addTask({ text, day, isDone: false });
    setText("");
    setDay("");
  };
  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     addTask({ text, day, isDone: false });
  //     setText("");
  //     setDay("");
  //     // console.log(text);
  //     // console.log(day);
  //   };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          placeholder="AddTask"
          required
          value={text}
          //   onChange={(e) => setText(e.target.value)}
          //  /   onChange={(e) => console.log(e.target.value)}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          placeholder="Add Day & Time"
          required
          value={day}
          //   onChange={(e) => setDay(e.target.value)}
          //   //   onChange={(e) => console.log(e.target.value)}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <input type="submit" value="Add Task" className="btn btn-block" />
      <p style={{textAlign: 'center', marginTop: "1rem", fontSize: "1.5rem"}}> { tasks.length > 1 ? `You have ${tasks.length} Tasks` : `You have ${tasks.length} Task ` } </p>
    </form>
  );
};

export default AddTask;
