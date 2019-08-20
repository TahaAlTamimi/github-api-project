import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from './Componenet/Search';
import Table from './Componenet/Table';

class App extends Component {
state={
  repo:[],
  Found:[]
}
    
// i
  user=(e)=>{
    e.preventDefault();
    const user=e.target.elements.user.value;
   this.setState({Found:[]})
   
 
    if(user)
      axios.get(`https://api.github.com/users/${user}/repos`).then((information)=>{
      
     
    this.setState({repo: information.data})
    if(this.state.repo.length===0){
      // console.log("user is not found")
      this.setState({Found:0})
      
    } 
   
  
    })
    .catch(error =>{
      this.setState({
        repo:0
      })

    })
    
  }
render() {
//   if(!this.state.repo.length===0){
//     return( 
//   <>
//   <Search User={this.user}/>
//     <Table dataTransfer={this.state.repo}/>
    
// </>
//   )}
  if(this.state.repo.length===0){
    return(
      <>
      <Search User={this.user}/>
      <p>empty repo</p>
      </>
    )
  }
  // if(this.state.repo.length>0){return(
  //   <>
  //     <Search User={this.user}/>
  //   <Table dataTransfer={this.state.repo}/>
  //   </>
  // )
   
  // }
  if(this.state.repo===0){
    return(
      <>
      <Search User={this.user}/>
      <p>No user </p>
      </>
    )
  }
  return( 
    <>
    <Search User={this.user}/>
      <Table dataTransfer={this.state.repo}/>
      
  </>
  )
     

   
   }
  // return (
  //   <div>

  //   <Search User={this.user}/>
  //   {/* {this.state.repo?<table>{this.state.repo}</table>:<p>hi</p>} */}
  //   {/* <Table dataTransfer={this.state.repo}/>
  //     {!this.state.repo.length===0?<Table dataTransfer={this.state.repo}/>:"empty repo"}
  //  {this.state.Found===0?"Use":""} 
  //    */}
      
      
  //   </div>
  // )
    }
// }
  

export default App;
