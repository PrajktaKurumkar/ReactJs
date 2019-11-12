import React, { Component } from "react";

import Classs from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
//import styled from "styled-Component";
//import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";

/*const StyledButton = styled.button`
  backgroundcolor: ${props => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.alt ? "solemon" : "green")};
    color: balck;
  }`*/

class App extends Component {
  state = {
    persons: [
      { id: "ddf", name: "Max", age: "31" },
      { id: "sdw", name: "Manu", age: "25" },
      { id: "asd", name: "Stephani", age: "13" }
    ],
    otherState: "some other value",
    showPerson: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex];
    this.setState({
      persons: [
        { name: "Max", age: "31" },
        { name: event.target.value, age: "25" },
        { name: "Staphani", age: "13" }
      ]
    });
  };
  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  render() {
    /*const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };*/
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      //style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(Classs.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(Classs.bold);
    }
    return (
      <div>
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.persons}
        />
      </div>
    );
  }
}
export default App;
