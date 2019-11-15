import React, { Component } from "react";
import Person from "./Person/person";

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    // if (nextProps.persons !== this.props.persons) {
    //  } else {
    // return false;
    //  }
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot" };
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.click(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
      />
    ));
  }
}

export default Persons;
