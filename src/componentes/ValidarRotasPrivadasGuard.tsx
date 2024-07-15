import { Navigate, Outlet } from 'react-router-dom';
import LoginService from '../servicos/loginServico';

const ValidarRotasPrivadasGuard = () => {
  const auth:boolean = LoginService.tokenValido();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ValidarRotasPrivadasGuard;
