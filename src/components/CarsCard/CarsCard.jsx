import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {
  CarImg,
  CardContainer,
  ImgContainer,
  CarTitle,
  CarDescription,
  DescriptionContainer,
  LearnMoreBtn,
  TitleContainer,
  FavBtn,
  HeartSvg,
} from './CarsCard.styled';
import { AdvertDetailsModal } from 'components/Modal/AdvertDetailsModal';

export const CarsCard = ({ advert: initialAdvert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [advert, setAdvert] = useState(initialAdvert);
  const [isFavorite, setIsFavorite] = useState(false);

  // add an advert to Favorite

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.id === advert.id));
  }, [advert.id]);

  const onFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const isAlreadyFavorite = favorites.some(fav => fav.id === advert.id);

    setIsFavorite(!isAlreadyFavorite);

    if (!isAlreadyFavorite) {
      localStorage.setItem('favorites', JSON.stringify([...favorites, advert]));
    } else {
      const updatedFavorites = favorites.filter(fav => fav.id !== advert.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  // open/close modal

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateAdvert = newAdvert => {
    setAdvert(newAdvert);
  };

  return (
    <CardContainer>
      <ImgContainer>
        <FavBtn type="button" onClick={onFavoriteToggle}>
          <HeartSvg className={isFavorite ? 'favorite' : ''} />
        </FavBtn>
        <CarImg src={advert.img} alt={advert.model} />
      </ImgContainer>
      <TitleContainer>
        <div>
          <CarTitle>
            {advert.make} <span>{advert.model}</span>, {advert.year}
          </CarTitle>
        </div>
        <div>
          <CarTitle>{advert.rentalPrice}</CarTitle>
        </div>
      </TitleContainer>
      <DescriptionContainer>
        <CarDescription>
          {' '}
          {advert.city} | {advert.country} | {advert.rentalCompany} |{' '}
          {advert.carClass} | {advert.type} | {advert.model} | {advert.id} |{' '}
          {advert.functionalities}{' '}
        </CarDescription>
      </DescriptionContainer>
      <LearnMoreBtn type="button" onClick={openModal}>
        Learn more
      </LearnMoreBtn>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <AdvertDetailsModal
          advert={advert}
          updateAdvert={updateAdvert}
          closeModal={closeModal}
        />
      </Modal>
    </CardContainer>
  );
};
