import React, { useState } from 'react'; 
import Person from './Person/Person'
import './App.css';
import person from './Person/Person';

const App = (props) => {

  const [stateArr,changeStateArray] =  useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age:26}
    ],
    otherState: 'some other value'
  })

    console.log(stateArr);

    const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = ()=>{
    console.log('Was Clicked');
    changeStateArray({
      persons:[
        {name:"Maximilian", age: 28},
        {name:"Manu", age: 29},
        {name:"Stephanie", age:27}
      ],
      otherState:otherState
    })
  }
  
    return (
      <div className="App">
        <h1>Hi, I'm A React App</h1>
        <p>This is really working</p>
        <button onClick = {switchNameHandler}>Switch Button</button>
        <Person name={stateArr.persons[0].name} age={stateArr.persons[0].age}/>
        <Person name={stateArr.persons[1].name} age={stateArr.persons[1].age}/>
        <Person name={stateArr.persons[2].name} age={stateArr.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a react app!') );
  
}

export default App;
