import React, { useState, useEffect, useReducer } from 'react';

const useApplicationData = () => {
  const [likedPhotoArray, setLikedPhotoArray] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [photoData, setPhotos] = useState([]);
  const [topicData, setTopics] = useState([]);

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


  return {
    photoData,
    topicData,
    likedPhotoArray,
    displayModal,
    modalData,
    onClickLikes,
    onClickModal,
    setDisplayModal,
    onLoadTopic
  };
};

export default useApplicationData;
