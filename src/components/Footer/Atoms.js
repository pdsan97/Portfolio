import styled from '@emotion/styled/macro';

export const FooterWrapper = styled.div`
	padding-top: 80px;
	background-color: ${props => props.theme.primaryColor};
`;

export const Wrapper = styled.div`
	max-width: 1140px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FooterLogo = styled.span`
	font-size: 30px;
	font-weight: 700;
	color: #ffffff;
	text-transform: uppercase;
	display: block;
	margin: 0 0 15px;
`;

export const FooterText = styled.p`
	font-size: 16px;
	text-align: center;

	color: #eeeeee;
	font-weight: 400;
	margin: 0 5px 25px;
`;

export const FooterSocialLinks = styled.div`
	display: flex;
	gap: 8px;
	margin-bottom: 60px;
`;

export const SocialWrapper = styled.a`
	height: 40px;
	width: 40px;
	border: 1px solid #ffffff;
	display: block;
	color: #ffffff;
	border-radius: 50%;
	transition: all 0.5s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		background-color: #ffffff;
	}
	&:hover > svg {
		fill: ${props => props.theme.primaryColor};
	}
`;

export const Copyright = styled.div`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	padding: 20px 15px;
	display: flex;
	font-size: 14px;
	color: #eeeeee;
	font-weight: 400;
	justify-content: center;
`;
