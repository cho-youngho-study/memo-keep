import React, { Component } from "react";
import MemoForm from "./components/MemoForm";
import MemoInfoList from "./components/MemoInfoList";

class App extends Component {
  id = 0;
  state = {
    memo: []
  };
  handleOnCreate = data => {
    this.setState({
      memo: this.state.memo.concat({
        memoTitle: data.memoTitle,
        memoText: data.memoText,
        id: this.id++
      })
    });
  };
  render() {
    return (
      <div>
        <MemoForm onCreate={this.handleOnCreate} />
        <MemoInfoList data={this.state.memo} />
      </div>
    );
  }
}

export default App;
