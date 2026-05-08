import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { useAuth } from './AuthContext';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  where,
  doc,
  writeBatch,
} from 'firebase/firestore';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load favorites from Firestore
  useEffect(() => {
    if (!user) {
      setFavorites([]);
      return;
    }

    const loadFavorites = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, 'favorites'),
          where('userId', '==', user.uid)
        );
        const snapshot = await getDocs(q);
        const favs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFavorites(favs);
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, [user]);

  // Add favorite
  const addFavorite = async (book, chapter, verse, text) => {
    if (!user) return;

    try {
      const favorite = {
        userId: user.uid,
        book,
        chapter,
        verse,
        text,
        createdAt: new Date()
      };
      const docRef = await addDoc(collection(db, 'favorites'), favorite);
      setFavorites([...favorites, { id: docRef.id, ...favorite }]);
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  // Remove favorite
  const removeFavorite = async (favoriteId) => {
    try {
      await deleteDoc(doc(db, 'favorites', favoriteId));
      setFavorites(favorites.filter(f => f.id !== favoriteId));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  // Check if verse is favorited
  const isFavorited = (book, chapter, verse) => {
    return favorites.some(
      f => f.book === book && f.chapter === chapter && f.verse === verse
    );
  };

  return (
    <FavoritesContext.Provider 
      value={{ favorites, loading, addFavorite, removeFavorite, isFavorited }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
};