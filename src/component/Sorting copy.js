//Sortiong.js
import React, { useEffect , useRef, useState } from 'react';


const Sorting = ({data}) => {
  const [searchValue, setSearchValue] = useState(''); // 검색어 상태 관리
  const searchRef = useRef(null); // 인풋 값을 저장하기 위한 ref


  // onChange 핸들러: 검색창에서 입력값이 변경될 때 검색어 상태 업데이트
  const searchChange = (e)=>{
    setSearchValue(e.target.value);
  }
 // 검색창 초기화 및 포커스
 const searchClear = ()=>{
  setSearchValue =''; //검색어 초기화
  searchRef.current.focus(); //검색창 포커스
}

//검색 실행
 const searchKeyword = (e) =>{
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    const inputRef = useRef(null);
    
     console.log("keyword", keyword);
     const url = new URL (`
     https://api.themoviedb.org/3/movie/{movie_id}/${keywords}`);
 }
 function dataGet(){
  let original = 'https://image.tmdb.org/t/p/original';
}

 useEffect(()=>{
  dataGet();    
},[data])

  return (
    <div className='sortingbox'>
        <ul>
            <li><a href='/' className='actived'>#전체</a></li>
            <li><a href='/'>#TOP20</a></li>
            <li><a href='/'>#드라마</a></li>
            <li><a href='/'>#예능</a></li>
            <li><a href='/'>#영화</a></li>
            <li><a href='/'>#애니</a></li>
            <li><a href='/'>#키즈</a></li>
        </ul>
        <div className='searchbox'>
        <form onSubmit={searchKeyword}>
            <input type='text' ref={searchRef} onChange={searchChange} placeholder='검색어를 입력하세요'/>
            <button onClick={searchKeyword}></button>
        </form>
        </div>
    </div>
  )
}

export default Sorting