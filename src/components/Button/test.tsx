import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import Button from '.';

describe('<Button />', () => {
	it('should render the medium button size by DEFAULT', () => {
		const { container } = renderWithTheme(<Button>Buy now</Button>);

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			height: '4rem',
			padding: '0.8rem 3.2rem',
			'font-size': '1.4rem',
		});

		expect(container.firstChild).toMatchInlineSnapshot(`
		.c0 {
		  display: -webkit-inline-box;
		  display: -webkit-inline-flex;
		  display: -ms-inline-flexbox;
		  display: inline-flex;
		  -webkit-align-items: center;
		  -webkit-box-align: center;
		  -ms-flex-align: center;
		  align-items: center;
		  -webkit-box-pack: center;
		  -webkit-justify-content: center;
		  -ms-flex-pack: center;
		  justify-content: center;
		  background: linear-gradient(180deg,#ff5f5f 0%,#f062c0 50%);
		  color: #FAFAFA;
		  border: none;
		  border-radius: 0.4rem;
		  padding: 0.8rem;
		  -webkit-text-decoration: none;
		  text-decoration: none;
		  cursor: pointer;
		  height: 4rem;
		  font-size: 1.4rem;
		  padding: 0.8rem 3.2rem;
		}

		.c0:hover {
		  background: linear-gradient(180deg,#e35565 0%,#d958a6 50%);
		}

		<button
		  class="c0"
		>
		  <span>
		    Buy now
		  </span>
		</button>
	`);
	});

	it('should render the small button size', () => {
		renderWithTheme(<Button size="small">Buy now</Button>);

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			height: '3rem',
			'font-size': '1.2rem',
		});
	});

	it('should render the large button size', () => {
		renderWithTheme(<Button size="large">Buy now</Button>);

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			height: '5rem',
			padding: '0.8rem 4.8rem',
			'font-size': '1.6rem',
		});
	});

	it('should render the button with a fullWidth version', () => {
		renderWithTheme(<Button fullWidth>Buy now</Button>);

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			width: '100%',
		});
	});

	it('should render an icon version', () => {
		renderWithTheme(
			<Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
		);

		expect(screen.getByText(/buy now/i)).toBeInTheDocument();
		expect(screen.getByTestId('icon')).toBeInTheDocument();
	});

	it('should render Button as a link', () => {
		renderWithTheme(
			<Button as="a" href="/link">
				Buy now
			</Button>
		);

		expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
			'href',
			'/link'
		);
	});
});
