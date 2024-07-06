import './assets/css/style.scss';
import logo from './assets/imagens/logo.webp';

function App() {
  return (
    <div className="row">
      <header className="col-12 row">
        <div className="col-1">
          <img src={logo} alt='Logo do projeto espacial' />
        </div>
        <nav className="col-11">
          <ul>
            <li>Home</li>
            <li>Cadastro</li>
            <li>Sobre</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      <main className="col-12 row">
        <section className="col-12 col-md-8">
          conteudo
        </section>
        <aside  className="col-12 col-md-4">
          itens lateral
        </aside>
      </main>
      <footer className="col-12">
      footer
      </footer>
    </div>
  );
}

export default App;
