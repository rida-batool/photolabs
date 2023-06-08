import React from 'react';

import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  const { onLoadTopic, topicData } = props;

  const topics = topicData.map((topic) => {
    return <TopicListItem key={topic.id} {...topic} onLoadTopic={onLoadTopic} />;
  });

  return (
    <div className="top-nav-bar--topic-list">
      {topics}
    </div>
  );

};

export default TopicList;