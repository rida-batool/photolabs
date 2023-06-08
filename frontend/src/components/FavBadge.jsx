import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = ({ likedPhotoArray }) => {

  return (
    <div className='fav-badge'>
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={likedPhotoArray.length > 0} />
    </div>
  );
};

export default FavBadge;