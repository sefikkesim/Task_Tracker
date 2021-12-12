import React from 'react'
// import PropTypes from 'prop-types'
import Button from './Button'

function Header({ showTaskBar, showAddTaskBar }) {
  
  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <Button
        text={showAddTaskBar ? "Close Task Bar" : "Show Add Task Bar"}
        color={showAddTaskBar ? "#1581ec" : "red"}
        showTaskBar={showTaskBar}
        showAddTaskBar={showAddTaskBar}
      />
    </header>
  );
}



// Header.propTypes={
//     title : PropTypes.string.isRequired
// }
// Header.defaultProps={
//     title: 'TASK TRACKER'
// }
export default Header
