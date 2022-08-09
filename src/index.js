import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
	* {
		font-family: 'Consolas', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

const theme = {
	colors: {
		black: '#171717',
		white: 'rgba(255, 255, 255, 0.91)',
		green: '#28d31b',
	},
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Global />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
