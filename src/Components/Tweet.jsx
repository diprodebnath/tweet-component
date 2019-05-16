import React, {Component, Fragment} from "react";
import "./tweet-style.css";
import {getData} from "../service/data";
import {Avatar} from "./componentsPart/avatar";

class Tweet extends Component {
    state = {
        data: []
    };

    componentWillMount() {
        this.setState({data: getData()});
    }

    handleUpload = () => {
        return "aa";
    };

    render() {
        return (
            <React.Fragment>
                {this.state.data.map(single_data => (
                    <div className="TweetComponent">
                        <div className="container">
                            <div className="row">
                                <Avatar avatar={single_data.avatar}/>
                                <div className="info-side col">
                                    <div className="info">
                                        <p>
                                            {single_data.name}
                                        </p>
                                        <span className="user_name">@{single_data.username} .</span><span
                                        className="upload_time">{this.handleUpload(single_data.upload_time)}</span>
                                    </div>
                                    <div className="massege">
                                        <p>{single_data.message}</p>
                                    </div>

                                    <div className="buttons">
                                        <button className="replay-btn">
                                            <i className="fa fa-comment-o"></i>
                                        </button>
                                        <button className="retweet-btn">
                                            <i className="fa fa-retweet" aria-hidden="true"></i>
                                        </button>
                                        <button className="like-btn">
                                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                ))}
            </React.Fragment>
        );
    }
}

export default Tweet;
