import React from 'react'

export const Button = (props) => {
    return (
        <button className={props.btnclass} style={{borderRadius:"25px"}} onClick={props.click}>{props.text}</button>
    )
}
