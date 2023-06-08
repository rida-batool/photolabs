import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {

  const { photoData, likedPhotoArray, onClickLikes, onClickModal, onLoadTopic } = props;

  const photo = photoData.map((photo) => {
    const liked = likedPhotoArray.includes(photo.id);
    return <PhotoListItem key={photo.id} photo={photo} liked={liked}
      onClickLikes={onClickLikes}
      onClickModal={onClickModal}
      onLoadTopic={onLoadTopic} />;
  });

  return (
    <ul className="photo-list">
      {photo}
    </ul>
  );
};


export default PhotoList;