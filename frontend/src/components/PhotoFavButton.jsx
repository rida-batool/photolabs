import React from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { onClickLikes, liked, photoId } = props;

  const onClickHandler = function() {
    onClickLikes(!liked, photoId);
  };

  return (
    <div className='photo-list--fav-icon photo-list--fav-icon-svg' onClick={onClickHandler}>
      <FavIcon fill={liked ? '#C80000' : '#EEEEEE'} />
    </div>
  );
}

export default PhotoFavButton;