import api from "../ambiente/api";
import Produto from "../models/produto";

class ProdutoServico {
  static async todos(): Promise<Produto[]> {
    return (await api.get("/produtos")).data;
  }

  static async buscarPorId(id: number): Promise<Produto> {
    return (await api.get(`/produto/${id}`)).data;
  }

  static async salvar(produto: Produto) {
    if(produto.id > 0){
      await api.put(`/produto/${produto.id}`, produto)
    }
    else{
      await api.post("/produto", produto)
    }
  }

  static async excluirPorId(id: number) {
    await api.delete(`/produto/${id}`)
  }
}

export default ProdutoServico;