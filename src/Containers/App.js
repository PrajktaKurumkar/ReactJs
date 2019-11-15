import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import Aux from "../HOC/Auxillery";
import withClass from "../HOC/withClass";
import AuthContex from "../Contex/authContex";
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
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "ddf", name: 123, age: "31" },
      { id: "sdw", name: "Manu", age: "25" },
      { id: "asd", name: "Stephani", age: "13" }
    ],
    otherState: "some other value",
    showPerson: false,
    authenticated: false,
    showCockpit: true
  };
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js]getDerivedStateFromProps", props);
    return state;
  }
  componentDidMount() {
    console.log("[App.js]componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {}

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
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
  LogInHandler = () => {
    this.setState({ authenticated: true });
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
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
      //style.backgroundColor = "red";
    }

    return (
      <Aux classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>

        <AuthContex.Provider
          value={{
            authenticated: this.state.authenticated,
            logIn: this.LogInHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.title}
              showPerson={this.state.showPerson}
              persons={this.state.persons}
              click={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContex.Provider>
      </Aux>
    );
  }
}
export default withClass(App, classes.App);
