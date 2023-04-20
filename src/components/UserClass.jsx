import React from "react";

class UserCLass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      text: "Welcome To Class",
      userList: [
        {
          name: "Suraj",
        },
        {
          name: "Ajinkya",
        },
        {
          name: "Arpita",
        },
      ],
    }; // create a state
  }

  changeText = () => {
    this.setState({ text: this.props.newText }); // updating / modify state
  };
  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
        <h1>{this.state.text.length}</h1>
        <button onClick={this.changeText}>Click</button>

        {/* loop logic */}

        <ul>
          {this.state.userList.map((user, index) => {
            return <li key={index}>{user.name}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default UserCLass;

// bs4 ==> ml , mr
// bs5 ==> ms , me

// Legacy Project
// Class  < 16.8 < Function (Hooks functions)

// store "Welcome User" in a variable
// Events ==> User Action
