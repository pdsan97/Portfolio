import styled from '@emotion/styled/macro';

export const ProjectsWrapper = styled.div`
	display: grid;
	max-width: 1140px;
	margin: 32px auto;
	align-items: center;
	justify-content: center;
	min-height: 561px;
	margin-bottom: 111px;
	padding: 16px;
	gap: 32px;
	grid-template-columns: 1fr 1fr;
	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

export const ProjectWrapper = styled.div`
	max-width: 520px;
	max-height: 360px;
	width: 100%;
	height: 100%;
	box-shadow: 0 0 10px #dddde3;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 32px;
	margin: 0 auto;
`;

export const Gif = styled.img`
	width: 100%;
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: red;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	background-color: rgba(0, 0, 0, 0.6);
	transition: all 0.5s ease;
	opacity: 0;
	z-index: 1;
	@media (max-width: 579px) {
		flex-direction: column;
	}
`;

export const VisitUrlButton = styled.a`
	font-size: 16px;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 50px;
	padding: 12px 36px;
	border: none;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	z-index: 1;
	width: 240px;
	color: ${props => props.theme.primaryColor};
	background-color: rgb(239, 239, 239);
	text-align: center;
	text-decoration: none;
	transition: all 0.5s ease;
	transform: translateY(100px);

	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 0%;
		background: rgba(125, 23, 23, 0.1);
		height: 100%;
		z-index: -1;
		transition: all 0.3s ease;
	}

	&:hover::before {
		width: 100%;
	}

	&:hover {
		color: ${props => props.theme.primaryColor};
	}
`;

export const VisitRepositoryButton = styled(VisitUrlButton)``;

export const GifWrapper = styled.div`
	display: flex;
	position: relative;
	transition: all 0.5s ease;
	border-bottom: 1px solid #dddde3;

	&:hover ${Overlay} {
		opacity: 1;
	}
	&:hover ${VisitRepositoryButton} {
		transform: translateY(0);
	}
	&:hover ${VisitUrlButton} {
		transform: translateY(0);
	}
`;

export const TitleWrapper = styled.a`
	font-size: 24px;
	font-weight: 700;
	text-align: center;
	padding: 1rem;
	text-decoration: none;
	color: ${props => props.theme.primaryColor};
`;
