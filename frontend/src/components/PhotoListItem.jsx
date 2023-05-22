
import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

//component to render single photo item
const PhotoListItem = (props) => {
  return (
    <div className='photo-list--item' >
      <PhotoFavButton photoId={props.id} onClickLikes={props.onClickLikes} liked={props.liked} />
      <img className='photo-list--image' src={props.urls.regular} onClick={() => props.onClickModal(props.photo)} />
      <div className='photo-list--user-details photo-list--user-info'>
        <h3>{props.user.name}</h3>
      </div>
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