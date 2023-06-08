import React from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { topicData, likedPhotoArray, onLoadTopic, photoData, onClickLikes, onClickModal } = props;

  return (
    <div className='home-route'>
      <TopNavigationBar topicData={topicData}
        likedPhotoArray={likedPhotoArray}
        onLoadTopic={onLoadTopic} />

      <PhotoList photoData={photoData}
        onClickLikes={onClickLikes}
        onClickModal={onClickModal}
        likedPhotoArray={likedPhotoArray}
        onLoadTopic={onLoadTopic} />
    </div>
  );
};

export default HomeRoute;