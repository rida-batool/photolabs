import React, { useEffect, useReducer } from 'react';

const initialState = {
  likedPhotoArray: [],
  displayModal: false,
  modalData: {},
  photoData: [],
  topicData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LIKED_PHOTO_ARRAY':
      return { ...state, likedPhotoArray: action.payload };
    case 'SET_DISPLAY_MODAL':
      return { ...state, displayModal: action.payload };
    case 'SET_MODAL_DATA':
      return { ...state, modalData: action.payload };
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { likedPhotoArray, displayModal, modalData, photoData, topicData } = state;

  //updateFavPhotoIds array
  const onClickLikes = (status, photoId) => {
    if (status) {
      dispatch({ type: 'SET_LIKED_PHOTO_ARRAY', payload: [...likedPhotoArray, photoId] });
    } else {
      dispatch({
        type: 'SET_LIKED_PHOTO_ARRAY',
        payload: likedPhotoArray.filter(id => id !== photoId),
      });
    }
  };


  //onPhotoCLick
  const onClickModal = photo => {
    if (displayModal) return;
    dispatch({ type: 'SET_MODAL_DATA', payload: photo });
    dispatch({ type: 'SET_DISPLAY_MODAL', payload: !displayModal });
  };


  const onClose = () => {
    dispatch({ type: 'SET_DISPLAY_MODAL', payload: false });
  };

  useEffect(() => {
    const fetchData = async () => {
      const photosResponse = await fetch('/api/photos').then(response => response.json());
      const topicsResponse = await fetch('/api/topics').then(response => response.json());
      dispatch({ type: 'SET_PHOTO_DATA', payload: photosResponse });
      dispatch({ type: 'SET_TOPIC_DATA', payload: topicsResponse });
    };
    fetchData();
  }, []);

  const onLoadTopic = async id => {
    const data = await fetch(`/api/topics/photos/${id}`).then(response => response.json());
    dispatch({ type: 'SET_PHOTO_DATA', payload: data });
  };


  return {
    photoData,
    topicData,
    likedPhotoArray,
    displayModal,
    modalData,
    onClickLikes,
    onClickModal,
    onClose,
    onLoadTopic
  };
};

export default useApplicationData;
