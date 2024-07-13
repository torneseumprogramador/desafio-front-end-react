import Sidebar from "../../componentes/Sidebar";
import Nav from "../../componentes/Nav";
import Footer from "../../componentes/Footer";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import ProdutoServico from "../../services/produtoService";
import { useNavigate } from 'react-router-dom';


function NovoProduto() {
  const navigate = useNavigate();

  const [erro, setErro] = useState('');

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidadeEstoque, setQuantidadeEstoque] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const productData = {
      nome,
      preco,
      descricao,
      quantidade_estoque: quantidadeEstoque
    };

    try{
      await ProdutoServico.salvar(productData);
      navigate('/produtos');
    }
    catch(e){
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
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} className="form-control" id="nome" placeholder="Digite o nome" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="preco">Preço</label>
                            <input type="number" required value={preco} onChange={(e) => setPreco(e.target.value)} className="form-control" id="preco" placeholder="Digite o preço" step="0.01" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea className="form-control" value={descricao} onChange={(e) => setDescricao(e.target.value)} id="descricao" placeholder="Digite a descrição"></textarea>
                          </div>
                          <div className="form-group">
                            <label htmlFor="quantidade_estoque">Quantidade em Estoque</label>
                            <input type="number" required className="form-control" value={quantidadeEstoque} onChange={(e) => setQuantidadeEstoque(e.target.value)} id="quantidade_estoque" placeholder="Digite a quantidade em estoque" />
                          </div>
                          {erro && <div className="alert alert-danger">{erro}</div>}
                          <button type="submit" className="btn btn-primary">Salvar</button>
                        </form>
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
