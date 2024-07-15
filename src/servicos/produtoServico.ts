import api from "../ambiente/api";
import Produto from "../models/produto";

class ProdutoServico {
  token: string

  constructor(token: string){
      this.token = token
  };

  async todos(): Promise<Produto[]> {
    return (await api.get("/produtos", {
        headers: {
            'Authorization': `Bearer ${this.token}`
        }
    })).data;
  }

  async buscarPorId(id: number): Promise<Produto> {
    return (await api.get(`/produto/${id}`, {
        headers: {
            'Authorization': `Bearer ${this.token}`
        }
    })).data;
  }

  async salvar(produto: Produto) {
    if(produto.id > 0){
      await api.put(`/produto/${produto.id}`, produto, {
          headers: {
              'Authorization': `Bearer ${this.token}`
          }
      })
    }
    else{
      await api.post("/produto", produto, {
          headers: {
              'Authorization': `Bearer ${this.token}`
          }
      })
    }
  }

  async excluirPorId(id: number) {
    await api.delete(`/produto/${id}`, {
        headers: {
            'Authorization': `Bearer ${this.token}`
        }
    })
  }
}

export default ProdutoServico;