import React from "react";
import axios from "axios";

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  render() {
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
        <p>Build a login page here</p>
      </>
    );
  }
}

export default Login;
