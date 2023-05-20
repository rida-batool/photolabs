
import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props) => {
  //console.log("i am photoListItem:", props.id);
  return (
    <div className='photo-list--item' >
      <PhotoFavButton photoId={props.id} onClickLikes={props.onClickLikes} liked={props.liked} />
      <img className='photo-list--image' src={props.urls.raw} onClick={() => props.onClickModal(props)} />
    </div>
  );
};

// PhotoListItem.defaultProps = {
//   username: 'Jacob',
//   imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//   id: 1,
//   hideUserName: false,
// };

export default PhotoListItem;