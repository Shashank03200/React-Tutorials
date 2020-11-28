import React from 'react';

import './Person.css'
import styled from 'styled-components'



const StyledDiv = styled.div`
        width: 60%;
        margin: 20px auto;
        border: 1px solid rgb(168, 108, 108);
        box-shadow: 0 2px 3px #ccc;
        text-align:  center;
        padding: 20px;
        
        @media (min-width:500px) {
                width: 450px;           
        }

`

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width:'450px'
    //     }
    // }

    return (
        // <div  className="Person" style = {style}>
        <StyledDiv>
            <p onClick = {props.clicked}>I'm {props.name}, {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </StyledDiv>
    );
}

export default person;