import styled from 'styled-components'
import MenuStyle from '../../styles/menu/Menu.module.scss'
import { Link } from 'react-router-dom';

const MenuList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem 0;

	> li {
		width: 100%;

		> a {
			display: block;
			padding: 1rem 2rem;
			font-size: 1.4rem;
			font-weight: 600;
		}
	}
`;

const Menu = () => {
	return (
		<div className={MenuStyle.menu__area}>
			<nav>
				<MenuList>
					<li><Link to='/position'>Position</Link></li>
					<li><Link to='/display'>Display</Link></li>
				</MenuList>
			</nav>
		</div>
	)
}

export default Menu