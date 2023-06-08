import React from 'react';
import useApplicationData from './hooks/useApplicationData';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

//state logic from useApplicationData
const App = () => {
  const { photoData,
    topicData,
    likedPhotoArray,
    displayModal,
    modalData,
    onClickLikes,
    onClickModal,
    setDisplayModal,
    onLoadTopic } = useApplicationData();


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

