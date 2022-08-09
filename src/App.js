import { useState } from 'react';
import { Title } from './components/Title';
import { Console } from './components/Console';
import { Button } from './components/Button';
import { Flex } from './components/Flex';
import styled from 'styled-components';

const AppWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 2rem;
	background-color: ${(props) => props.theme.colors.black};
`;

function App() {
	const [lines, setLines] = useState(['C:/users/velichkoals>']);
	const [textareaValue, setTextareaValue] = useState('');

	const handleClick = () => {
		setLines(['C:/users/velichkoals>']);
		setTextareaValue('');
	};

	return (
		<AppWrapper>
			<Title color={'#28d31b'}>
				velichkoals@Alexey <span style={{ color: '#7445bb' }}>MINGW64</span> ~
			</Title>
			<Flex direction='column'>
				<Console
					lines={lines}
					setLines={setLines}
					textareaValue={textareaValue}
					setTextareaValue={setTextareaValue}
				/>
				<Button
					onClick={handleClick}
					color='rgba(40,211,27,0.7)'
					align='flex-end'
				>
					<svg>
						<rect x='0' y='0' fill='none' width='100%' height='100%' />
					</svg>
					Submit
				</Button>
			</Flex>
		</AppWrapper>
	);
}

export default App;
