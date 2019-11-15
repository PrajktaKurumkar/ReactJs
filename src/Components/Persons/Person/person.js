import React, { Component } from "react";
import PropType from "prop-types";
import Classes from "./person.css";
import Aux from "../../../HOC/Auxillery";
import WithClass from "../../../HOC/withClass";
import AuthContex from "../../../Contex/authContex";
//import styled from "styled-Component";

/*const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid rgb(196, 196, 230);
  box-shadow: 0 2px rgb(201, 170, 170);
  padding: 16px;
  text-align: center;
`;*/

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  render() {
    return (
      <Aux className={Classes.Person}>
        <AuthContex.Consumer></AuthContex.Consumer>
          {contex =>
            contex.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>
          }
      
        <p onClick={this.props.click}>
          I'am a {this.props.name} and i am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}
Person.PropType = {
  click: PropType.func,
  name: PropType.string,
  age: PropType.string,
  changed: PropType.func
};
export default WithClass(Person, Classes.Person);
