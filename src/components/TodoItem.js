import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
  getStyle = () => {
      return {
          backgroundColor: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.t.completed ? 'line-through' : 'none'
      }
  }

  btnStyle = () => {
    return {
      backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '4px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
    }
  }

  render() {
    const { id, title } = this.props.t
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onClick={this.props.markComplete.bind(this,id)}/>
            {' '} {title}
            <button style={this.btnStyle()} onClick={this.props.deleteTask.bind(this,id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    t: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
}

// const btnStyle = {
//   backgroundColor: '#ff0000',
//   color: '#fff',
//   border: 'none',
//   padding: '4px 8px',
//   borderRadius: '50%',
//   cursor: 'pointer',
//   float: 'right'
// }

export default TodoItem
