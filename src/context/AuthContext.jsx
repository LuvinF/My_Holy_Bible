import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Sign up
  const signup = async (email, password) => {
    try {
      setError(null);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Logout
  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};