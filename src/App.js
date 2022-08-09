import { Title } from './components/Title';
import { Console } from './components/Console';
import { Button } from './components/Button';
import styled from 'styled-components';
import { Flex } from './components/Flex';

const AppWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 2rem;
	background-color: #171717;
`;

function App() {
	return (
		<AppWrapper>
			<Title color={'#28d31b'}>
				velichkoals@Alexey <span style={{ color: '#7445bb' }}>MINGW64</span> ~
			</Title>
			<Flex direction='column'>
				<Console />
				<Button color='rgba(40,211,27,0.7)' align='flex-end'>
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
