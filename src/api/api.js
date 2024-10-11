//Api.js
import axios from 'axios';

let instant = axios.create({
  baseURL:'https://api.themoviedb.org/3',
  params:{
    api_key:"f89a6c1f22aca3858a4ae7aef10de967",
    language:"ko-kr",
    // with_origin_country:"KR"
  }
})

let url = {
  top_rated: '/movie/top_rated?with_origin_country=KR&with_original_language=ko',
  tv: '/discover/tv?with_genres=10764&&with_original_language=ko',
  movie: '/movie/popular',
  ani: '/discover/tv?with_genres=16',
  drama: '/discover/tv?&with_origin_country=KR&with_genres=18&air_date.gte=2024-09-01&air_date.lte=2024-09-20&language=ko',
  kids: '/discover/tv?with_genres=10762&&with_original_language=ko',
}

export async function getVdo(){
  let [top_rated,tv,movie,ani,drama,kids] = await Promise.all([
                                                instant.get(url.top_rated), 
                                                instant.get(url.tv),
                                                instant.get(url.movie),
                                                instant.get(url.ani),
                                                instant.get(url.drama),
                                                instant.get(url.kids)
                                              ])

    top_rated = top_rated.data.results.filter(obj=>obj.backdrop_path);
    tv = tv.data.results.filter(obj=>obj.backdrop_path);
    movie = movie.data.results.filter(obj=>obj.backdrop_path);
    ani = ani.data.results.filter(obj=>obj.backdrop_path);
    drama = drama.data.results.filter(obj=>obj.backdrop_path);
    kids = kids.data.results.filter(obj=>obj.backdrop_path);
  return  {top_rated,tv,movie,ani,drama,kids};
}


export async function getDetail(detailUrl){
  return await instant.get(detailUrl,{
    params:{
      append_to_response:'videos,images,casts'
    }
  })
}


export async function getDetail2(type, id){

  // relate = relate.data.results.filter(obj=>obj.backdrop_path);
  return await instant.get(`/${type}/${id}/similar`)
}

