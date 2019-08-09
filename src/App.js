import React, { Component } from "react";
import MemoForm from "./components/MemoForm";

class App extends Component {
  id = 0;
  state = {
    memo: []
  };
  handleOnCreate = data => {
    this.setState({
      memo: this.state.memo.concat({
        ...data,
        id: this.id++
      })
    });
  };
  render() {
    return (
      <div>
        <MemoForm onCreate={this.handleOnCreate} />
        {JSON.stringify(this.state.memo)}
      </div>
    );
  }
}

export default App;
