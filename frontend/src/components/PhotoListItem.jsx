
import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

//component to render single photo item
const PhotoListItem = (props) => {
  //console.log("i am photo", props.photo);
  const { photo, onClickLikes, liked, onClickModal } = props;

  return (
    <div className='photo-list--item' >
      <PhotoFavButton photoId={photo.id} onClickLikes={onClickLikes} liked={liked} />
      <img className='photo-list--image' src={photo.urls.regular} onClick={() => onClickModal(photo)} />
      <div className='photo-list--user-details photo-list--user-info'>
        <h3>{photo.user.name}</h3>
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