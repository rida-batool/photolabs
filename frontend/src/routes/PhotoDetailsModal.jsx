import React from 'react';

import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {

  const { likedPhotoArray, modalData, onClose, onClickLikes, photoData, onClickModal } = props;

  //liked variable to pass in likes information from homeroute
  const liked = likedPhotoArray.includes(modalData.id);

  return (
    <div className='photo-details-modal'>

      <button className='photo-details-modal--close-button' onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className='photo-details-modal--images' key={modalData.id}>
        <PhotoFavButton photoId={modalData.id} onClickLikes={onClickLikes} liked={liked} />
        <img className='photo-details-modal--image' src={modalData.urls.regular} />
        <h2>{modalData.user.name}</h2>
        <hr className='photo-details-modal-line' />

        <header className='photo-details-modal--header'>Similar Photos</header>
        <PhotoList photoData={photoData}
          onClickLikes={onClickLikes}
          likedPhotoArray={likedPhotoArray}
          onClickModal={onClickModal}
        />
      </div>

    </div>
  );

};

export default PhotoDetailsModal;