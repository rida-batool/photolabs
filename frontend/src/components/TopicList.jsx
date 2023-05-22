import React from 'react';

import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {

  const topic = props.topicData.map((topic) => {
    return <TopicListItem key={topic.id} {...topic} onLoadTopic={props.onLoadTopic} />;
  });

  return (
    <div className="top-nav-bar--topic-list">
      {topic}
    </div>
  );

};

export default TopicList;