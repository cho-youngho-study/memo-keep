import React, { Component, Fragment } from "react";
import MemoInfo from "./MemoInfo";
import Nomemo from "../images/no-memoList.png";

class MemoInfoList extends Component {
  render() {
    const { data } = this.props;
    const list = data.map(info => <MemoInfo info={info} key={info.id} />);

    return (
      <Fragment>
        <div>
          {data.length === 0 ? (
            <Fragment>
              <img src={Nomemo} alt="no-memo" />
              <div>추가한 메모가 여기에 표시됩니다.</div>
            </Fragment>
          ) : (
            <div>{list}</div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default MemoInfoList;
