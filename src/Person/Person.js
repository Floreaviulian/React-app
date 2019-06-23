import React from 'react';
// import { directive } from '@babel/types';
import styles from './Person.module.css';

const person = (props) => {
    console.log(props);
    return (
        <div className={styles.person}>
            <p onClick={props.deletePersonHandler}>I'm {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default (person);