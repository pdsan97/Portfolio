import styled from '@emotion/styled/macro';

export const Wrapper = styled.div`
	display: flex;
	max-width: 1140px;
	margin: 32px auto;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 561px;
	margin-bottom: 293px;
`;

export const Title = styled.span`
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	display: inline-block;
	text-transform: uppercase;
	margin: 0 0 15px;
	position: relative;
	padding: 5px 10px;
	z-index: 1;
	color: ${props => props.theme.primaryColor};
	width: fit-content;
	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: ${props => props.theme.primaryColor};
		z-index: -1;
		border-radius: 4px;
		opacity: 0.1;
	}
`;

export const Row = styled.div`
	display: flex;
`;
export const Column = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Input = styled.input`
	height: 40px;
	color: #555555;
	border: none;
	border-bottom: 2px solid #d9d9d9;
	border-radius: 0;
	transition: all 0.5s ease;
	outline: none;
	flex-grow: 1;
	padding-left: 16px;
	margin-left: 32px;
	margin-top: 32px;
	@media (max-width: 420px) {
		margin-left: 0;
	}
	&:focus-within {
		border-bottom: 2px solid ${props => props.theme.primaryColor};
	}
`;

export const Textarea = styled.textarea`
	height: 120px;
	color: #555555;
	border: none;
	border-bottom: 2px solid #d9d9d9;
	border-radius: 0;
	transition: all 0.5s ease;
	outline: none;
	margin-left: 32px;
	margin-top: 32px;
	padding-left: 16px;
	@media (max-width: 420px) {
		margin-left: 0;
	}
	&:focus-within {
		border-bottom: 2px solid ${props => props.theme.primaryColor};
	}
`;

export const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 32px;
	flex-wrap: wrap;
	@media (max-width: 1100px) {
		grid-template-columns: 1fr;
	} ;
`;

export const Button = styled.button`
	font-size: 16px;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 50px;
	padding: 8px 32px;
	border: none;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	z-index: 1;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out;
	width: fit-content;
	color: #fff;
	background-color: ${props => props.theme.primaryColor};
	margin-left: 32px;
	margin-top: 16px;

	::before {
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
	@media (max-width: 1100px) {
		margin: 16px auto;
	} ;
`;

export const IconWrapper = styled.div`
	height: 50px;
	width: 50px;
	background-color: #f5f5f5;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	& > svg {
		fill: ${props => props.theme.primaryColor};
	}
	@media (max-width: 1100px) {
		margin-left: 32px;
	}
	@media (max-width: 420px) {
		margin-left: 0;
	}
`;
export const InfoTitle = styled.span`
	font-size: 16px;
	font-weight: 600;
	line-height: 26px;
	margin: 0 0 2px;
	color: ${props => props.theme.primaryColor};
	margin-left: 16px;
`;
export const InfoSubtitle = styled.span`
	font-size: 16px;
	font-weight: 400;
	line-height: 26px;
	color: #555555;
	margin: 0;
	margin-left: 16px;
`;

export const InfoWrapper = styled.div`
	display: flex;
	margin-top: 32px;
`;

export const InputWrapper = styled.div`
	display: flex;
	@media (max-width: 1100px) {
		flex-direction: column;
	} ;
`;
