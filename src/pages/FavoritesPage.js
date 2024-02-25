import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CarsCard } from 'components/CarsCard/CarsCard';

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 274px);
  gap: 50px 29px;
  margin: 0 auto;
  padding-top: 70px;
`;

export default function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      {favorites.length > 0 ? (
        <ListContainer>
          {favorites.map(favorite => (
            <li key={favorite.id}>
              <CarsCard advert={favorite} />
            </li>
          ))}
        </ListContainer>
      ) : (
        <p>No favorites yet. Add some from the Cars page.</p>
      )}
    </div>
  );
}
