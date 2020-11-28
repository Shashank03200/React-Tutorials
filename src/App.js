import React, { Component } from 'react'; 
import Person from './Person/Person'
import './App.css';
import Radium, { StyleRoot } from 'radium';


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

    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border: '1px solid blue',
      cursor:'pointer',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>

        {this.state.persons.map((person, index)=> {
            return <Person 
              name={person.name} 
              clicked = {()=>this.deletePersonHandler(index)}
              age={person.age}
              key = {person.id}
              changed = {(event)=>this.nameChangedHandler(event, person.id)} 
            />
        })}
          
          
        </div>
      ); 

      style.backgroundColor ='red';
      style[':hover']  = {
        backgroundColor:'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');  // classes = ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red', 'bold']
    }


    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm A React App</h1>
        <p className = {classes.join(' ')}>This is really working</p>
        <button style={style} onClick = {this.togglePersonHandler}>Toggle Button</button>
        {persons}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a react app!') );
  }
}

export default Radium(App);
