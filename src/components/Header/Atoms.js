import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { Close } from '../../svg/Close';
import { Hamburger } from '../../svg/Hamburger';

export const HeaderWrapper = styled.header`
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	/* backdrop-filter: saturate(180%) blur(20px); */
	background: transparent;
	padding: 12px;
	background-color: ${props => props.theme.primaryColor};
	position: sticky;
	top: 0;
	z-index: 9;
`;

export const HeaderContent = styled.div`
	max-width: 1140px;
	display: flex;
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	padding: 0 32px;
	align-items: center;
`;

export const Name = styled(Link)`
	font-size: 30px;
	font-weight: 700;
	text-transform: uppercase;
	color: #ffffff;
	text-decoration: none;
	&:hover {
		color: #ffffff;
	}
	@media (max-width: 500px) {
		font-size: 24px;
	}
	@media (max-width: 320px) {
		font-size: 16px;
	}
`;

export const HeaderLink = styled(Link)`
	color: #ffffff;
	font-size: 16px;
	text-transform: capitalize;
	font-weight: 600;
	opacity: ${props => (props.selected ? '1' : '0.6')};
	padding: 0 10px;
	text-decoration: none;
	&:hover {
		color: #ffffff;
	}
`;

export const HeaderLinks = styled.div`
	display: flex;
	gap: 16px;
`;

export const HamburgerMenu = styled(Hamburger)`
	fill: #fff;
	width: 2em;
	height: 2em;
	cursor: pointer;
`;

export const DrawerWrapper = styled.div`
	background-color: #232323;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	right: ${props => (props.isOpen ? '0' : '-100%')};
	transition: 0.7s;
	z-index: 10;
`;

export const DrawerButtons = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const CloseButton = styled(Close)`
	width: 16px;
	height: 16px;
	fill: #f32013;
	margin-right: 56px;
	margin-top: 24px;
	cursor: pointer;
`;

export const DrawerLinks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	justify-content: center;
	width: 100%;
	height: 100%;
	& > a {
		font-size: 1.3rem;
	}
`;
