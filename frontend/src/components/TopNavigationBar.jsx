import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  const { topicData, onLoadTopic, likedPhotoArray } = props;
  return (
    <div className="top-nav-bar">
      <h1 className="top-nav-bar--logo">PhotoLabs</h1>
      <TopicList topicData={topicData} onLoadTopic={onLoadTopic} />
      <FavBadge likedPhotoArray={likedPhotoArray} />
    </div>
  );
};

export default TopNavigation;