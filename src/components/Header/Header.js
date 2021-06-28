import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
	HeaderWrapper,
	HeaderContent,
	Name,
	HamburgerMenu,
	HeaderLinks,
} from './Atoms';
import { NavigationLinks } from './NavigationLinks';
import { Drawer } from './Drawer';

const links = [
	{
		id: 0,
		name: 'Home',
		path: '/',
	},
	{
		id: 1,
		name: 'About',
		path: '/about',
	},
	{
		id: 2,
		name: 'Projects',
		path: '/projects',
	},
	{
		id: 3,
		name: 'Contact',
		path: '/contact',
	},
];

export const Header = () => {
	const isMobile = useMediaQuery({ maxWidth: 934 });
	const [isOpen, setIsOpen] = useState(false);
	return (
		<HeaderWrapper>
			<HeaderContent>
				<Name to="/">PETER SANCHEZ</Name>
				{isMobile ? (
					<>
						<HamburgerMenu
							onClick={() => setIsOpen(true)}
						></HamburgerMenu>
					</>
				) : (
					<HeaderLinks>
						<NavigationLinks links={links} />
					</HeaderLinks>
				)}
			</HeaderContent>
			<Drawer onClose={() => setIsOpen(false)} isOpen={isOpen}>
				<NavigationLinks
					links={links}
					callback={() => setIsOpen(false)}
				/>
			</Drawer>
		</HeaderWrapper>
	);
};
