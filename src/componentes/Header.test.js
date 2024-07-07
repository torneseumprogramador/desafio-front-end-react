import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

jest.mock('./Nav', () => {
  return function MockNav({ menuAtivo }) {
    return <div data-testid="mock-nav">{menuAtivo}</div>;
  };
});

test('verifica se Nav é utilizado dentro do Header com a prop correta', () => {
  const menuAtivo = "cadastro";
  render(
    <MemoryRouter>
      <Header menuAtivo={menuAtivo} />
    </MemoryRouter>
  );

  const navElement = screen.getByTestId('mock-nav');
  expect(navElement).toBeInTheDocument();
  expect(navElement).toHaveTextContent(menuAtivo);
});
