import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from './Componenet/Search';
import Table from './Componenet/Table';

class App extends Component {

    
// i
  user=(e)=>{
    e.preventDefault();
    const user=e.target.elements.user.value;
    console.log(user)
  }
    
   



  


render() {
  return (
    <div>

    <Search User={this.user}/>
      <Table/>
      
     
      
      
    </div>
  )
    }
}

  

export default App;
