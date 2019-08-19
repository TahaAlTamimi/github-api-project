import React, { Component } from 'react'




    const Search=(props)=>{
        return (
            <div>
           <form onSubmit={props.User}>
              <input type="text" placeholder="github username" name="user"></input> 
              <button >Search</button> 
              </form>
            </div>
           
        )
    };
  export default Search;
       
    

