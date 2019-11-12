import React from "react";
import Classes from "./person.css";
//import styled from "styled-Component";

/*const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid rgb(196, 196, 230);
  box-shadow: 0 2px rgb(201, 170, 170);
  padding: 16px;
  text-align: center;
`;*/
const person = props => {
  /* const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error("Oops..! Something went wrong..");
  }*/
  return (
    <div className={Classes.Person}>
      <p onClick={props.click}>
        I'am a {props.name} and i am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};
export default person;
