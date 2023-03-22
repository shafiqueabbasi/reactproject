import React, { Component } from 'react';  
import '../App.css';

class List extends React.Component{

    render() {  
        return (
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
            
        );
    }
}

export default List;