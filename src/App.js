import React, { Component } from 'react';
import styles from './App.module.css';

import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }



  nameChangedHandler = (event, id) => {
    const {persons} = this.state;

    // const personIndex = persons.findIndex(p => {
    //   // p = { id: '1', name: 'Max', age: 28 }, 
    //   return p.id === id; // true sau false
    // });
    // persons[personIndex].name = event.target.value;
    // persons.forEach(item => {
    //   if (item.id === id) {
    //     item.name = event.target.value;
    //   }
    // });

    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });
    const person = persons[personIndex];
    person.name = event.target.value;
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;
    this.setState({ persons: newPersons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {

    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    const { showPersons, persons } = this.state;
    let  btnClass = styles.Button;

  
    let personsContent = null;

    if (showPersons) {
      personsContent = (
        <div>
          {persons.map((person, index) => (
            <Person
            deletePersonHandler={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          ))}
        </div>
      );
         btnClass = btnClass + " " + styles.red;
    }

    const classes = [];
    if (persons.length <= 2) {
      classes.push(styles.red); // classes = ['red']
    }

    if (persons.length <= 1) {
      classes.push(styles.bold); // classes = ['red', 'bold']
    }
      console.log(styles);
    return (

      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {personsContent}
      </div>

    );
  }
}
export default App;
