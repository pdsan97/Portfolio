import {
	AboutWrapper,
	ContainerWrapper,
	ColumnWrapper,
	ProfilePicture,
	Subtitle,
	Text,
	Accomplishments,
	Container,
	GoCheckSVG,
} from './Atoms';

import { Title } from '../Contact/Atoms';

export const About = () => {
	return (
		<AboutWrapper>
			<ContainerWrapper>
				<ProfilePicture src="https://i.imgur.com/77jICNA.png" />
				<ColumnWrapper>
					<Title>ABOUT ME</Title>
					<Subtitle>Web Developer</Subtitle>
					<Text>
					Hello, my name is Peter Sanchez. I am a full time back end web developer currently working for a 
					construction company based in Charlotte, North Carolina. I am currently a student in the 
					UNCC coding bootcamp program. At work i mostly do IT work mixed in with Social Media Optimization 
					and other kinds of media advertizing. I've been working in this field for about 3 years now. 
					I am also fluent in English and Spanish.
					</Text>
					<Accomplishments>
						<Container>
							<GoCheckSVG />
							<Text>
								Efficiently running a 5 man indie game development team for 6 months.
							</Text>
						</Container>
						<Container>
							<GoCheckSVG />
							<Text>
								Overhauling my company's store page.
							</Text>
						</Container>
						<Container>
							<GoCheckSVG />
							<Text>
								Increasing Site traffic by 20% through SEO.
							</Text>
						</Container>
					</Accomplishments>
				</ColumnWrapper>
			</ContainerWrapper>
		</AboutWrapper>
	);
};
