import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: "",
      },
      isLoading: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
    console.log("credentials", this.state.credentials);
  };

  loginHandler = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/bubblepage");
        this.setState({
          isLoading: false,
        });
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <>
        <h1>Welcome, Please Log In!</h1>
        <div class="login">
          {this.state.isLoading && <p>Loading! One Moment ..</p>}
          <form onSubmit={this.loginHandler}>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log In</button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
