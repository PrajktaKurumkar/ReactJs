import React from "react";

const AuthContex = React.createContext({
  authenticated: false,
  login: () => {}
});
export default AuthContex;
