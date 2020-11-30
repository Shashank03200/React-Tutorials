import React, { Component, useEffect } from 'react'

import Person from './Person/Person'

class Persons extends Component{

    static getDerivedStateFromProps (props, state) {
        console.log('[Perons.js] getDerivedStateFromProps'); 
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSanpshotBeforeUpdate() {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: "Snapshot!"};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        console.log('[Persons.js] componentDidUpdate');
    }


    componentWillUnmount() {
        console.log('Component will unmount.')
    }
    
    render() {

    console.log('Persons.js rendering....'); 

    return (
        this.props.persons.map((person, index)=> {
            return  <Person 
            name={person.name} 
            click = {()=>this.props.clicked(index)}
            age={person.age}
            key = {person.id}
            changed = {(event)=>this.props.changed(event, person.id)} 
          />
        }));
    }
}

export default Persons;