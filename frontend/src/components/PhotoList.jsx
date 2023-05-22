import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {

  const photo = props.photoData.map((photo) => {
    const liked = props.likedPhotoArray.includes(photo.id);
    return <PhotoListItem key={photo.id} {...photo} photo={photo} liked={liked}
      onClickLikes={props.onClickLikes}
      onClickModal={props.onClickModal}
      onLoadTopic={props.onLoadTopic} />;
  });

  return (
    <ul className="photo-list">
      {photo}
    </ul>
  );

};


export default PhotoList;