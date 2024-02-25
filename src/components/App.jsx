import { Route, Routes } from 'react-router-dom';
import { Header, Link } from './Header/Header.styled';
import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritesPage';
import { useState, useEffect} from 'react';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)

  }, [])
  return (
    <>
          <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorite</Link>
        </nav>
      </Header>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      {loading && <Loader/>}
    </>
  );
};
