import api from "../ambiente/api";
import Produto from "../models/produto";

class ProdutoServico {
  static async todos(): Promise<Produto[]> {
    let produtos: Produto[] = [];
    try {
        produtos = (await api.get("/produtos")).data;
    }
    catch(e) {
        console.log(e);
    }

    return produtos;
  }

  static async salvar(produto:Produto) {
    await api.post("/produto", produto)
  }
}

export default ProdutoServico;