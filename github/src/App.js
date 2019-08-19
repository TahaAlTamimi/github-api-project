import React, { Component } from 'react';
import './App.css';
import Search from './Componenet/Search'
import Table from './Componenet/Table'

class App extends Component {

    
 state = {
    items:[],
    isFound:false,
  }
  componentDidMount(){
 fetch(`https://api.github.com/users/TahaAlTamimi/repos`)  
 .then(response=>response.json())
 .then(parsedjson=>parsedjson.map(parsedjson=>
  {
   
    name:`${parsedjson.name}`
    // name:`${parsedjson.private}`,
    // parsedjson.language,
    // parsedjson.html_url



  })
 .catch(error=>console.log("erreor",error))
 
   
 
 )}


render() {
  
  return(
    <div>
  
      <Search/>
      <Table/>
    </div>
// var {isFound,items}=this.state;
// console.log(items[0])
// if(isFound){
//   return <div> <ul>
//   {items.map(item=>(
//    <li key={item.id}>
//     {`${item.private}`}||
//    </li>
//   ))}
//   </ul></div>
// }
// else{
  // return(<div>data has loaded
  //   {/* <ul>
  //   {items.map(item=>(
  //    <li key={item.id}>
  //      {item.name }\\{item.private}
  //    </li>
  //   ))}
  //   </ul> */}

  // </div>)
 
      )

    }
}

  

export default App;
