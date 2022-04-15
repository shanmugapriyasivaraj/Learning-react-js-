import React from "react";

class App extends React.PureComponent {
  inputRef = React.createRef();
  btnRef = React.createRef();
  handleSubmit = () => {
    console.log("submitted");
    console.log(this.inputRef.current);
    console.log(this.btnRef.current);
    const stuName = document.getElementById("stuName");
    console.log(stuName.value);
    console.log(this.inputRef.current.value);
  };

  render() {
    console.log("rendered"); //arrays & objects only rendered
    return (
      <>
        <input ref={this.inputRef} id="stuName" type="text" />
        <button ref={this.btnRef} onClick={this.handleSubmit}>
          Submit
        </button>
      </>
    );
  }
}

export default App;
