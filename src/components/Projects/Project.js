import {
	ProjectWrapper,
	GifWrapper,
	Gif,
	Overlay,
	VisitUrlButton,
	VisitRepositoryButton,
	TitleWrapper,
} from './Atoms';

export const Project = ({ title, url, repositoryUrl, gif }) => {
	console.log(gif);
	return (
		<ProjectWrapper>
			<GifWrapper>
				<Gif src={gif}></Gif>
				<Overlay>
					<VisitUrlButton
						href={url}
						target="_blank"
						rel="noreferrer noopener"
					>
						GO TO LINK
					</VisitUrlButton>
					<VisitRepositoryButton
						href={repositoryUrl}
						target="_blank"
						rel="noreferrer noopener"
					>
						GO TO REPOSITORY
					</VisitRepositoryButton>
				</Overlay>
			</GifWrapper>
			<TitleWrapper href={url}>{title}</TitleWrapper>
		</ProjectWrapper>
	);
};
