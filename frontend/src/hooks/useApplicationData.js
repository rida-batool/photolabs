import React, { useState } from 'react';

const useApplicationData = () => {
  const [likedPhotoArray, setLikedPhotoArray] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState({});

  //updateFavPhotoIds
  const onClickLikes = function(status, photoId) {
    if (status) {
      setLikedPhotoArray([...likedPhotoArray, photoId]);
    } else {
      setLikedPhotoArray(likedPhotoArray.filter(id => id !== photoId));
    }
  };

  //onPhotoCLick
  const onClickModal = function(photo) {
    //console.log(photoData);
    if (displayModal) return;
    //const selectedPhotoData = photoData.find((photo) => photo.id === photoId.id);
    setModalData(photo);
    setDisplayModal(!displayModal);
    //setting details incoming from PhotoListItem to modalData
  };



  return {
    likedPhotoArray,
    displayModal,
    modalData,
    onClickLikes,
    onClickModal,
    setDisplayModal
  };
};

export default useApplicationData;
