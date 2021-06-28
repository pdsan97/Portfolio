import {
	LandingWrapper,
	Wrapper,
	Container,
	Content,
	Title,
	Text,
	Button,
	DeveloperSVG,
	FirstCircle,
	Square,
	Loader,
	SecondCircle,
	ShapeSVG,
} from './Atoms';
export const Landing = () => {
	return (
		<>
			<LandingWrapper>
				<Wrapper>
					<Container>
						<Content>
							<Title>Web Developer</Title>
							<Text>
								Welcome to my portfolio, here I'll be posting my most recent development projects to track and
								show my progress as a developer. Feel free to contact me with any questions. My focus as a developer
								is in the front and back end, however, im quickly learning how to use new technologies such as REACT, MongoDB,
								SQL, Insomnia, and heroku.
							</Text>
							<Button>Download CV</Button>
						</Content>
						<DeveloperSVG />
					</Container>
				</Wrapper>
				<FirstCircle></FirstCircle>
				<Square />
				<Loader></Loader>
				<SecondCircle></SecondCircle>
			</LandingWrapper>
			<ShapeSVG />
		</>
	);
};
