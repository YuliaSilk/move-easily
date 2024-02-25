import Modal from 'react-modal';
import {
  AdvTitle,
  DescriptionContainer,
  AdvertImg,
  CLoseBtn,
  ModalWrapper,
  AdvSubDescr,
  IconClose,
  Description,
  AdvSubTitle,
  Btn,
  Condition,
  AdvSubDescrContainer,
  DescriptionList,
  Overlay,
} from './AdvertDetailsModal.styled';

Modal.setAppElement('#root');

export const AdvertDetailsModal = ({ advert, closeModal }) => {
  const {
    img,
    model,
    make,
    year,
    id,
    type,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    city,
    country,
    mileage,
    rentalConditions,
    rentalPrice,
  } = advert;

  const rentalConditionsArray = rentalConditions.split(/\n/);
  const rentalCond = rentalConditionsArray.filter(
    condition => condition.trim() !== ''
  );

  const formatNumberWithSpan = number => {
    return (
      <span className="highlight">
        {typeof number === 'number' ? number.toLocaleString() : number}
      </span>
    );
  };

  return (
    <Overlay>
      <ModalWrapper className="custom-modal">
        <CLoseBtn type="button" onClick={closeModal}>
          <IconClose />
        </CLoseBtn>
        <AdvertImg src={img} alt={model}></AdvertImg>
        <AdvTitle>
          {make} <span>{model}</span>, {year}
        </AdvTitle>
        <AdvSubDescrContainer>
          <AdvSubDescr>
            {city} | {country} | id: {id} | Year: {year} | Type: {type} | Fuel
            Consumption: {fuelConsumption} | Engine Size: {engineSize}
          </AdvSubDescr>
        </AdvSubDescrContainer>
        <Description>{description}</Description>
        <AdvSubTitle>Accessories and functionalities:</AdvSubTitle>
        <AdvSubDescr>{accessories.join(' | ')}</AdvSubDescr>
        <AdvSubTitle>Rental Conditions:</AdvSubTitle>
        <DescriptionContainer>
          <DescriptionList>
            {rentalCond.map((condition, index) => {
              if (condition.startsWith('Minimum age')) {
                const age = parseInt(condition.split(':')[1]);
                return (
                  <Condition key={index}>
                    Minimum age: <span className="highlight">{age}</span>
                  </Condition>
                );
              }
              return <Condition key={index}>{condition}</Condition>;
            })}
            <Condition>Mileage: {formatNumberWithSpan(mileage)}</Condition>
            <Condition>Price: {formatNumberWithSpan(rentalPrice)}</Condition>
          </DescriptionList>
        </DescriptionContainer>
        <Btn className="link" as="a" href="tel:+380730000000" type="button">
          Rental car
        </Btn>
      </ModalWrapper>
    </Overlay>
  );
};
