import React from 'react';

const Caption = (props) => {

    return (
        
        <div className="caption pt-2 pl-2">
            <div className="text-bold text-tiny">{props.title}</div>
            <div className="text-tiny" >{props.tagline}</div>
            <div className="text-muted text-tiny pb-2">{props.link}</div>
        </div>
    )


}

export default Caption