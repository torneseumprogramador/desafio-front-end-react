import React from 'react';

import './assets/scss/sb-admin-2.scss';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Cadastro from './paginas/Cadastro';
import Sobre from './paginas/Sobre';
import Login from './paginas/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

reportWebVitals();
