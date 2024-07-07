import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

test('render Nav sem passar o ativo, deveria deixar a home', () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );
  const linkAtivo = screen.getByRole('link', { name: /home/i });
  expect(linkAtivo).toHaveClass('ativo');
});

test('render Nav passando login', () => {
  render(
    <MemoryRouter>
      <Nav menuAtivo='login' />
    </MemoryRouter>
  );
  const linkAtivo = screen.getByRole('link', { name: /login/i });
  expect(linkAtivo).toHaveClass('ativo');
});

test('render Nav passando cadastro', () => {
  render(
    <MemoryRouter>
      <Nav menuAtivo='cadastro' />
    </MemoryRouter>
  );
  const linkAtivo = screen.getByRole('link', { name: /cadastro/i });
  expect(linkAtivo).toHaveClass('ativo');
});