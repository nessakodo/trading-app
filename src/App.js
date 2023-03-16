import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CryptoList from './components/CryptoList';
import CryptoDetails from './components/CryptoDetails';
import Watchlist from './components/Watchlist';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<CryptoList />} />
        <Route path="/crypto/:id" element={<CryptoDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
