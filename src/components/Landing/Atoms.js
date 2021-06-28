import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { Developer } from '../../svg/Developer';
import { Shape } from '../../svg/Shape';

export const LandingWrapper = styled.div`
	display: flex;
	background-color: ${props => props.theme.primaryColor};
	position: relative;
	overflow: hidden;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	display: flex;
	max-width: 1140px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 561px;
	margin: 0 auto;
`;

export const ShapeSVG = styled(Shape)`
	margin-bottom: 32px;
	fill: ${props => props.theme.primaryColor};
`;

export const circleBounce = keyframes`
  0%, 100% {
    transform: translateX(0px);
	}

	50% {
    transform: translateX(50px);
	}
`;

export const SquareRotate = keyframes`
	0% {
    transform: rotate(
		0deg
		);
	}
		100% {
    transform: rotate(
		360deg
	)};

`;

export const FirstCircle = styled.div`
	height: 100px;
	width: 100px;
	top: 15%;
	left: 20%;
	border-radius: 50%;
	background-color: #ffffff;
	position: absolute;
	opacity: 0.08;
	animation: ${circleBounce} 5s linear infinite;
`;

export const Square = styled.div`
	height: 100px;
	width: 100px;
	top: 40%;
	left: calc(0% - 50px);
	background-color: transparent;
	position: absolute;
	border: 5px solid #ffffff;
	opacity: 0.08;
	animation: ${SquareRotate} 10s linear infinite;
`;

export const LoaderRotate = keyframes`
0% {
    transform: rotate(
0deg
);
}
100% {
    transform: rotate(
360deg
);
}
`;

export const Loader = styled.div`
	position: absolute;
	opacity: 0.08;
	height: 60px;
	width: 60px;
	top: 10%;
	left: 90%;
	border-radius: 50%;
	background-color: transparent;
	border: 5px solid #ffffff;
	border-left: 5px solid transparent;
	border-bottom: 5px solid transparent;
	animation: ${LoaderRotate} 5s linear infinite;
`;

export const SecondCircleBounce = keyframes`
0%, 100% {
    transform: scale(0.5);
}
50% {
    transform: scale(1);
}
`;

export const SecondCircle = styled.div`
	height: 200px;
	width: 200px;
	top: 40%;
	left: calc(100% - 100px);
	border-radius: 50%;
	background-color: #ffffff;
	position: absolute;
	opacity: 0.08;
	animation: ${SecondCircleBounce} 10s linear infinite;
`;

export const Title = styled.h1`
	font-size: 55px;
	color: #ffffff;
	font-weight: 700;
	line-height: 60px;
	margin: 0;
`;

export const Text = styled.p`
	color: #ffffff;
	font-size: 18px;
	margin-bottom: 40px;
	margin-top: 20px;
	line-height: 28px;
	font-weight: normal;
`;

export const Button = styled.button`
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
	width: 250px;
	color: ${props => props.theme.primaryColor};

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

	@media (max-width: 1725px) {
		margin: 0 auto;
	}
`;

export const imageAnimation = keyframes`
0%, 100% {
    transform: translateY(15px);
}

50% {
    transform: translateY(-15px);
}
`;

export const DeveloperSVG = styled(Developer)`
	animation: ${imageAnimation} 5s linear infinite;
	@media (max-width: 1725px) {
		margin: 0 auto;
		max-width: 500px;
	}

	@media (max-width: 540px) {
		max-width: 300px;
	}
`;

export const Container = styled.div`
	display: flex;
	max-width: 1140px;
	padding: 0 32px;
	@media (max-width: 1725px) {
		flex-wrap: wrap;
		flex-direction: row-reverse;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 1725px) {
		order: 2;
		text-align: center;
	}
`;
