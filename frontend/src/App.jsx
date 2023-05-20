import React, { useState } from 'react';

import topicData from './mocks/topics.json';
import photoData from './mocks/photos.json';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [likes, setLikes] = useState(0);
  const [likedPhotoArray, setLikedPhotoArray] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const onClickLikes = function(status, photoId) {

    if (status) {
      setLikes(likes + 1);
      setLikedPhotoArray([...likedPhotoArray, photoId]);
    } else {
      setLikes(likes - 1);
      setLikedPhotoArray(likedPhotoArray.filter(id => id !== photoId));
    }
  };

  //onPhotoCLick
  const onClickModal = function(photoData) {
    setDisplayModal(true);
    //setting details incoming from PhotoListItem to modalData
    setModalData(photoData);
  };

  return (
    < div className="App" >
      <HomeRoute
        topicData={topicData}
        photoData={photoData}
        onClickModal={onClickModal}
        likes={likes}
        onClickLikes={onClickLikes}
        likedPhotoArray={likedPhotoArray} />
      {displayModal &&
        (<PhotoDetailsModal
          photoData={photoData}
          onClose={() => setDisplayModal(false)}
          modalData={modalData}
          onClickLikes={onClickLikes}
          likedPhotoArray={likedPhotoArray}
        />
        )}
    </div >
  );
};


export default App;