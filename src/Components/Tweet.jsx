import React, {Component, Fragment} from "react";
import "./tweet-style.css";
import {getData} from "../service/data";
import {Avatar} from "./componentsPart/avatar";
import {InfoSection} from "./componentsPart/infoSection";

class Tweet extends Component {
    state = {
        data: []
    };

    componentWillMount() {
        this.setState({data: getData()});
    }



    render() {
        return (
            <React.Fragment>
                {this.state.data.map(single_data => (
                    <div className="TweetComponent">
                        <div className="container">
                            <div className="row">
                                <Avatar avatar={single_data.avatar}/>
                                <InfoSection
                                    name={single_data.name}
                                    username={single_data.username}
                                    upload_time={single_data.upload_time}
                                    message={single_data.message}
                                />
                            </div>

                        </div>

                    </div>


                ))}
            </React.Fragment>
        );
    }
}

export default Tweet;
