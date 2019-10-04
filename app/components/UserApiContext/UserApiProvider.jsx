import React, { Component } from "react";
import axios from "axios";
import UserApiContext from "./UserApiContext";

class UserApiProvider extends Component {
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

export default UserApiProvider;
