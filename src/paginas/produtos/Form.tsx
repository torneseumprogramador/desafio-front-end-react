import React, { useState, useEffect } from 'react';
import Produto from "../../models/produto";

interface FormProps {
  produto: Produto;
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    produto: Produto,
    setErro: React.Dispatch<React.SetStateAction<string>>
  ) => Promise<void>;
}

const Form: React.FC<FormProps> = ({ produto, handleSubmit }) => {
  const [erro, setErro] = useState('');

  const [nome, setNome] = useState<string>(produto?.nome || '');
  const [preco, setPreco] = useState<number>(produto?.preco || 0);
  const [descricao, setDescricao] = useState<string>(produto?.descricao || '');
  const [quantidadeEstoque, setQuantidadeEstoque] = useState<number>(produto?.quantidade_estoque || 0);

  useEffect(() => {
    setNome(produto?.nome || '');
    setPreco(produto?.preco || 0);
    setDescricao(produto?.descricao || '');
    setQuantidadeEstoque(produto?.quantidade_estoque || 0);
  }, [produto]);

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    let produtoSubmit: Produto = {
      id: produto?.id,
      nome,
      preco,
      descricao,
      quantidade_estoque: quantidadeEstoque
    } as Produto

    handleSubmit(event, produtoSubmit, setErro);
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
          onChange={(e) => setPreco(Number(e.target.value))}
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
          onChange={(e) => setQuantidadeEstoque(Number(e.target.value))}
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
