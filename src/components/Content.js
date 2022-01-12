import React from 'react'
import Button from './Button'
import Popup from './Popup'
import { useState } from 'react'
import './Content.css';
import ChartUser from './Chart';
import dashboard1 from '../assets/dashboard1.png';
import dashboard2 from '../assets/dashboard2.png';
import dashboard3 from '../assets/dashboard3.png';

const Content = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='content'>
            <div className='text'> Tháp tuổi cán bộ công nhân viên <Button number={128} popupHandler={(e)=>setIsOpen(!isOpen)} /> đơn vị </div>
            {isOpen && <Popup onClickOK={(e) => setIsOpen(!isOpen)} />}

            <img src={dashboard1} alt="dashboard1" width='117%'/>
            <img src={dashboard2} alt="dashboard2" width='117%'/>
            <div className='chart'>
                <ChartUser />
            </div>
            <img src={dashboard3} alt="dashboard3" width='117%'/>
        </div>
        
    )
}

export default Content
