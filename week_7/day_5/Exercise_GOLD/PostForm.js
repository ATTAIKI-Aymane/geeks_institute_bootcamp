import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      user: this.state.user,
      email: this.state.email
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Posted Data:", result);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="user"
          placeholder="User"
          value={this.state.user}
          onChange={this.handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default PostForm;