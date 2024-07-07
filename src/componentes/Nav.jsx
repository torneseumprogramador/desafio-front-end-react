import { Link } from 'react-router-dom';

function Nav({menuAtivo = "home"}) {
  return (
    <nav className="col-11">
      <ul>
        <li><Link to="/" className={menuAtivo === "home" ? "ativo": ""}>Home</Link></li>
        <li><Link to="/cadastro" className={menuAtivo === "cadastro" ? "ativo": ""}>Cadastro</Link></li>
        <li><Link to="/sobre" className={menuAtivo === "sobre" ? "ativo": ""}>Sobre</Link></li>
        <li><Link to="/login" className={menuAtivo === "login" ? "ativo": ""}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
