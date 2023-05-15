import { Component } from "react";
import hoc from "./HOC";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editUser: props.users[props.params.id],
    };

    console.log(this.state.editUser);
  }
  render() {
    return <>Edit User</>;
  }
}

export default hoc(EditUser);
