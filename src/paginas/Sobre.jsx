import Header from '../componentes/Header';
import Footer from '../componentes/Footer';

function Sobre() {
  return (
    <div className="row">
      <Header menuAtivo='sobre'/>
      <main className="col-12 row">
        <section className="col-12 col-md-8">
          conteudo Sobre
        </section>
        <aside  className="col-12 col-md-4">
          itens lateral
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default Sobre;
