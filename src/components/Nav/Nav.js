import * as React from 'react';
import './Nav.css';

const Nav = (props)=>{

    return <>
    <div className='navContainer'>
        <a className='fontSizer sm' onClick={()=>props.actionHandler('decrement')}>A-</a>
        <a  className='fontSizer' onClick={()=>props.actionHandler('increment')}>A+</a>

      {/*  <div className="btn"  onClick={() => props.actionHandler('formatLines')}>*/}
      {/*  <span className="icon"></span>*/}
      {/*</div>*/}
    </div>
    </>
}

export default Nav;