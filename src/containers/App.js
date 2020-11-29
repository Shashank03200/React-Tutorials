import React, { Component } from 'react'; 
import styled from 'styled-components';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';  // CSS  Modules

import Cockpit from '../components/Cockpit/Cockpit'




class App extends Component {

  state = {
    persons: [
      {id: 'asfa1', name: 'Max', age: 28},
      {id: 'vasdf1', name: 'Manu', age: 29},
      {id: 'asdf11', name: 'Stephanie', age:26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id)=>{

    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id  === id;
    })
    console.log(personIndex)
    const person = {...this.state.persons[personIndex]};

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    
      this.setState({
        persons:persons
    })
  }

  togglePersonHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  render() {

    let persons = null;
    

    if(this.state.showPersons){
      persons = (
        
          <Persons 
          persons = {this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler} 
          toggle = {()=>{this.togglePersonHandler()}}
          />
        
      ); 
        
    }



    return (
      <div className={classes.App}>
      <Cockpit 
      showPersons = {this.state.showPersons} 
      persons = {persons}
        toggle = {()=>this.togglePersonHandler()}
      />
       {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a react app!') );
  }
}

export default App;
