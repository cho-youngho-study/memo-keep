import React, { Component, Fragment } from "react";
import Nomemo from "../images/no-memoList.png";

class menoForm extends Component {
  state = {
    memoTitle: "",
    memoText: ""
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      memoTitle: "",
      memoText: ""
    });
  };
  render() {
    return (
      <div>
        <Fragment>
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="text"
              name="memoTitle"
              placeholder="제목"
              value={this.state.memoTitle}
              onChange={this.handleOnChange}
            />
            <input
              type="text"
              id="memoText"
              name="memoText"
              placeholder="메모 작성..."
              value={this.state.memoText}
              onChange={this.handleOnChange}
            />
            <button type="submit">버튼</button>
          </form>
        </Fragment>
        <img src={Nomemo} alt="no-memo" />
        <div>추가한 메모가 여기에 표시됩니다.</div>
      </div>
    );
  }
}

export default menoForm;
