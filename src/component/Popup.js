//Modal.js
import React from 'react';
import Modal from 'react-modal';
import Related from './Related';

const customStyles = {
    content: {
      width: '80%',
      height: '80%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


const Popup = ({detail, modalIsOpen, setIsOpen, type, id}) => {

  console.log(detail)
    let subtitle;
    function closeModal() {
      setIsOpen(false);
    }
    if(!modalIsOpen) return <></>;
  return (
    <div className='popbtn'>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className='detailpage' >
      <div className='backimg' style={{background:`url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})`}}>
      <h1 ref={(_subtitle) => (subtitle = _subtitle)}>
      {detail.name}{detail.title}
      </h1>
      <div className='buttonlist'>
        <button>재생</button>
        <button>찜하기</button>
        <button>좋아요</button>
      </div>
      </div>
      <button onClick={closeModal} className='xbtn'>닫기
      <img src='./img/xbtn_white.svg'/>
      </button>
        <div className='epiwrap'>
          <div className='detailbox'>
          <span>출연진:<i></i></span> 
          <span>장르:<i>{detail.genres.name}</i></span> 
          <span>상영 시간: <i>{detail.episode_run_time}{detail.runtime}분</i>
          </span>
        </div>
          <p>{detail.overview}</p>
          <h5>함께 보기 좋은 컨텐츠</h5>
          <Related type={type} id={id} />
        </div>
      </div>
    </Modal>
  </div>
  )
}

export default Popup