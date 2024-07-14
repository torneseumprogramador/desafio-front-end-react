import Sidebar from "../../componentes/Sidebar";
import Nav from "../../componentes/Nav";
import Footer from "../../componentes/Footer";
import { Link, useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import ProdutoServico from "../../servicos/produtoServico";
import Form from "./Form";
import { useNavigate } from 'react-router-dom';
import Produto from "../../models/produto";

function AlterarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    carregarProduto(Number(id));
  }, []);

  const carregarProduto = async (id: number) => {
    try {
      let produtoApi = await ProdutoServico.buscarPorId(id);
      setProduto(produtoApi);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    produto: Produto,
    setErro: React.Dispatch<React.SetStateAction<string>>
  ) => {
    event.preventDefault();

    try {
      await ProdutoServico.salvar(produto);
      window.alert("Alterado com sucesso!")
      navigate('/produtos');
    } catch (e: unknown) {
      if (e instanceof Error) {
        setErro(e.message);
      } else {
        setErro('Ocorreu um erro desconhecido.');
      }
    }
  };

  return (
    <div id="wrapper">
      <Sidebar menuAtivo="produtos" />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Nav />
          <div className="container-fluid">
            <div className="card shadow mb-4">
              <div className="card-header py-3 row">
                <div className="col-11">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Novo produtos
                  </h6>
                </div>
                <div className="col-1">
                  <Link className="btn btn-default" to="/produtos">Voltar</Link>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div
                    id="dataTable_wrapper"
                    className="dataTables_wrapper dt-bootstrap4"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        {produto && <Form produto={produto} handleSubmit={handleSubmit} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AlterarProduto;
