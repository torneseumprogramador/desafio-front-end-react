import Footer from '../componentes/Footer';
import React, { useState } from 'react';
import LoginServico from '../servicos/loginServico';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [erro, setErro] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();

    try {
      const data = await LoginServico.login(email, senha);
      LoginServico.setLocalStorage(data.token);
      navigate('/');
    } catch (e: any) {
      let mensagem = e.response?.data
      if(!mensagem) mensagem = e.message
      setErro(mensagem);
    }
  }

  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content" className='login'>
          <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Login</h6>
                </div>
                <div className="card-body">
                <form className="user" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control form-control-user" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Digite o email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control form-control-user" value={senha} onChange={(e) => setSenha(e.target.value)} id="senha" name="senha" placeholder="Digite sua senha" />
                    </div>

                    {erro && <div className="alert alert-danger">{erro}</div>}

                    <button className="btn btn-primary btn-user btn-block">
                        Login
                    </button>
                  </form>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
