import React, { Component } from 'react'
import TableItem from './TableItem'
export default class Table extends Component {
    render() {
        return (
            <div>
                
                <table>
                    <tr>
                    <th>number</th>
                    <th>name</th>
                    <th>repo state</th>
                    <th>check</th>
                    <th>private</th>
                    <th>language</th>
                    <th>url</th>
                    </tr>
                </table>
                <TableItem/>
            </div>
        )
    }
}
