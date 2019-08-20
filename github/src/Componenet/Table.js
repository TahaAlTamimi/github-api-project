import React, { Component } from 'react'
import TableItem from './TableItem'
export default class Table extends Component {
    render() {
        const {dataTransfer}=this.props;
        console.log(dataTransfer)  
        
        return (
            <div>
                
                <table>
                    <thead>
                    <tr>
                    <th>number</th>
                    <th>name</th>
                    <th>repo state</th>
                    <th>check</th>
                    <th>private</th>
                    <th>language</th>
                    <th>url</th>
                    </tr>
                    </thead>
                    <tbody>
                       {dataTransfer.map((item,index)=>(
                             <tr> <TableItem Item= {item} ID={index+1} /> </tr>
                         )  )
                           }
                    </tbody>
                </table>
            </div>
        )
    }}

