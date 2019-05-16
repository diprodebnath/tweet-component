import React, { Component, Fragment } from "react";
import "./tweet-style.css";
import { getData } from "../service/data";
class Tweet extends Component {
  state = {
    data: []
  };
  componentWillMount() {
    this.setState({ data: getData() });
  }
  handleUpload = () => {
    return "aa";
  };
  render() {
    console.log(this.state.data[1].avatar);
    return (
      <React.Fragment>
        {this.state.data.map(single_data => (
          <div className="TweetComponent">
            <div className="img">
              <img src={single_data.avatar} alt="" />
            </div>
            <div className="info">
              <p>
                {single_data.name}
              </p>
              <span className="user_name">@{single_data.username} . </span><span className="upload_time" >{this.handleUpload(single_data.upload_time)}</span>
            </div>
            <div className="massege" >
              {single_data.message}
            </div>

            <div className="buttons" />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Tweet;
