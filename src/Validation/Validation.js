import React from 'react';

const validation = (props) => {

    let text = null;

    if (props.length > 0 && props.length < 5) {
        text = (
            <div>
                Text too short
            </div>
        );

    }
    if (props.length >=5 ) {
        text = (
            <div>
                Text long enough
            </div>
        );

    }
    return (
        <div>
            {props.length}
            {text}
        </div>
    );

}
export default validation;