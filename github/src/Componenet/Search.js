import React, { Component } from 'react'



class App extends Component {
    render(){
        return(
        <div>
           <form onSubmit={this.props.User}>
              <input type="text" placeholder="github username" name="user"></input> 
              <button >Search</button> 
              </form>
            </div> 
    )}};
   
  export default App;
       
    

