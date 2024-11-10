//Flowlist.js
import React, { useEffect, useState } from 'react'
import { onClick } from '../api/api';

const Flowlist = ({data}) => {
    let [list,setList] = useState([]);

    async function dataGet(){
      let original = 'https://image.tmdb.org/t/p/original';

      setList( data.map((obj,k)=>{
        if(k<10){
            return  <li key={obj.id}><img src={original + obj.backdrop_path}/></li>
        }
      })
      )
    }
    useEffect(()=>{
      dataGet();    
    },[data])

  return (
    <div className='listitem'>
    <h2 className='h2center'>#시청률 TOP20</h2>
    <div className='flow-box'>
    <ul className='first-row'>
       {list}{list}
    </ul>
    <ul className='second-row'>
       {list}{list}
    </ul>
    </div>
    </div>
  )
}

export default Flowlist