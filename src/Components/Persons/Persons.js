import React from "react";
import Person from "./Person/person";
const persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.click(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => props.changed(event, persons.id)}
      />
    );
  });

export default persons;