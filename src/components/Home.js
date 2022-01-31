import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'
import axios from 'axios'
// const uuid = require('uuid')

export class Home extends Component {
    state = {
      todos:
      [
        // {
        //   id: uuid.v4(),
        //   title: "pick up dry cleaning",
        //   completed: false
        // },
        // {
        //   id: uuid.v4(),
        //   title: "clean the car",
        //   completed: false
        // },
        // {
        //   id: uuid.v4(),
        //   title: "meet with boss",
        //   completed: false
        // }
      ]
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => this.setState({todos: response.data}))
    }

    markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(x => {
        if(x.id === id){
          x.completed = !x.completed
        } 
        return x
      })})
     
    }
    
    deleteTask = (id) => {
    //   this.setState({todos: [...this.state.todos.filter(showonly => showonly.id !== id)]}) //only show the tasks which haven't passed any id which simply means not clicked

        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(this.setState({todos: [...this.state.todos.filter(task => task.id !== id)]}))
    }
  
    addTask = (title) => {
    //   const newTask = {
    //     id: uuid.v4(),
    //     title,
    //     completed: false
    //   }
    //   this.setState({todos: [...this.state.todos, newTask]})

        axios.post('https://jsonplaceholder.typicode.com/todos', {
            // id: uuid.v4(),
            title,
            completed: false
        })
        .then(response => this.setState({todos: [...this.state.todos, response.data]}))
    }

  render() {
    console.log('in home')
    return (
        <React.Fragment>
            <AddTodo addTask = {this.addTask} />
            <Todos tprop = {this.state.todos} markComplete = {this.markComplete} deleteTask = {this.deleteTask} />
        </React.Fragment>
    )
  }
}

export default Home
