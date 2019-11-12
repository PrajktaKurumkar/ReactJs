import React, { Component } from "react";

class InputPerson extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.value1}
          onChange={this.props.input1chnage}
        ></input>

        <input
          type="text"
          value={this.props.value2}
          onChange={this.props.input2chnage}
        ></input>
      </div>
    );
  }
}
export default InputPerson;
