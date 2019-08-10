import React, { Component, Fragment } from "react";

class MemoInfo extends Component {
  render() {
    const { memoTitle, memoText } = this.props.info;
    return (
      <Fragment>
        <div>{memoTitle}</div>
        <div>{memoText}</div>
      </Fragment>
    );
  }
}

export default MemoInfo;
