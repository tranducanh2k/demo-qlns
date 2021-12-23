import React from 'react'
import './Popup.css';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';

const list = ['UIUX1', 'UIUX2', 'UIUX3', 'UIUX4', 'UIUX5', 'UIUX6',
            'UIUX7','UIUX8','UIUX9','UIUX10','UIUX11','UIUX12','UIUX13','UIUX14','UIUX15','UIUX16','UIUX17','UIUX18'];

const Popup = ({onClickOK}) => {
    const [input, setInput] = useState('');

    const inputHandler = (e) => {
        const value = e.target.value;
        setInput(value); 
    }
    
    return (
        <div className='popup'>
            <div className='title'>Danh sách đơn vị</div>
            <div className='search'>
                <SearchIcon />
                <input onChange={inputHandler} value={input} />
                <button className='findButton'> Tìm </button>
            </div>
            <div className='list'>
                <ol>
                    {
                        
                        list.filter(l => l.includes(input)).map(filterValue => (
                            <li>
                                {filterValue}
                            </li>
                        ))
                    }
                </ol>
            </div>
            <button className='okButton' onClick={onClickOK}>OK</button>
        </div>
    )
}

export default Popup
