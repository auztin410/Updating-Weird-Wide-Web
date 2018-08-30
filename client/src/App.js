import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import "./App.css";
import Form from "./components/Form/FormLogic";
import Display from "./components/Display/Display";
import MainPage from "./components/MainPage/MainPage";
import UserPage from "./components/UserPage/UserPage";
import React, { Component } from "react";
import Nav from "./components/Nav";
import axios from "axios";



class App extends Component {

  state = {
    user: null,
    email: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleLogin = event => {
    event.preventDefault();
    console.log("Hello Login");
    axios.post("/auth/local", {
      email: this.state.email,
      password: this.state.password
    })
    .then(data => {
      console.log(data);

      this.setState({
        user: data.data
      })
    })
    .catch(error => {
      console.log(error);
    })

  }

  handleCreate = event => {
    console.log("Hello Create")
    console.log(event)
    axios.post("/auth/signup", {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .then(data => {
      console.log(data);
      this.setState({
        username: "",
        password: "",
        email: ""
      });
    })
  }

  handleGoogle = event => {
    console.log("Hello Google.  Stop spying on me.")
    axios.get("/google");
  }

  render() {

    return (
      <Router>
      <div>
        <Nav 
        handleInputChange={this.handleInputChange}
        handleLogin={this.handleLogin} 
        handleCreate={this.handleCreate}
        handleGoogle={this.handleGoogle}
        user={this.state.user}
        />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/display" component={Display} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/profile" component={UserPage} />
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;