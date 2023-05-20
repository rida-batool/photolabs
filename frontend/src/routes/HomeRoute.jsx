import React, { useReducer, useState } from 'react';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (
    <div className='home-route'>
      <TopNavigationBar topicData={props.topicData} likes={props.likes} />
      <PhotoList photoData={props.photoData}
        onClickLikes={props.onClickLikes}
        onClickModal={props.onClickModal}
        likedPhotoArray={props.likedPhotoArray} />
    </div>
  );

};



export default HomeRoute;