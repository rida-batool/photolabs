import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  //console.log(props.id);
  //const { id, label, link } = props;
  return (
    <div className="topic-list--item" onClick={() => { props.onLoadTopic(props.id); }}>
      <span>
        {props.title}
      </span>
    </div>
  );

};

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder'
};
export default TopicListItem;