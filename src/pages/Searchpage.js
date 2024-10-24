import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/search.scss'

const SearchPage = () => {
  const location = useLocation();
  const { results } = location.state || { results: null }; // state에서 결과 가져오기

  return (
    <div className='searchwrap'>
      <h1>검색 결과 <span>20건</span></h1>
      {results ? (
        <ul>
          {results.results.map(movie => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default SearchPage;