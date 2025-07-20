import styled from 'styled-components';
import ContentsHeader from '../components/layout/ContentsHeader';
import Menu from '../components/menu/Menu';
import { Link, Outlet } from 'react-router-dom';
import MainStyle from '../styles/Main.module.scss';

const MainGrid = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 25rem auto;
	height: 100vh;
`;

const SideMenu = styled.aside`
	box-shadow: 0 3px 12px rgba(0, 0, 0, .16);
`;

const Contents = styled.div`
	width: 100%;
`;

const MainPage = () => {
	return (
		<MainGrid>
			{/* Side Menu */}
			<SideMenu>
				<h1 className={MainStyle.logo}>
					<Link to='/'>대전세잔직업전문학교 CSS</Link>
				</h1>
				<Menu />
			</SideMenu>
			{/* Right */}
			<Contents>
				<ContentsHeader />
				<div className={MainStyle.content}>
					<Outlet />
				</div>
			</Contents>
		</MainGrid>
	)
}

export default MainPage