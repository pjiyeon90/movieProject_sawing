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
import { useNavigate } from 'react-router-dom';



const Main = () => {

  const router = useNavigate();
  
  //다크모드 기능
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    }; 
    
    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      // router(`/search?keyword=${'슈퍼맨'}`)
    }, [isDarkMode]);



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
    <div className={isDarkMode ? 'app dark-mode' : 'app'}>
    <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
    <Swiper1 data={data.movie} type="movie"/>
    <Notice/>
    <div className='sortingwrap'>
    <Sorting/>
    <Flowlist data={data.top_rated}/>
    
    </div>
    <Scrolltopbt/>
    <Footer/>
    </div>
  )
}

export default Main