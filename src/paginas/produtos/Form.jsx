import React, { useState, useEffect } from 'react';

function Form({ produto, handleSubmit }) {
  const [erro, setErro] = useState('');

  const [nome, setNome] = useState(produto?.nome || '');
  const [preco, setPreco] = useState(produto?.preco || 0);
  const [descricao, setDescricao] = useState(produto?.descricao || '');
  const [quantidadeEstoque, setQuantidadeEstoque] = useState(produto?.quantidade_estoque || 0);

  useEffect(() => {
    if (produto) {
      setNome(produto.nome || '');
      setPreco(produto.preco || 0);
      setDescricao(produto.descricao || '');
      setQuantidadeEstoque(produto.quantidade_estoque || 0);
    }
  }, [produto]);

  const handleSubmitForm = async (event) => {
    handleSubmit(event, {
      id: produto?.id,
      nome,
      preco,
      descricao,
      quantidadeEstoque
    }, setErro);
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="form-group">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="form-control"
          id="nome"
          placeholder="Digite o nome"
        />
      </div>
      <div className="form-group">
        <label htmlFor="preco">Preço</label>
        <input
          type="number"
          required
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="form-control"
          id="preco"
          placeholder="Digite o preço"
          step="0.01"
        />
      </div>
      <div className="form-group">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          className="form-control"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          id="descricao"
          placeholder="Digite a descrição"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="quantidade_estoque">Quantidade em Estoque</label>
        <input
          type="number"
          required
          className="form-control"
          value={quantidadeEstoque}
          onChange={(e) => setQuantidadeEstoque(e.target.value)}
          id="quantidade_estoque"
          placeholder="Digite a quantidade em estoque"
        />
      </div>
      {erro && <div className="alert alert-danger">{erro}</div>}
      <button type="submit" className="btn btn-primary">Salvar</button>
    </form>
  );
}

export default Form;
