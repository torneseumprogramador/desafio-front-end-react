import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function Cadastro() {
  return (
    <div className="row">
      <Header menuAtivo='cadastro'/>
      <main className="col-12 row">
        <section className="col-12 col-md-8">
          conteudo Cadastro
        </section>
        <aside  className="col-12 col-md-4">
          itens lateral
        </aside>
      </main>
      <Footer/>
    </div>
  );
}

export default Cadastro;
