import React, { Component } from 'react';  
import './App.css';
import StudentName from './components/studentsName';
import List from './components/list'

class App extends React.Component {  
 constructor() {  
      super();  
      this.state = {  
         data:   
         [  
            {             
               "name":"Usama Mumtaz"             
            },  
            {            
               "name":"Sohaib Waseem"             
            },  
            {    
               "name":"Umair Abdullah"          
            },  
            {            
               "name":"Shafique Abbasi"             
            }
         ]  
      }  
   }  
   render() {  
      return (  
         <div>  
            <StudentName/>  
            <ul>            
                {this.state.data.map((item) => <List data = {item} />)}           
            </ul>  
         </div>  
      );  
   }  
}  
 
  
export default App;  