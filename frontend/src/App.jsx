import React, { useEffect, useState } from 'react';
import useApplicationData from './hooks/useApplicationData';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

//state logic from useApplicationData
const App = () => {
  const { likedPhotoArray,
    displayModal,
    modalData,
    onClickLikes,
    onClickModal,
    setDisplayModal } = useApplicationData();

  const [photoData, setPhotos] = useState([]);
  const [topicData, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const photos = fetch('/api/photos');
      const topics = fetch('/api/topics');
      const response = await Promise.all([topics, photos]);
      const topicsResponse = await response[0].json();
      const photosResponse = await response[1].json();
      setTopics(topicsResponse);
      setPhotos(photosResponse);
    };
    fetchData();
  }, []);

  const onLoadTopic = async (id) => {
    const response = await fetch(`/api/topics/photos/${id}`);
    const data = await response.json();
    setPhotos(data);
  };


  //rendering Homeroute and Modal route
  return (
    < div className="App" >
      <HomeRoute
        topicData={topicData}
        photoData={photoData}
        onClickModal={onClickModal}
        onClickLikes={onClickLikes}
        likedPhotoArray={likedPhotoArray}
        onLoadTopic={onLoadTopic} />
      {displayModal &&
        (<PhotoDetailsModal
          photoData={photoData}
          onClose={() => setDisplayModal(false)}
          modalData={modalData}
          onClickModal={onClickModal}
          onClickLikes={onClickLikes}
          likedPhotoArray={likedPhotoArray}
        />
        )}
    </div >
  );
};

export default App;


// I am keeping this to reference later
  // const [likedPhotoArray, setLikedPhotoArray] = useState([]);
  // const [displayModal, setDisplayModal] = useState(false);
  // const [modalData, setModalData] = useState({});

  // //updateFavPhotoIds
  // const onClickLikes = function(status, photoId) {
  //   if (status) {
  //     setLikedPhotoArray([...likedPhotoArray, photoId]);
  //   } else {
  //     setLikedPhotoArray(likedPhotoArray.filter(id => id !== photoId));
  //   }
  // };

  // //onPhotoCLick
  // const onClickModal = function(photo) {
  //   if (displayModal) return;
  //   const selectedPhotoData = photoData.find((photo) => photo.id === photo.id);
  //   setDisplayModal(!displayModal);
  //   //setting details incoming from PhotoListItem to modalData
  //   setModalData(selectedPhotoData);
  // };

