import { Flex } from './Flex';
import { Line } from './Line';
import styled from 'styled-components';

const StyledConsole = styled.textarea`
	font-size: 15px;
	background-color: ${(props) => props.theme.colors.black};
	border: none;
	color: ${(props) => props.color || props.theme.colors.white};
	resize: none;
	width: 90%;
	height: 70vh;

	&:focus {
		outline: none;
	}
`;

export const Console = ({
	color,
	lines,
	setLines,
	textareaValue,
	setTextareaValue,
	...props
}) => {
	const onKeyPress = (e) => {
		if (e.charCode === 13) {
			setLines([...lines, 'C:/users/velichkoals>']);
		}
	};
	return (
		<Flex>
			<Flex direction='column' margin='0 3px 0 0'>
				{lines.map((line, index) => (
					<Line key={index} color={color}>
						{line}
					</Line>
				))}
			</Flex>
			<StyledConsole
				onKeyPress={onKeyPress}
				value={textareaValue}
				onChange={(e) => setTextareaValue(e.target.value)}
				color={color}
				{...props}
			/>
		</Flex>
	);
};
