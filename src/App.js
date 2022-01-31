import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Head from './components/Head';


class App extends Component{

  render(){
    return (
          <div className="App">
            <div className='container'>
              <Head/>
              <Home/>
            </div>
          </div>
    )
  }
}

export default App;
