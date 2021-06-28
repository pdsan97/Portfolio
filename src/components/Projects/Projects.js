import googleBooks from '../../gifs/google-books.gif';
import fitnessTracker from '../../gifs/fitness-tracker.gif';
import blog from '../../gifs/blog.gif';
import quizGame from '../../gifs/quiz-game.gif';
import workdayScheduler from '../../gifs/workday-scheduler.gif';
import gify from '../../gifs/giphy.gif';

import { ProjectsWrapper } from './Atoms';
import { Project } from './Project';
export const projectsConfig = [
	{
		id: 0,
		title: 'Google books',
		url: 'https://find-googlebooks.herokuapp.com',
		repositoryUrl: 'https://github.com/pdsan97/Google-Books',
		gif: googleBooks,
	},
	{
		id: 1,
		title: 'Fitness Tracker',
		url: 'https://fitness-tracker-premium.herokuapp.com',
		repositoryUrl: 'https://github.com/pdsan97/Fitness-Tracker',
		gif: fitnessTracker,
	},
	{
		id: 2,
		title: 'TechIT',
		url: 'https://github.com/pdsan97/tech-blog',
		repositoryUrl: 'https://github.com/pdsan97/tech-blog',
		gif: blog,
	},
	{
		id: 3,
		title: 'Workday Scheduler',
		url: 'https://pdsan97.github.io/Workday-Agenda',
		repositoryUrl: 'https://github.com/pdsan97/Workday-Agenda',
		gif: workdayScheduler,
	},
	{
		id: 4,
		title: 'Quiz Game',
		url: 'https://pdsan97.github.io/Quiz-Coding',
		repositoryUrl: 'https://github.com/pdsan97/Quiz-Coding',
		gif: quizGame,
	},
	{
		id: 5,
		title: 'gify Day',
		url: 'https://joshuamaney.github.io/have_a_giphy_day',
		repositoryUrl: 'https://github.com/joshuamaney/have_a_giphy_day',
		gif: gify,
	},
];

export const Projects = () => {
	return (
		<ProjectsWrapper>
			{projectsConfig.map(project => (
				<Project
					key={project.id}
					title={project.title}
					url={project.url}
					repositoryUrl={project.repositoryUrl}
					gif={project.gif}
				/>
			))}
		</ProjectsWrapper>
	);
};
