//Related.js
import React, { useEffect, useState } from 'react'
import { getDetail, getDetail2 } from '../api/api.js';

const Related = ({type, id}) => {
  
  let [list,setList] = useState([]);
  // let [data,setData] = useState([]);

  useEffect(()=>{
    (async function(){
      // setData(  )
      let res = await getDetail2(type, id);
      dataGet(res.data.results);
    }())

  },[])

  function dataGet(data){
    let original = 'https://image.tmdb.org/t/p/w200';
    
    setList( data.map((obj)=>
      <li key={obj.id}>
            <figure>
              <img src={original + obj.backdrop_path}  />
              </figure>
            <figcaption>
              <div className='figrow'>
                <span>{obj.name}{obj.title}</span>
                <button>+</button>
              </div>
              <p className='moviet'>{obj.overview}</p>
            </figcaption>
      </li>
      )
    )
  }

  return (
    <div className='relatelist'>
        <ul>
        {list}
        </ul>
    </div>
  )
}

export default Related