import React from 'react';

export const Avatar = ({avatar}) => {
    return (
        <div className="img-side col-md-3">
            <div className="img">
                <img src={avatar} alt=""/>
            </div>
        </div>
    );
};