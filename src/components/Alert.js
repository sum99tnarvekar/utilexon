import React from "react";
import PropTypes from 'prop-types'

export default function Alert(props) {
    if(!props.type){
        return null
    }
    return (
        <div className={`alert alert-${props.type}`} role="alert" >
            {props.alertMessage}
        </div>
    )
}

Alert.propTypes = {
    type: PropTypes.string
}