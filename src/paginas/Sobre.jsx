import Sidebar from '../componentes/Sidebar';
import Nav from '../componentes/Nav';
import Footer from '../componentes/Footer';

function Sobre() {
  return (
    <div id="wrapper">
      <Sidebar menuAtivo='sobre'/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Nav />
          <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Sobre</h6>
                </div>
                <div className="card-body">
                    <p>
                      No entanto, não podemos esquecer que a contínua expansão de nossa atividade garante a contribuição de um grupo importante na determinação das condições inegavelmente apropriadas.
                    </p>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Sobre;
