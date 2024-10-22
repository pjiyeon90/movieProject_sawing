//Main.js

import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Swiper1 from '../component/Swiper1';
import Notice from '../component/Notice';
import Footer from '../component/Footer';
import Sorting from '../component/Sorting';
import Flowlist from '../component/Flowlist';
import List from '../component/List';
import { getVdo } from '../api/api';
import Scrolltopbt from '../component/Scrolltopbt';



// const [themeMode, setThemeMode] = useState(lightTheme);
// const theme = themeMode === "lightTheme" ? lightTheme : darkTheme;

const Main = () => {
  const [data,setData] = useState();
  useEffect(()=>{
    (async function(){
      let res = await getVdo();
      setData(res)
    }())
  },[])
console.log(data)
  if(!data) return <>로딩중..</>

  return (
    <div className='wrap'>
    <Header/>
    <Swiper1 data={data.movie} type="movie"/>
    <Notice/>
    <div className='sortingwrap'>
    <Sorting/>
    <Flowlist data={data.top_rated}/>
    <List title="재미난 예능 컨텐츠" data={data.tv} type="tv" />
    <List title="인기있는 영화" data={data.movie} type="movie"/>
    <List title="애니메이션 TOP 20" data={data.ani} type="tv"/>
    <List title="방영중인 드라마" data={data.drama} type="tv"/>
    <List title="아이를 위한 키즈 컨텐츠" data={data.kids} type="tv"/>
    </div>
    <Scrolltopbt/>
    <Footer/>
    </div>
  )
}

export default Main