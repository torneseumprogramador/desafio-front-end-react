import Sidebar from "../../componentes/Sidebar";
import Nav from "../../componentes/Nav";
import Footer from "../../componentes/Footer";
import { Link, useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import ProdutoServico from "../../services/produtoService";
import Form from "./Form";
import { useNavigate } from 'react-router-dom';

function AlterarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [produto, setProduto] = useState(null);

  useEffect(() => {
    carregarProduto(id);
  }, []);

  const carregarProduto = async (id) => {
    try {
      let produto = await ProdutoServico.buscarPorId(id);
      setProduto(produto);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  const handleSubmit = async (event, produto, setErro) => {
    event.preventDefault();
    const productData = {
      id: produto?.id,
      nome: produto?.nome,
      preco: produto?.preco,
      descricao: produto?.descricao,
      quantidade_estoque: produto?.quantidadeEstoque,
    };

    try {
      await ProdutoServico.salvar(productData);
      window.alert("Alterado com sucesso!")
      navigate('/produtos');
    } catch (e) {
      setErro(e.message);
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
                       { produto && <Form produto={produto} handleSubmit={handleSubmit} /> }
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
