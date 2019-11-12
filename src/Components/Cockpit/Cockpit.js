import React from "react";
import classes from "./Cockpit.css";
const Cockpit = props => {
  const Classs = [];
  let btnclass = [];
  if (props.showPerson) {
    btnclass = [Classs.Red];
  }

  if (props.persons.length <= 2) {
    Classs.push(classes.red);
  }
  if (props.persons.length <= 1) {
    Classs.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I am React App</h1>
      <p className={classes.join(" ")}>This is really working!!</p>
      <button
        className={btnclass.join(" ")}
        onClick={this.togglePersonsHandler}
      >
        Toggle Person
      </button>
    </div>
  );
};

export default Cockpit;
