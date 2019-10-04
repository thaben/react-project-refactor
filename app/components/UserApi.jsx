import React, { Component } from "react";
import axios from "axios";
import UserApiContext from "./UserApiContext";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

class UserApi extends Component {
  state = {
    user: null,
  };

  async componentDidMount() {
    const user = await axios.get("http://localhost:3001/user");

    this.setState({ user: user.data });
  }

  render() {
    const { user } = this.state;

    return (
        <UserApiContext.Provider value={this.state.user}>
        {this.props.children}
        </UserApiContext.Provider>
    );
  }
}

export default UserApi;
