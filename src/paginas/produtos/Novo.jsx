import Sidebar from "../../componentes/Sidebar";
import Nav from "../../componentes/Nav";
import Footer from "../../componentes/Footer";
import { Link } from 'react-router-dom';
import React from 'react';
import Form from "./Form"
import { useNavigate } from 'react-router-dom';
import ProdutoServico from "../../services/produtoService";
import LoginService from "../../services/loginService";

function NovoProduto() {
  const navigate = useNavigate();
  const produtoServico = new ProdutoServico(LoginService.getToken());

  const handleSubmit = async (event, produto, setErro) => {
    event.preventDefault();
    const productData = {
      nome: produto?.nome,
      preco: produto?.preco,
      descricao: produto?.descricao,
      quantidade_estoque: produto?.quantidadeEstoque,
    };

    try {
      await produtoServico.salvar(productData);
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
                        <Form handleSubmit={handleSubmit}/>
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

export default NovoProduto;
