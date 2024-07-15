import rocketImg from '../assets/imagens/undraw_rocket.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginService from '../services/loginService';

function Sidebar({menuAtivo = "home"}) {
  const navigate = useNavigate();

  const handleSair = (event) => {
    event.preventDefault();
    LoginService.clearLocalStorage();
    navigate('/login');
  }
  
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Desafio</div>
        </Link>

        <hr className="sidebar-divider my-0"/>

        <li className={ menuAtivo === "home"? "nav-item active" : "nav-item" }>
            <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Home</span>
            </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
            Outros links
        </div>

        <li className={ menuAtivo !== "home"? "nav-item active" : "nav-item" } >
            <a className={ menuAtivo !== "home"? "nav-link" : "nav-link collapsed" } href="#" 
                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                aria-expanded={menuAtivo}
                aria-controls="collapseTwo"
                data-toggle="collapse"
            >
                <i className="fas fa-fw fa-folder"></i>
                <span>Paginas</span>
            </a>
            <div id="collapseTwo" className={ menuAtivo !== "home"? "collapse show" : "collapse" } aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Outros:</h6>
                    <ul>
                        <li>
                            <Link className={ menuAtivo === "produtos"? "collapse-item active" : "collapse-item" } to="/produtos">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Produtos</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={ menuAtivo === "sobre"? "collapse-item active" : "collapse-item" } to="/sobre">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Sobre</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" onClick={handleSair} className={"collapse-item"}>
                                <i className="fas fa-fw fa-cog"></i>
                                <span>Sair</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>

        <hr className="sidebar-divider d-none d-md-block"/>

        <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src={rocketImg} alt="..." />
            <p className="text-center mb-2"><strong>Desafio de Front-end</strong> - Layout adaptado com os alunos do desafio de front-end</p>
        </div>
    </ul>
  );
}

export default Sidebar;
