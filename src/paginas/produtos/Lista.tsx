import Sidebar from "../../componentes/Sidebar";
import Nav from "../../componentes/Nav";
import Footer from "../../componentes/Footer";
import ProdutoServico from "../../servicos/produtoServico";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Produto from "../../models/produto";
import formatDate from '../../helpers/dateHelper';

const ListaProdutos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      let produtos:Produto[] = await ProdutoServico.todos();
      setProdutos(produtos);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  const excluirProduto = async (id: number) => {
    if(window.confirm("Confirma?")){
      try {
        await ProdutoServico.excluirPorId(id);
        carregarProdutos();
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    }
  }

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
                            <th></th>
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
                            <th></th>
                          </tr>
                        </tfoot>
                          <tbody>
                            {produtos.map((produto: Produto, index: number) => (
                              <tr key={index}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>R${produto.preco}</td>
                                <td>{produto.descricao}</td>
                                <td>{formatDate(produto.data_criacao)}</td>
                                <td>{formatDate(produto.data_modificacao)}</td>
                                <td>{produto.quantidade_estoque}</td>
                                <td style={{width: "200px"}}>
                                  <Link className="btn btn-warning" to={`/produtos/${produto.id}/alterar`} style={{marginRight: "10px"}}>Alterar</Link>
                                  <button className="btn btn-danger" onClick={() => { excluirProduto(produto.id) }}>Excluir</button>
                                </td>
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
