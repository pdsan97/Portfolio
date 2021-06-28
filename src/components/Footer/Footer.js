import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

import {
	FooterWrapper,
	Wrapper,
	FooterText,
	FooterLogo,
	FooterSocialLinks,
	SocialWrapper,
	Copyright,
} from './Atoms';

export const Footer = () => {
	return (
		<FooterWrapper>
			<Wrapper>
				<FooterLogo>Peter Sanchez</FooterLogo>
				<FooterText>
					Please feel free to contact me with your most convenient link
					below.
				</FooterText>
				<FooterSocialLinks>
					<SocialWrapper
						href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit "
						target="_blank"
						rel="noreferrer noopener"
					>
						<AiFillLinkedin />
					</SocialWrapper>
					<SocialWrapper
						href="https://github.com/pdsan97"
						target="_blank"
						rel="noreferrer noopener"
					>
						<AiFillGithub />
					</SocialWrapper>
					<SocialWrapper
						href="Father#4976"
						target="_blank"
						rel="noreferrer noopener"
					>
						<FaDiscord />
					</SocialWrapper>
				</FooterSocialLinks>
			</Wrapper>
			<Copyright>© 2021, Created by Peter Sanchez</Copyright>
		</FooterWrapper>
	);
};
