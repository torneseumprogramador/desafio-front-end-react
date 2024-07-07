import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function Login() {
  return (
    <div className="row">
      <Header menuAtivo='login'/>
      <main className="col-12 row">
        <section className="col-12 col-md-8">
          conteudo login
        </section>
        <aside  className="col-12 col-md-4">
          itens lateral
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
