import React from 'react'
import './Link.css';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const Link = ({ text }) => {
    return (
        <div className='link'>
            <AccountBoxIcon color='primary' />
            <div className='text' >
                {text}
            </div>
        </div>
    )
}

export default Link
