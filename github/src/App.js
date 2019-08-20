import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from './Componenet/Search';
import Table from './Componenet/Table';

class App extends Component {
state={
  repo:[]
}
    
// i
  user=(e)=>{
    e.preventDefault();
    const user=e.target.elements.user.value;
    console.log(user)
    if(user)
      axios.get(`https://api.github.com/users/${user}/repos`).then((information)=>{
      // console.log(repo)
    //  if(repo===null){
    //    return "user is not found"
    //  }
    this.setState({repo: information.data})
    
  
    });
  }
render() {
  return (
    <div>

    <Search User={this.user}/>
    {/* {this.state.repo?<table>{this.state.repo}</table>:<p>hi</p>} */}
      <Table dataTransfer={this.state.repo}/>
      
    
      
      
    </div>
  )
    }
}
  

export default App;
