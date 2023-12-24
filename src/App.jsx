import { Register } from 'pages/RegisterPage';
import './style.scss';
import { Login } from 'pages/LoginPage';
import { Home } from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

export const App = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
