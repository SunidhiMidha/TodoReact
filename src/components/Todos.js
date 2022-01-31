import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component{
    render(){
        return this.props.tprop.map((t) => (
            <TodoItem key={t.id} t={t} markComplete = {this.props.markComplete} deleteTask = {this.props.deleteTask}/>
            // <h3>{t.title}</h3>
        ))
    }
}

Todos.propTypes = {
    tprop: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
}
export default Todos;