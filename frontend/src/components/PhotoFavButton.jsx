import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  //console.log("photoFavbutton", props);

  // const [isFav, setIsFav] = useState(props.liked);

  const onClickHandler = function() {
    //  console.log("here", isFav);
    props.onClickLikes(!props.liked, props.photoId);
    // setIsFav(!isFav);
  };

  return (

    <div className='photo-list--fav-icon photo-list--fav-icon-svg' onClick={onClickHandler}>
      <FavIcon fill={props.liked ? '#C80000' : '#EEEEEE'} />
    </div>

  );
}

export default PhotoFavButton;