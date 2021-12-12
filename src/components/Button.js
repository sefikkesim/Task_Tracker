import React from 'react'

function Button({ color, text, showTaskBar, showAddTaskBar }) {
  // const handleClick =()=>{
  //     console.log("click");
  // }
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={showTaskBar}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
