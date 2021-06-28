import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import {
	Wrapper,
	Form,
	Title,
	Column,
	InputWrapper,
	Input,
	Textarea,
	Button,
	InfoWrapper,
	IconWrapper,
	InfoTitle,
	InfoSubtitle,
} from './Atoms';
export const Contact = () => {
	const handleSubmit = ev => {
		ev.preventDefault();
		const [nameInput, emailInput, subjectInput, messageInput] =
			ev.target.elements;
		const name = nameInput.value;
		const email = emailInput.value;
		const subject = subjectInput.value;
		const message = messageInput.value;
		nameInput.value = '';
		emailInput.value = '';
		subjectInput.value = '';
		messageInput.value = '';
		// eslint-disable-next-line no-restricted-globals
		location.href =
			'mailto:' +
			'pdsan97@gmail.com' +
			'?cc=' +
			name +
			'&subject=' +
			subject +
			email +
			'&body=' +
			message;
	};
	return (
		<Wrapper>
			<Title>CONTACT ME</Title>
			<Form onSubmit={handleSubmit}>
				<Column>
					<InputWrapper>
						<Input
							minLength={5}
							required
							type="text"
							placeholder="Your Name"
						/>
						<Input
							minLength={5}
							required
							type="email"
							placeholder="Your Email"
						/>
					</InputWrapper>
					<Input
						placeholder="Your Subject"
						required
						minLength={5}
						type="text"
					/>
					<Textarea
						placeholder="Message"
						minLength={5}
						type="text"
						required
					/>
					<Button type="submit">Submit</Button>
				</Column>
				<Column>
					<InfoWrapper>
						<IconWrapper>
							<MdEmail />
						</IconWrapper>
						<Column>
							<InfoTitle>Email</InfoTitle>
							<InfoSubtitle>pdsan97@gmail.com</InfoSubtitle>
						</Column>
					</InfoWrapper>
					<InfoWrapper>
						<IconWrapper>
							<FaPhoneAlt />
						</IconWrapper>
						<Column>
							<InfoTitle>Call me</InfoTitle>
							<InfoSubtitle>704-369-3295</InfoSubtitle>
						</Column>
					</InfoWrapper>
				</Column>
			</Form>
		</Wrapper>
	);
};
