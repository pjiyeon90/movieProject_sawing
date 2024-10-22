//Header.js

import React from 'react'
import style from '../css/sawing.scss'

const Header = () => {

  return (
  <header>
    <div className='header-wrap'>
    <h1><img src='./img/sawing_logo.svg'/></h1>
    <div className='h-right-box'>
    <ul>
      <li className='darkmode-function'><input type="checkbox" id="mode"/> 
            <label htmlFor='mode'>
            <span className='darkmoon'></span>
            <span className='sunlight'></span>
            </label>
      </li>
      <li className='join'><a href='/'>회원가입</a></li>
      <li className='login'><a href='/'>로그인</a></li>
    </ul>
    </div>


     </div> 
    </header>   
  ) 
} 

export default Header