//List 2.js
import React, { useEffect, useState } from 'react'
import { onClick } from '../api/api';

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import '../css/sawing.scss'

const List2 = () => {
    let [list,setList] = useState([]);
    async function dataGet(){
      let res = await onClick() ;
      let original = 'https://image.tmdb.org/t/p/original';
      
      setList( res.map((obj)=>
          <div key={obj.id}><img src={original + obj.backdrop_path}/></div>
           )
         )
       }
   useEffect(()=>{
      dataGet();    
    },[])
  
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4, 
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,  
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,  
      }
    };
  
    return (
    <article>
    <div className='listwrap'>
      <div className='listitem'>
        <div className='listrow'>
        <h2>#인기있는 영화</h2>
        <button>더보기</button>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          <div className='listimg'>
          {list}
          </div>
        </Carousel>
      </div>
  </div>
  </article>
  )
}

export default List2