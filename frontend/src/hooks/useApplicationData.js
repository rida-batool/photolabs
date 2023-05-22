import React, { useState, useReducer } from 'react';

const useApplicationData = () => {
  const [likedPhotoArray, setLikedPhotoArray] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState({});

  //const [state, dispatch] = useReducer(reducer, {likedPhotoArray:[]} )

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
    if (displayModal) return;
    setModalData(photo);
    setDisplayModal(!displayModal);
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
