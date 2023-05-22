import React, { useReducer, useState } from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className='home-route'>
      <TopNavigationBar topicData={props.topicData}
        likedPhotoArray={props.likedPhotoArray}
        onLoadTopic={props.onLoadTopic} />

      <PhotoList photoData={props.photoData}
        onClickLikes={props.onClickLikes}
        onClickModal={props.onClickModal}
        likedPhotoArray={props.likedPhotoArray}
        onLoadTopic={props.onLoadTopic} />
    </div>
  );

};



export default HomeRoute;