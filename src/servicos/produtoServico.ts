import urlApi from "../ambiente/urlApi";
import Produto from "../models/produto";

class ProdutoServico {
  static async todos(): Promise<Produto[]> {
    const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIwNzc3NzMxLCJleHAiOjE3MjA4NjQxMzF9.sRiNXBoo2zNG7y0BlH4eaofhkRX7IUe5JmwpvNG58MY";
    let produtos: Produto[] = [];
    try {
        const response = await fetch(`${urlApi}/produtos`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        produtos = await response.json();
    }
    catch(e) {
        console.log(e);
    }

    return produtos;
  }
}

export default ProdutoServico;