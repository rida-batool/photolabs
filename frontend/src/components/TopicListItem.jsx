import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { onLoadTopic, title, id } = props;

  return (
    <div className="topic-list--item" onClick={() => { onLoadTopic(id); }}>
      <span>
        {title}
      </span>
    </div>
  );

};

export default TopicListItem;