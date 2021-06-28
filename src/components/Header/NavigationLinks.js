import { useLocation } from 'react-router-dom';
import { HeaderLink } from './Atoms';
export const NavigationLinks = ({ links, callback }) => {
	const route = useLocation();
	return (
		<>
			{links.map(link => (
				<HeaderLink
					key={link.id}
					selected={route.pathname === link.path}
					to={link.path}
					onClick={callback}
				>
					{link.name}
				</HeaderLink>
			))}
		</>
	);
};
