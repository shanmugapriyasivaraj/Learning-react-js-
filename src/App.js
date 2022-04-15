import React from "react";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: { name: "Mithra" },
    };
  }

  render() {
    console.log("rendered");
    return (
      <>
        <p>Count : {this.state.count}</p>
        <button onClick={() => this.setState({ count: 0 })}>Reset</button>
        <button onClick={() => this.setState({ user: { name: "Mithra" } })}>
          Change Name
        </button>
      </>
    );
  }
}

export default App;
