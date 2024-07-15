import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LoginService from '../services/loginService';

const ValidarRotasPrivadas = () => {
  const auth = LoginService.tokenValido();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ValidarRotasPrivadas;
