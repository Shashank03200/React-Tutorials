import React from 'react';

import classes from './Cockpit.module.css'


const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = [classes.Button];
    console.log(btnClass);
    
    if(props.showPersons) {
        btnClass.push(classes.Red);
        console.log(btnClass);
        if(props.persons.length <= 2) {
            assignedClasses.push(classes.red);  // classes = ['red']
          }
          if(props.persons.length <= 1){
            assignedClasses.push(classes.bold); // classes = ['red', 'bold']
          }
          
    }
    

    

    return (
    <div className = {classes.Cockpit}>
        
        <h1>Hi, I'm A React App</h1>
         
        <p 
        className = {assignedClasses.join(' ')}>This is really working</p>
        
        <button  className = {btnClass.join(' ')} onClick = {props.toggle}>Toggle Button</button>
    </div>
    );
}

export default Cockpit;