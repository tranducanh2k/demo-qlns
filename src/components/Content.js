import React from 'react'
import Button from './Button'
import Popup from './Popup'
import { useState } from 'react'
import './Content.css';
import ChartUser from './Chart';

const Content = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='content'>
            <div className='text'> Tháp tuổi cán bộ công nhân viên <Button number={128} popupHandler={(e)=>setIsOpen(!isOpen)} /> đơn vị </div>
            {isOpen && <Popup onClickOK={(e) => setIsOpen(!isOpen)} />}

            <div className='chart'>
                <ChartUser />
            </div>
        </div>
        
    )
}

export default Content
