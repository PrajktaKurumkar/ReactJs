import React, { useContext /*,{ useEffect }*/ } from "react";
import classes from "./Cockpit.css";
import AuthContex from "../../Contex/authContex";
const Cockpit = props => {
  /*useEffect(() => {
    const timer = setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });*/
  const authContex = useContext(AuthContex);
  const Classs = [];
  let btnclass = [];
  if (props.showPerson) {
    btnclass = [classes.Red];
  }

  if (props.persons.length <= 2) {
    Classs.push(classes.red);
  }
  if (props.persons.length <= 1) {
    Classs.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={Classs.join(" ")}>This is really working!!</p>
      <button className={btnclass} onClick={props.click}>
        Toggle Person
      </button>
      <button onClick={authContex.logIn}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);
