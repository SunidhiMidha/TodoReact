import React from 'react'

function Head() {
  return (
    <header style={headerStyle}>
        <h1>ToDo List</h1>
    </header>
  )
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Head
