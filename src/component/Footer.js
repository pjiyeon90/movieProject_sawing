//Footer.js

import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className='footerbox'>
        <ul className='foot-row1'>
          <li><a href='/'>홈</a></li>
          <li><a href='/'>고객 센터</a></li>
          <li><a href='/'>이용 약관</a></li>
          <li><a href='/'>개인 정보 처리 방침</a></li>
        </ul>
        <p>
        <span>고객센터: 평일 9시~18시(점심시간 13시~14시)</span><i>|</i>
        <span>대표 메일: sawing@naver.com </span><i>|</i>
        <span>전화번호: 1588-2367</span><i>|</i>
        <span>사업자 등록번호: 2367-77-88991 </span><i>|</i>
        <span>사업장: 경기도 군포시 번영로 328, SAWING 프라자 7층 </span><i>|</i>
        <span>대표 이사: 박지연</span>
        </p>
        <b>Copyright ⓒ 주식 회사 소윙 All right reserved.</b>
       <div className='iconbox'>
        <ul>
          <li><a href='/'><img src='../img/youtube.svg'/></a></li>
          <li><a href='/'><img src='../img/insta.svg'/></a></li>
          <li><a href='/'><img src='../img/facebook.svg'/></a></li>
          <li><a href='/'><img src='../img/twitter.svg'/></a></li>
        </ul>
        </div>
    </div>
    </footer>
  )
}

export default Footer