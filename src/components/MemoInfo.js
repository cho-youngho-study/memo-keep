import React, { Component } from "react";

class MemoInfo extends Component {
  render() {
    const { memoTitle, memoText } = this.props.info;
    return (
      <div>
        <div>{memoTitle}</div>
        <div>{memoText}</div>
      </div>
    );
  }
}

export default MemoInfo;
