import urlApi from "../ambiente/urlApi";

class ProdutoServico {
    constructor(token){
        this.token = token
    };

    async todos() {
        let produtos = [];
        try {
            const response = await fetch(`${urlApi}/produtos`, {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${this.token}`,
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

    async buscarPorId(id) {
        try {
            const response = await fetch(`${urlApi}/produto/${id}`, {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${this.token}`,
                  'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            return await response.json();
        }
        catch(e) {
            console.log(e);
        }

        return {};
    }

    async salvar(produto) {
        let response = null;

        if(!produto?.id || produto?.id < 1){
            response = await fetch(`${urlApi}/produto`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            });
        }
        else{
            response = await fetch(`${urlApi}/produto/${produto.id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            });
        }
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    }

    async excluirPorId(produtoId) {
        const response = await fetch(`${urlApi}/produto/${produtoId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    }
}

export default ProdutoServico;