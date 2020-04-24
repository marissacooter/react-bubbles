import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password:'',
      },
      isLoading: false,
    };
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      },
    });
    console.log('credentials', this.state.credentials);
  };

  loginHandler = e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    axios 
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        this.props.history.push('/bubblepage');
        this.setState({
          isLoading: false,
        });
      })
      .catch(err => console.log({err}));
  };

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
