//Sortiong.js
import React, { useEffect , useRef, useState } from 'react';


const Sorting = ({data}) => {
  
  const searchRef = useRef(); //useRef로 인풋 값을 저장

  //onChange
  const searchChange = (e)=>{
    setSearchValue(e.target.value);
  }
 //clear
 const searchClear = ()=>{
  searchRef.current.focus();
}


 const searchKeyword = () =>{
    // const keyword = document.getElementById("search-input").value;
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