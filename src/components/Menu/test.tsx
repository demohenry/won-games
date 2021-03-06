import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
	it('should render menu', () => {
		renderWithTheme(<Menu />);

		expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
		expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
		expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
	});

	it('should render the open/close mobile menu', () => {
		renderWithTheme(<Menu />);

		//selecionar o MenuFull
		const fullMenuElement = screen.getByRole('navigation', { hidden: true });
		//verificar se o menu tá escondido
		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
		expect(fullMenuElement).toHaveStyle({ opacity: 0 });
		//clicar no botão do menu e verificar se ele abriu
		fireEvent.click(screen.getByLabelText(/open menu/i));
		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
		expect(fullMenuElement).toHaveStyle({ opacity: 1 });

		//clicar no botão de fechar menu e verificar se ele fechou
		fireEvent.click(screen.getByLabelText(/close menu/i));
		expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
		expect(fullMenuElement).toHaveStyle({ opacity: 0 });
	});

	it('should show register box when logged out', () => {
		renderWithTheme(<Menu />);

		expect(screen.getByText(/log in now/i)).toBeInTheDocument();
		expect(screen.getByText(/sign up/i)).toBeInTheDocument();
	});

	it('should show whislist and account link when logged in', () => {
		renderWithTheme(<Menu username="demo" />);

		expect(screen.getByText(/my account/i)).toBeInTheDocument();
		expect(screen.getByText(/wishlist/i)).toBeInTheDocument();
		expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
	});
});
