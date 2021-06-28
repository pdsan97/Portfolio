import styled from '@emotion/styled/macro';
import { Wrapper } from '../Footer/Atoms';
import { GoCheck } from 'react-icons/go';

export const ProfilePicture = styled.img`
	max-width: 350px;
	margin: 0 64px;
	@media (max-width: 1131px) {
		margin: 32px auto;
	}
`;

export const AboutWrapper = styled(Wrapper)`
	margin-bottom: 393px;
	margin-top: 100px;
	justify-content: center;
`;

export const Subtitle = styled.h2`
	font-size: 30px;
	line-height: 38px;
	color: #222222;
	font-weight: 700;
	margin: 0;
	margin-bottom: 16px;
`;

export const Text = styled.p`
	font-size: 16px;
	line-height: 26px;
	color: #555555;
	margin: 0;
	font-weight: 400;
	@media (max-width: 1131px) {
		text-align: center;
	}
`;

export const GoCheckSVG = styled(GoCheck)`
	fill: ${props => props.theme.primaryColor};
	width: 1.5em;
	height: 1.5em;
	margin: 0 8px;
`;

export const Accomplishments = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 32px;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin-top: 8px;
	@media (max-width: 1131px) {
		order: 2;
		text-align: center;
	}
	@media (max-width: 627px) {
		align-items: flex-start;
	}
`;
export const ContainerWrapper = styled.div`
	display: flex;
	@media (max-width: 1131px) {
		flex-wrap: wrap;
	}
`;

export const ColumnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 1131px) {
		align-items: center;
	}
`;
