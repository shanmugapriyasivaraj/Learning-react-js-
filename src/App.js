import React from "react";
import PropTypes from "prop-types";

class App extends React.PureComponent {
  render() {
    console.log("rendered"); //arrays & objects only rendered
    return (
      <>
        <p> Name : {this.props.name ? this.props.name : "No name exists"}</p>
        <p> Age : {this.props.age}</p>
        <p> City : {this.props.city}</p>
        <p> Gender : {this.props.gender}</p>
      </>
    );
  }
}
App.PropType = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string,
  gender: PropTypes.oneOf(("female", "male", "Other")).isRequired,
};

App.defaultProps = {
  gender: "female",
};

export default App;
