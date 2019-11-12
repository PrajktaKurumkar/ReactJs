import React, { useState } from "react";
import InputPerson from "./InputPerson";
import OutputPerson from "./OutputPerson";

const Application = () => {
  const [myState, setMyState] = useState({ person1: "", person2: "" });

  const changeNameHandler1 = event => {
    setMyState({ ...myState, person1: event.target.value });
  };
  const changeNameHandler2 = event => {
    setMyState({ ...myState, person2: event.target.value });
  };
  return (
    <div>
      <InputPerson
        input1chnage={changeNameHandler1}
        value1={myState.person1}
        input2chnage={changeNameHandler2}
        value2={myState.person2}
      />
      <OutputPerson name={myState.person1} />
      <OutputPerson name={myState.person2} />
    </div>
  );
};

export default Application;
