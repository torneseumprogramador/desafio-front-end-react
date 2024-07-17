import Footer from '../componentes/Footer';
import React from 'react';

const NaoEncontrado: React.FC = () => {
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content" className='login'>
          <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Página não encontrada !</h6>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default NaoEncontrado;
