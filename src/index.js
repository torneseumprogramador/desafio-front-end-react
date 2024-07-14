import React from 'react';

// import './assets/scss/sb-admin-2.scss'; // mando para o sass
import './assets/css/sb-admin-2.min.css';  // mando para o css builded
import './assets/scss/desafio.scss'; // nosso scss

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import ListaProdutos from './paginas/produtos/Lista';
import NovoProduto from './paginas/produtos/Novo';
import AlterarProduto from './paginas/produtos/Alterar';
import Sobre from './paginas/Sobre';
import Login from './paginas/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/login" element={<Login />} />

      <Route path="/produtos" element={<ListaProdutos />} />
      <Route path="/produtos/novo" element={<NovoProduto />} />
      <Route path="/produtos/:id/alterar" element={<AlterarProduto />} />

    </Routes>
  </Router>
);

reportWebVitals();
