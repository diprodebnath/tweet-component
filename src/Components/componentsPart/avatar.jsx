import React from 'react';

export const Avatar = (props) => {
    return (
        <div className="img-side col-md-3">
            <div className="img">
                <img src={props.avatar} alt=""/>
            </div>
        </div>
    );
};