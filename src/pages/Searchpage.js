import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/search.scss'

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 훅을 사용해 네비게이션 기능 추가

  const { results } = location.state || { results: [] }; // 빈 배열로 초기화
  // 결과물이 없을 경우를 대비해서
  const resultCount = results && results.results ? results.results.length : 0;

  const [visibleCount, setVisibleCount] = useState(10); // 초기 표시 개수 설정 (10개)

  // 홈으로 이동하는 함수
  const goHome = () => {
    navigate('/'); // 홈 페이지로 이동
  };

  // poster_path가 없는 영화들 필터링
  const filteredMovies = results ? results.results.filter(movie => movie.poster_path) : [];

  // "더보기" 버튼 클릭 시 추가로 5개씩 보여주기
  const showMoreMovies = () => {
    setVisibleCount(prevCount => prevCount + 5); // 이전 개수에서 5개 추가
  };

  return (
    <div className='searchwrap'>

      <h1><button onClick={goHome}></button>검색 결과<span>{resultCount}건</span></h1>
      {results && resultCount > 0 ? (
        <ul>
          {filteredMovies.slice(0, visibleCount).map(movie => (
            <li key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path} || 'default_image.jpg'}`} alt={movie.title || 'No Title'} />
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
       {visibleCount < resultCount && (
      <button onClick={showMoreMovies} className='morebtn'>더보기</button>
    )}
    </div>
    
  );
}

export default SearchPage;