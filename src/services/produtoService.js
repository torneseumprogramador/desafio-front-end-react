import urlApi from "../ambiente/urlApi";

class ProdutoServico {
    static async todos() {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIwOTQ3OTMxLCJleHAiOjE3MjEwMzQzMzF9.PeCIS2Y4vuy5C5TmKwQ2v_HUDJZ3dylwhYhBKFZyaVI";
        let produtos = [];
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

    static async buscarPorId(id) {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIwOTQ3OTMxLCJleHAiOjE3MjEwMzQzMzF9.PeCIS2Y4vuy5C5TmKwQ2v_HUDJZ3dylwhYhBKFZyaVI";
        try {
            const response = await fetch(`${urlApi}/produto/${id}`, {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${token}`,
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

    static async salvar(produto) {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIwOTQ3OTMxLCJleHAiOjE3MjEwMzQzMzF9.PeCIS2Y4vuy5C5TmKwQ2v_HUDJZ3dylwhYhBKFZyaVI";
    
        let response = null;

        if(!produto?.id || produto?.id < 1){
            response = await fetch(`${urlApi}/produto`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            });
        }
        else{
            response = await fetch(`${urlApi}/produto/${produto.id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            });
        }
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    }

    static async excluirPorId(produtoId) {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIwOTQ3OTMxLCJleHAiOjE3MjEwMzQzMzF9.PeCIS2Y4vuy5C5TmKwQ2v_HUDJZ3dylwhYhBKFZyaVI";
    
        const response = await fetch(`${urlApi}/produto/${produtoId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    }
}

export default ProdutoServico;