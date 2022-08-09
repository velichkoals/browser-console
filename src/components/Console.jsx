import React from 'react';
import styled from 'styled-components';

const StyledConsole = styled.textarea`
	margin: 1rem 0;
	background-color: #171717;
	border: none;
	color: ${(props) => props.color || 'rgba(255, 255, 255, 0.91)'};
	resize: none;
	width: 90%;
	height: 70vh;

	&:focus {
		outline: none;
	}
`;

export const Console = (props) => {
	return <StyledConsole {...props} />;
};
