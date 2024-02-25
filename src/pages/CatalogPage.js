import { CarsCard } from 'components/CarsCard/CarsCard';
import React, { useEffect, useState } from 'react';
import { selectAdverts } from '../redux/cars/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../redux/cars/operations';
import styled from 'styled-components';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { CarFilterForm } from '../components/SearchBar/CarsFilterForm/CarsFilterForm.jsx';

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 274px);
  gap: 50px 29px;
  margin: 0 auto;
  padding-top: 70px;
  margin-bottom: 100px;
`;

const BtnLoadMore = styled.button`
  display: flex;
  text-align: center;
  width: 100px;
  height: 24px;
  margin: 0 auto;
  background: transparent;
  color: ${p => p.theme.colors.main};
  font-size: 16px;
  line-height: 1.2;
  border-color: transparent;
  border-bottom: 1px solid ${p => p.theme.colors.main};

  &:hover,
  :focus {
    border-radius: ${p => p.theme.radius.m};
    border-color: ${p => p.theme.colors.main};
  }
`;
const GoBackBtn = styled.button`
  background: transparent;
  border: transparent;
`;
const GoBackIcon = styled(HiArrowLongLeft)`
  color: ${p => p.theme.colors.main};
  width: 50px;

  &:hover,
  :focus {
    color: ${p => p.theme.colors.acent};
  }
`;
export default function CatalogPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const adverts = useSelector(selectAdverts);

  const loadMoreAdverts = () => {
    dispatch(fetchAdverts({ page: currentPage + 1, limit: 12 }));
    setCurrentPage(prevPage => prevPage + 1);
  };

  const toGoBack = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  useEffect(() => {
    dispatch(fetchAdverts({ page: currentPage, limit: 12 }));
  }, [dispatch, currentPage]);

  return (
    <div>
      {currentPage > 1 && (
        <GoBackBtn type="button" onClick={toGoBack}>
          <GoBackIcon />
        </GoBackBtn>
      )}

      <CarFilterForm />
      <ListContainer>
        {adverts.map(advert => (
          <li key={advert.id}>
            <CarsCard advert={advert} />
          </li>
        ))}
      </ListContainer>

      {adverts.length > 0 && (
        <BtnLoadMore type="button" onClick={loadMoreAdverts}>
          Load more
        </BtnLoadMore>
      )}
    </div>
  );
}
