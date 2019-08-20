import React, { Component } from 'react'

export default class TableItem extends Component {
    
    clicke=(Item)=>{return }
    render() {
        const {Item}=this.props;
        return (
            <>
               <td>{this.props.ID}</td>
               <td>{Item.name}</td> 
               <td>{`${Item.private}`?"public":"private"}</td> 
               <td><input type="checkbox" checked={Item.private}/></td>
               <td>{`${Item.private}`?"NO":"Yes"}</td> 
               <td>{Item.language}</td> 
               <td>  <a href={Item.clone_url} target="_blank"> <button>Go To User </button> </a> </td> 

</>
            
        )
    }
}
