import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import BibleReader from './pages/BibleReader';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <AuthProvider>
        <FavoritesProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bible" element={<BibleReader />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute>
                  <Favorites />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </FavoritesProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;