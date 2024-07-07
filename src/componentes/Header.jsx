import logo from '../assets/imagens/logo.webp';
import Nav from './Nav';

function Header({menuAtivo = "home"}) {
  return (
    <header className="col-12 row">
      <div className="col-1">
        <img src={logo} alt='Logo do projeto espacial' />
      </div>
      <Nav menuAtivo={menuAtivo}/>
    </header>
  );
}

export default Header;
