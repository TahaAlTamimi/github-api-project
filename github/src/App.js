import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from './Componenet/Search';
import Table from './Componenet/Table';

class App extends Component {
state={
  repo:null
}
    
// i
  user=(e)=>{
    e.preventDefault();
    const user=e.target.elements.user.value;
    if(user){
      axios.get(`https://api.github.com/users/${user}/repos`).then((information)=>{const repo=information.data.map(item=>{
      return item.name +" "+" "+item.svn_url
    });
   
  this.setstate({
    repo:repo

  });
})
    }else return "user"

  }
    
   



  


render() {
  return (
    <div>

    <Search User={this.user}/>
    {this.state.repo?<table>{this.state.repo}</table>:<p>hi</p>}
      <Table/>
      
     
      
      
    </div>
  )
    }
}

  

export default App;
