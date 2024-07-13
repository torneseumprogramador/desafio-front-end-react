import Sidebar from "../../componentes/Sidebar";
import Nav from "../../componentes/Nav";
import Footer from "../../componentes/Footer";
import ProdutoServico from "../../services/produtoService";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        let produtos = await ProdutoServico.todos();
        setProdutos(produtos);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    };

    carregarProdutos();
  }, []);

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
                    Cadastro de produtos
                  </h6>
                </div>
                <div className="col-1">
                  <Link className="btn btn-primary" to="/produtos/novo">Novo</Link>
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
                        <table className="table table-bordered dataTable">
                        <thead>
                          <tr role="row">
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Data de Criação</th>
                            <th>Data de Modificação</th>
                            <th>Quantidade em Estoque</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Data de Criação</th>
                            <th>Data de Modificação</th>
                            <th>Quantidade em Estoque</th>
                          </tr>
                        </tfoot>
                          <tbody>
                            {produtos.map((produto, index) => (
                              <tr key={index}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>R${produto.preco}</td>
                                <td>{produto.descricao}</td>
                                <td>{produto.data_criacao}</td>
                                <td>{produto.data_modificacao}</td>
                                <td>{produto.quantidade_estoque}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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

export default ListaProdutos;
