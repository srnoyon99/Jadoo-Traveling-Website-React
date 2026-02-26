import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('favoriteHotels');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('favoriteHotels', JSON.stringify(favorites));
    }
  }, [favorites, isLoading]);

  const addFavorite = (hotel) => {
    setFavorites((prev) => {
      // Check if already exists
      const exists = prev.find((fav) => fav.id === hotel.id);
      if (exists) return prev;
      return [...prev, hotel];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  const toggleFavorite = (hotel) => {
    if (isFavorite(hotel.id)) {
      removeFavorite(hotel.id);
    } else {
      addFavorite(hotel);
    }
  };

  return {
    favorites,
    isLoading,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    clearFavorites: () => setFavorites([])
  };
};
