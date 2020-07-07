import React from 'react';

const Buttons = props =>
{
    const {text2,text3} = props;
    return(
        <div>
            <button type="button">{props.text}</button>
             <span>{props.text2}</span>
        </div>
    )
}

export default Buttons;