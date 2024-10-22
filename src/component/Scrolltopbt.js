import React, { useState, useEffect } from 'react';

const Scrolltopbt = () => {
    
        const [isVisible, setIsVisible] = useState(false);
        const buttonWidth = 50;
         // console.log(window.innerWidth);현재 브라우저 창의 너비를 콘솔에 출력
        
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
      
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        };
      
        useEffect(() => {
            const updateWidth = () => {
               
              };
          
              window.addEventListener('scroll', toggleVisibility);
              window.addEventListener('resize', updateWidth); // 화면 크기 변경 시 업데이트
          
              updateWidth(); // 초기 렌더링 시 width 설정
          
              return () => {
                window.removeEventListener('scroll', toggleVisibility);
                window.removeEventListener('resize', updateWidth);
              };
            }, []);


  return (
    <div>
    {isVisible && (
      <button className='topbt'
        onClick={scrollToTop}
        style={{
          display: isVisible ? 'block' : 'none',
          position: 'fixed',
          width: `${buttonWidth}px`,
          height: '50px',
          bottom: '30px',
          right: `calc(15% - ${buttonWidth / 2}px)`,
          border: 'none',
          borderRadius: '999px',
          backgroundColor: 'rgba(255,255,255,0.5)',
          color: 'black',
          cursor: 'pointer',
        }}
      >
        ↑
      </button>
    )}
  </div>
  )
}

export default Scrolltopbt