import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const [isFav, setIsFav] = useState(false);

  const onClickHandler = function() {
    setIsFav(!isFav);
    props.onClickLikes(!isFav);
  };

  return (

    <div className='photo-list--fav-icon photo-list--fav-icon-svg' onClick={onClickHandler}>
      <FavIcon fill={isFav ? '#C80000' : '#EEEEEE'} />
    </div>

  );
}

export default PhotoFavButton;