import React from 'react';

import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {

  const topic = props.topicData.map((topic) => {
    //console.log(topic);
    return <TopicListItem key={topic.id} {...topic} />;
  });

  return (

    <div className="top-nav-bar--topic-list">
      {topic}
    </div>
  );

};

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: 'Nature',
      link: 'link placeholder'
    },
    {
      id: 2,
      label: 'Food',
      link: 'link placeholder'
    },
    {
      id: 3,
      label: 'People',
      link: 'link placeholder'
    },
  ]
};
export default TopicList;