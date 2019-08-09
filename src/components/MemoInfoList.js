import React, { Component } from "react";
import MemoInfo from "./MemoInfo";

class MemoInfoList extends Component {
  render() {
    const { data } = this.props;

    if (!data) return null;

    const list = data.map(info => <MemoInfo info={info} key={info.id} />);

    return (
      <div>
        <div>{list}</div>
      </div>
    );
  }
}

export default MemoInfoList;
