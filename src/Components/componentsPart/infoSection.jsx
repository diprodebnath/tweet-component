import * as React from 'react';

export const InfoSection = ({ name, username, upload_time, message }) => {
   const handleUpload = (time) => {
        return "aa";
    };
    return (
        <div className="info-side col">
            <div className="info">
                <p>
                    {name}
                </p>
                <span className="user_name">@{username} .</span><span
                className="upload_time">{handleUpload(upload_time)}</span>
            </div>
            <div className="massege">
                <p>{message}</p>
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
    );
};