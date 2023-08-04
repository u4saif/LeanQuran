import * as React from 'react';
import './Nav.css';

const Nav = (props)=>{

    return <>
    <div className='navContainer'>
        <a className='fontSizer sm' onClick={()=>props.actionHandler('decrement')}>A-</a>
        <a  className='fontSizer' onClick={()=>props.actionHandler('increment')}>A+</a>
    </div>
    </>
}

export default Nav;