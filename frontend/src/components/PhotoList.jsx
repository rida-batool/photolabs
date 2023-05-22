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

PhotoList.defaultProps = {
  photos: [
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    }
  ]
};

export default PhotoList;