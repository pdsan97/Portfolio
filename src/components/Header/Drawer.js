import {
	DrawerWrapper,
	DrawerButtons,
	CloseButton,
	DrawerLinks,
} from './Atoms';

export const Drawer = ({ onClose, isOpen, children }) => {
	return (
		<DrawerWrapper isOpen={isOpen}>
			<DrawerButtons>
				<CloseButton onClick={onClose} />
			</DrawerButtons>
			<DrawerLinks>{children}</DrawerLinks>
		</DrawerWrapper>
	);
};
