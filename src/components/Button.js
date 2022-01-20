import React from 'react'
import './Button.css';

const Button = ({number, popupHandler}) => {

    return (
            <div className='button' onClick={popupHandler} style={{color:'blue', marginLeft:'4px', marginRight:'4px'}}>
                {number}
            </div>
    )
}

export default Button
