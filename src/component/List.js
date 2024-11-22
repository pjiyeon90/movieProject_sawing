//List.js
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import '../css/sawing.scss'
import { getDetail } from '../api/api.js';
import Popup from './Popup.js';


const List = ({title,data,type}) => {
  let [list,setList] = useState([]);
  let [detail,setDetail] = useState();
  let [id,setId] = useState();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  async function pop(id){    
    let res = await getDetail(`${type}/${id}`);
    setDetail(res.data)
    setIsOpen(true);
    setId(id);
  }

  function dataGet(){
    let original = 'https://image.tmdb.org/t/p/original';
    
    setList( data.map((obj)=>
        <div key={obj.id} onClick={()=>pop(obj.id)} >
          <img src={original + obj.backdrop_path}  />
          <div className='paragraph'>
            {obj.name}{obj.title}<span>{obj.overview}</span>
            <button>More</button>
          </div>
        </div>
      )
    )
  }
 useEffect(()=>{
    dataGet();    
  },[data])

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
        <h2>#{title}</h2>
        <button>더보기</button>
        </div>
        <div className='listimg'>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}>
          {list}
        </Carousel>

        {
          detail && <Popup type={type} id={id} detail={detail} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
        }


        </div>
      </div>
  </div>
  </article>
  )
}

export default List